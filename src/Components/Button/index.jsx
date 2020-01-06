import React, { Component } from 'react';
import './button.less'

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
        let { type } = this.props;
        return (
            <button 
                type={type} 
                className={'jv-btn' + (type === 'Primary' ? ' jv-primary' : 
                    (type === 'default' ? ' jv-default' : ''))}
            >
                主要按钮
            </button>
        )
    }
}