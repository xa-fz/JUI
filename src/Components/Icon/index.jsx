import React from 'react';
import PathInfo from './svg';

 const Icon = (props) =>{

    const { type } = props;
    return (
        <div>
            <svg class="jui-icon"
                style={{width: '2em',height: '2em',verticalAlign: 'middle',fill: 'currentColor',overflow: 'hidden'}}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"  
            >
                <path d={`${PathInfo[type].track}`}
                    fill="#181818">
                </path>
            </svg>
        </div>
    )
}
export default Icon