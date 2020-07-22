import React from 'react';
import PathInfo from './svg';

 const Icon = (props) => {
    
    const { type, size, style } = props;
    let svgSize = {
        width: '3em',
        height: '2em'
    };
    if(style && style.width) {
        svgSize.width = style.width;
    }
    if(style && style.height) {
        svgSize.height = style.height;
    }
    if(size) {
        switch(size){
            case 'large':
                svgSize.width = '6em';
                svgSize.height = '4em'
                break;
            case 'middle':
                svgSize.width = '5em';
                svgSize.height = '3em';
                break;
            case 'small':
                svgSize.width = '3em';
                svgSize.height = '2em';
                break;
            default:
                break;
        }
    }

    return (
        <svg className="jui-icon"
            style={{width: svgSize.width, height: svgSize.height, verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden',marginRight: '5px'}}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"  
        >
            <path d={`${PathInfo[type].track}`}
                fill={style && style.color ? style.color : "#181818"}>
            </path>
        </svg>
    )
}
export default Icon