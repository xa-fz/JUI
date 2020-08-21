import React, { Component } from 'react';
import Icon from '../Icon';
import './table.less'

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            datasource: []
        };
    }

    componentDidMount () {
        const { datasource } = this.props;
        this.setState({
            datasource
        })
    }

    // 升序、降序排列
    sorting = (column, way) => {
        const { datasource } = this.state;
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
        this.setState({
            datasource: newDataSource
        })
    }

    render(){
        const { columns } = this.props;
        const { datasource } = this.state;
        let trArrs = [];
        for (let i= 0; i < datasource.length; i++) {
            let tdArrd = [];
            for (let j = 0; j < columns.length; j++) {
                let TD = <td key={columns[j].key}>
                    {datasource[i][columns[j].dataIndex]}
                </td>
                tdArrd.push(TD);
            }
            let TR = <tr key={datasource[i].key}>
                {tdArrd}
            </tr>
            trArrs.push(TR);
        }
        let iconStyle = {
            width: 10,
            height: 10,
            cursor: 'pointer',
            verticalAlign: 'top'
        }
        return (
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
                                                    <Icon handleClick={() => this.sorting(v.dataIndex, (a, b) => a - b)} 
                                                        style={Object.assign(iconStyle, {})} type='increasing'
                                                    />
                                                </div>
                                                <div className='decrease' title='降序'>
                                                    <Icon handleClick={() => this.sorting(v.dataIndex, (a, b) => b - a)} 
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
                    {trArrs}
                </tbody>
            </table>
        )
    }
}