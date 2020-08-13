import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Table from '../../Components/Table';

export default class TableContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: <span></span>
        }
    }

    componentDidMount () {
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
        let data = [
            {
                key: '1',
                name: 'Tom',
                age: 18,
                eMail: 'tt34@163.com',
                address: `xi'an`
            },
            {
                key: '2',
                name: 'Lucy',
                age: 20,
                eMail: '135****2275@qq.com',
                address: 'shanghai'
            }
        ];
        let currentComponent;
        RESOURCE.TABLE_INFO_ARR.forEach(item => {
            switch(item.type) {
                case 'tab-basic':
                    currentComponent = 
                    <Table columns={columns} datasource={data} />
                break;
                default:
                break;
            }
        })
        this.setState({
            currentComponent
        })
    }

    render() {
        const { currentComponent } = this.state;
        return (
            <div className="contentCommonStyle tableContent">
                <div className='header'>
                    <h1>Table 表格</h1>
                </div>
                <div className="tableComponent mt-20">
                    {currentComponent}
                </div>
            </div>
        )
    }
}