import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import ComponentLayout from '../ComponentLayout';
import RESOURCE from '../../resource';

const LayoutContent = () => {
    const [layoutArr, set_layoutArr] = useState([]);

    useEffect(() => {
        let layoutArr = RESOURCE.LAYOUT_ARR;
        layoutArr.forEach(item => {
            switch(item.type) {
                case 'upload-basic':
                    item.showComponent = <Layout />
                    break;
                default:
                    break;
            }
        })
        set_layoutArr(layoutArr);
    }, [])

    return (
        <ComponentLayout 
            head='Layout 布局'
            className={{
                layoutBodyStyle: 'layoutContent', 
                componentStyle: 'layoutComponent'
            }}
            data={layoutArr}
        />
    )
}

export default LayoutContent;