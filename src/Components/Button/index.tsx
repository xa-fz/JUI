import React, { Component, ReactElement } from 'react';
import './button.less'

const btnText = [
    {
        title: 'Primary',
        text: '主要按钮',
        styleName: 'jui-primary'
    },
    {
        title: 'Default',
        text: '默认按钮',
        styleName: 'jui-default'
    },
    {
        title: 'Danger',
        text: '告警按钮',
        styleName: 'jui-danger'
    },
];

const Button : React.FC = (props: any): ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null =>{
        /**
         *@method 点击按钮的回调函数
        */
        const clkBtn = (e: any) => {
            props.handleClick && props.handleClick(e);
        }

        const { type, size, text, disabled } = props;
        let disable = false;
        if(disabled !== undefined){
            disable = disabled
        }
        let btnObj: any = {};
        btnText.forEach(item => {
            (btnObj as any).textName = text ? text : item.text;
            if (item.title === type) {
                (btnObj as any).btnStyle = item.styleName;
                (btnObj as any).size = size;
            }
        });

        const btnStyle: any = { 
            width: size && size.width,
            height: size && size.height,
            cursor: disable && 'not-allowed',
            backgroundColor: disable && '#f5f5f5',
            color: disable && 'rgba(0, 0, 0, 0.25)',
            border:  disable && '1px solid #d9d9d9'
        }

        return (
            <button
                style={btnStyle}
                type={ type } 
                className={'jui-btn ' + btnObj.btnStyle}
                onClick={ clkBtn }
                disabled={ disable }
            >
                { btnObj.textName }
            </button>
        )
}

export default Button