import React, { useEffect, useCallback, useState } from 'react';
import Pagination from '../Pagination';
import Icon from '../Icon';
import './table.less'

let iconStyle = {
    width: 10,
    height: 10,
    cursor: 'pointer',
    verticalAlign: 'top'
}

const Table = (props) =>{
    const [datasource, set_datasource] = useState([]);
    const [pagination_info, set_pagination] = useState({current: 1, pageSize: 2});
    const [showPagination, set_showPagination] = useState(true);
    const [tr_Arrs, set_tr_Arrs] = useState([]);

    useEffect(() => {
        const { datasource, pagination } = props;
        let obj = { }, data = datasource;
        obj.total = datasource.length;   //总条数
        let showPagination = true;
        if (pagination) {
            obj.current = pagination.current; //当前页数
            obj.pageSize = pagination.pageSize;
            showPagination = false;
        } else {
            data = querySourceData(datasource, pagination_info.current, pagination_info.pageSize);
            obj.current = 1; //当前页数
            obj.pageSize = 2;
        }
        set_pagination(obj);
        set_datasource(data);
        set_showPagination(showPagination);
         // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const { columns } = props;
        let trArrs = [];
        for (let i= 0; i < datasource.length; i++) {
            let tdArrd = [];
            for (let j = 0; j < columns.length; j++) {
                let TD = <td key={columns[j].key}>
                    {
                        columns[j].render ? columns[j].render(datasource[i][columns[j].dataIndex], datasource[i]) : datasource[i][columns[j].dataIndex]
                    }
                </td>
                tdArrd.push(TD);
            }
            let TR = <tr key={datasource[i].key + i}>{tdArrd}</tr>
            trArrs.push(TR);
        }
        set_tr_Arrs(trArrs);
    }, [datasource, props])

    // 查询数据
    const querySourceData = (data, current, pageSize) => {
        const startIndex = (current - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex)
    }

    // 升序、降序排列
    const sorting = useCallback((column, way) => {
        let valArr = [], newDataSource = [];
        datasource.forEach(v => {
            valArr.push(v[column]);
        });
        valArr.sort(way);
        valArr.forEach(v => {
            datasource.forEach(item => {
                if (item[column] === v) {
                    newDataSource.push(item);
                }
            })
        })
        set_datasource(newDataSource);
    }, [datasource])

    return (
        <>
            <table className="jui-table">
                <thead className="jui-thead">
                    <tr>
                        {
                            props.columns && props.columns.length > 0 && props.columns.map(v => 
                                <th key={v.title} >
                                    <div className='tab-title'>{v.title}</div>
                                    {
                                        v.sorted && 
                                        <div className='tab-sorting'>
                                            <div className='tab-icon'>
                                                <div className='increase' title='升序'>
                                                    <Icon handleClick={() => sorting(v.dataIndex, (a, b) => a - b)} 
                                                        style={Object.assign(iconStyle, {})} type='increasing'
                                                    />
                                                </div>
                                                <div className='decrease' title='降序'>
                                                    <Icon handleClick={() => sorting(v.dataIndex, (a, b) => b - a)} 
                                                        style={Object.assign(iconStyle, {})} type='decreasing'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </th>
                            )
                        }
                    </tr>
                </thead>

                <tbody className="jui-tbody">
                    {tr_Arrs}
                </tbody>
            </table>
            {
                showPagination && <Pagination handleChange={(current, pagesize) => {
                    console.log(current, pagesize);
                    // props.pagination.onChange(current);
                    set_pagination((currentState) => ({...currentState, current, pageSize: pagesize}));
                    set_datasource(querySourceData(props.datasource, current, pagesize))
                }} {...pagination_info}/>
            }
            <div style={{clear: 'both'}}></div>
        </> 
    )
}

export default Table