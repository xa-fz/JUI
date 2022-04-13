import React from 'react';
import './layout.less';


const Layout = (props) => {
    const { children } = props;

    return (
        <div className="jui-layout">
            {children}
        </div>
    )
}

const header = (props) => {
    console.log(props);
    return <header>{props.children}</header>
}

Layout.Header = header;
export default Layout;
