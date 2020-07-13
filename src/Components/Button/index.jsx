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

        const { type, size, text, disabled, icons } = props;
        let disable = false;
        if(disabled !== undefined){
            disable = disabled
        }
        let btnObj = {};
        btnObj.textName = text ? text : '';
        btnText.forEach(item => {
            if(item.title === type) {
                btnObj.textName = text ? text : item.text
            }
            if (item.title === type) {
                btnObj.btnStyle = item.styleName;
                btnObj.size = size;
                btnObj.textName = item.text
            }
        });
        return (
            <button
                style={{ 
                    width: size && size.width,
                    height: size && size.height,
                    cursor: disable && 'not-allowed',
                    backgroundColor: disable && '#f5f5f5',
                    color: disable && 'rgba(0, 0, 0, 0.25)',
                    border:  disable && '1px solid #d9d9d9'
                }}
                type={ type } 
                className={'jui-btn ' + btnObj.btnStyle}
                onClick={  clkBtn }
                disabled={ disable }
            >
                { btnObj.textName }
                {icons}
            </button>
        )
}

export default Button