import React from 'react';
import PathInfo from './svg';

 const Icon = (props) =>{
    
    const { type, size, style } = props;
    let svgSize = {
        width: '3em',
        height: '2em'
    };
    svgSize.width = style.width ? style.width : (size === 'large' ? '6em' : (size === 'middle' ? '5em' : (size === 'small' && '3em')));
    svgSize.height = style.height ? style.height : (size === 'large' ? '4em' : (size === 'middle' ? '3em' : (size === 'small' && '2em')));
    return (
        <div>
            <svg className="jui-icon"
                style={{width: svgSize.width, height: svgSize.height, verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden'}}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"  
            >
                <path d={`${PathInfo[type].track}`}
                    fill={style && style.color ? style.color : "#181818"}>
                </path>
            </svg>
        </div>
    )
}
export default Icon