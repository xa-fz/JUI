import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Table from '../../Components/Table';

export default class TableContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: []
        }
    }

    componentDidMount () {
        let data = [
            {
                key: '1',
                name: 'Tom',
                age: 18,
                eMail: 'tt34@163.com',
                address: 'Xi\'an'
            },
            {
                key: '2',
                name: 'LiMing',
                age: 21,
                eMail: 'LiMing@162.com',
                address: 'Beijing'
            },
            {
                key: '3',
                name: 'Lucy',
                age: 20,
                eMail: '135****2275@qq.com',
                address: 'Shanghai'
            }
        ];
        let columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: 'E-mail',
                dataIndex: 'eMail',
                key: 'eMail'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            }
        ];
        let data1 = [
            {
                key: '1',
                name: 'Tom',
                eMail: 'tt34@163.com',
                address: 'Xi\'an',
                heigh: 176
            },
            {
                key: '2',
                name: 'LiMing',
                eMail: 'LiMing@162.com',
                address: 'Beijing',
                heigh: 173
            },
            {
                key: '3',
                name: 'Lucy',
                eMail: '135****2275@qq.com',
                address: 'Shanghai',
                heigh: 178
            }
        ];
        let columns1 = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Height(cm)',
                dataIndex: 'heigh',
                key: 'heigh',
                sorted: {
                    compare: (a, b) => a.heigh - b.heigh
                }
            },
            {
                title: 'E-mail',
                dataIndex: 'eMail',
                key: 'eMail'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            }
        ];

        RESOURCE.TABLE_INFO_ARR.forEach(item => {
            switch(item.type) {
                case 'tab-basic':
                    item.currentComponent = 
                    <Table columns={columns} datasource={data} />                 
                break;
                case 'tab-arrangement':
                    item.currentComponent = 
                    <Table columns={columns1} datasource={data1} />
                break;
                default:
                break;
            }
        })
        this.setState({
            currentComponent: RESOURCE.TABLE_INFO_ARR
        })
    }

    render() {
        const { currentComponent } = this.state;
        return (
            <div className="contentCommonStyle tableContent">
                <div className='header'>
                    <h1>Table 表格</h1>
                </div>
                {
                    currentComponent.map(v => 
                        <React.Fragment key={v.type}>
                            <h3>{v.describe}</h3>
                            <div className="tableComponent mt-20">
                                {v.currentComponent}
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}