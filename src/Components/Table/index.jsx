import React, { Component } from 'react';
import './table.less'

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        const { columns, datasource } = this.props;
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
        return (
            <table className="jui-table">
                <thead className="jui-thead">
                    <tr>
                        {
                            columns && columns.length > 0 && columns.map(v => 
                                <th key={v.title}>{v.title}</th>
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