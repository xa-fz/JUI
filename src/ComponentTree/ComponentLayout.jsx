import React, { useEffect, useState } from 'react';

const ComponentLayout = (props) => {
    const [headTitle, set_headTitle] = useState('');

    useEffect(() => {
        const { head } = props;
        const headTitle = head ? head : '';
        set_headTitle(headTitle);
    }, [props])

    const { data, className } = props;
    return (
        <div className={`contentCommonStyle ${className && className.layoutBodyStyle}`}>
            <div className='header'>
                <h1>{headTitle}</h1>
            </div>
            <div className='useComponent'>
                {
                    data.length && data.map(item => 
                        <div className='instructions' key={item.type}>
                            <div className='title'>{item.title}</div>
                            <div className={`content ${className && className.componentStyle}`}>
                                {item.showComponent}
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default ComponentLayout;