import React, { useState, useEffect } from 'react';
import RESOURCE from '../../resource';
import Table from '../../Components/Table';
import ComponentLayout from '../ComponentLayout';

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
        },
        render: (h, data) => {
            console.log(h, data);
            return h
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

const TableContent = () => {
    const [currentComponent, set_currentComponent] = useState([]);
    const [current, set_current] = useState(1); // 当前页数

    useEffect(() => {
        console.log('当前page', current);
        RESOURCE.TABLE_INFO_ARR.forEach(item => {
            switch(item.type) {
                case 'tab-basic':
                    item.showComponent = 
                    <Table columns={columns} datasource={data}  pagination={{
                        current,
                        pageSize: 2,
                        onChange: (currentPage) => {
                            console.log('改变：', currentPage);
                            set_current(currentPage);
                        }
                    }}/>                 
                break;
                case 'tab-arrangement':
                    item.showComponent = 
                    <Table columns={columns1} datasource={data1} />
                break;
                default:
                break;
            }
        })
        set_currentComponent(RESOURCE.TABLE_INFO_ARR);
    }, [current])

    return (
        <ComponentLayout
            head='Table 表格'
            className={{
                layoutBodyStyle: 'tableContent', 
                componentStyle: 'tableComponent'
            }}
            data={currentComponent}
        />
    )
}

export default TableContent