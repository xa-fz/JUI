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
    const {
        configHeader,
        columns,
        datasource,
        pagination
    } = props;
    const [data_source, set_data_source] = useState([]);
    const [pagination_info, set_pagination] = useState({current: 1, pageSize: 2});
    const [showPagination, set_showPagination] = useState(true);
    const [tr_Arrs, set_tr_Arrs] = useState([]);

    useEffect(() => {
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
        set_data_source(data);
        set_showPagination(showPagination);
         // eslint-disable-next-line
    }, [datasource, pagination])

    useEffect(() => {
        let trArrs = [];
        for (let i= 0; i < data_source.length; i++) { // 循环行
            let tdArrd = [];
            for (let j = 0; j < columns.length; j++) { // 循环列
                let TD = <td key={columns[j].key}>
                    {
                        columns[j].render ? columns[j].render(data_source[i][columns[j].dataIndex], data_source[i]):
                        data_source[i][columns[j].dataIndex]
                    }
                </td>
                tdArrd.push(TD);
            }
            let TR = <tr key={data_source[i].key + i}>{tdArrd}</tr>
            trArrs.push(TR);
        }
        set_tr_Arrs(trArrs);
    }, [data_source, columns])

    // 查询数据
    const querySourceData = (data, current, pageSize) => {
        const startIndex = (current - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex)
    }

    // 升序、降序排列
    const sorting = useCallback((column, way) => {
        let valArr = [], newDataSource = [];
        data_source.forEach(v => {
            valArr.push(v[column]);
        });
        valArr.sort(way);
        valArr.forEach(v => {
            data_source.forEach(item => {
                if (item[column] === v) {
                    newDataSource.push(item);
                }
            })
        })
        set_data_source(newDataSource);
    }, [data_source])

    return (
        <>
            <table className="jui-table">
                <thead className="jui-thead">
                    <tr>
                        {
                            columns && columns.length > 0 && columns.map(v => 
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
                        {
                            configHeader && <div onClick={() => {
                                    
                            }} className="config_column text-right">配置</div>
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
                    set_data_source(querySourceData(datasource, current, pagesize))
                }} {...pagination_info}/>
            }
            <div style={{clear: 'both'}}></div>
        </> 
    )
}

export default Table