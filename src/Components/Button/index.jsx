import React from 'react';
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

const Button = (props) => {
        /**
         *@method 点击按钮的回调函数
        */
        const clkBtn = (e) => {
            props.handleClick && props.handleClick(e);
        }

        const { type, text, disabled, icons, buttonStyle } = props;
        let disable = false;
        if(disabled !== undefined){
            disable = disabled
        }
        let btnObj = {};
        btnText.forEach(item => {
            if (item.title === (type ? type : 'Default')) {
                btnObj.btnStyle = item.styleName;
                btnObj.textName = item.text
            }
        });
        let basicStyle = {
            cursor: disable && 'not-allowed',
            backgroundColor: disable && '#f5f5f5',
            color: disable && 'rgba(0, 0, 0, 0.25)',
            border:  disable && '1px solid #d9d9d9',
            ...buttonStyle
        }
        return (
            <button
                style={basicStyle}
                className={'jui-btn ' + btnObj.btnStyle}
                onClick={  clkBtn }
                disabled={ disable }
            >
                {icons}
                { text ? text : btnObj.textName }
            </button>
        )
}

export default Button