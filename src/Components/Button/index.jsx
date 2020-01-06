import React, { Component } from 'react';
import './button.less'

const btnText = [
    {
        title: 'Primary',
        text: '主要按钮',
        styleName: 'jui-primary'
    }
];

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    clkBtn = () => {
        this.props.onClick();
    }

    render(){
        const { type } = this.props;
        let btnObj = {};
        btnText.forEach(item => {
            if (item.title === type) {
                btnObj.textName = item.text;
                btnObj.btnStyle = item.styleName;
            }
        });
        return (
            <button 
                type={ type } 
                className={'jui-btn ' + btnObj.btnStyle}
            >
                { btnObj.textName }
            </button>
        )
    }
}