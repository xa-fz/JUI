import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import ComponentLayout from '../ComponentLayout';
import RESOURCE from '../../resource';

const { Header } = Layout;

console.log(Header);

const LayoutContent = () => {
    const [layout_arr, set_layout_arr] = useState([]);

    useEffect(() => {
        let layoutArr = RESOURCE.LAYOUT_ARR;
        layoutArr.forEach(item => {
            switch(item.type) {
                case 'layout-basic':
                    item.showComponent = 
                    <Layout>
                        <div>
                            头部
                        </div>
                    </Layout>
                    break;
                default:
                    break;
            }
        })
        set_layout_arr(layoutArr);
    }, [])

    return (
        <ComponentLayout 
            head='Layout 布局'
            className={{
                layoutBodyStyle: 'layoutContent', 
                componentStyle: 'layoutComponent'
            }}
            data={layout_arr}
        />
    )
}

export default LayoutContent;