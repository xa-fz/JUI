import React, { Component } from 'react';
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

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
/**
 *@method 点击按钮的回调函数
 */
    clkBtn = (e) => {
        this.props.handleClick && this.props.handleClick(e);
    }

    render(){
        const { type, size, text } = this.props;
        let btnObj = {};
        btnText.forEach(item => {
            if (item.title === type) {
                btnObj.textName = text ? text : item.text;
                btnObj.btnStyle = item.styleName;
                btnObj.size = size;
            }
        });

        return (
            <button
                style={{ width: size && size.width, height: size && size.height }}
                type={ type } 
                className={'jui-btn ' + btnObj.btnStyle}
                onClick={  this.clkBtn }
            >
                { btnObj.textName }
            </button>
        )
    }
}