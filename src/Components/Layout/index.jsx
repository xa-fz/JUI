import React from 'react';
import './layout.less';


const Layout = (props) => {
    const { children } = props;
    console.log(children);

    return (
        <div className="jui-layout">
            {children}
        </div>
    )
}

export default Layout