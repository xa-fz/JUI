import React, { Component } from 'react';
import Button from '../../Components/Button';

export default class ButtonContent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    handleClick = () => {
        console.log('点击按钮');
    }
    render(){
        return (
            <div className='buttonContent'>
                <div className='header'>
                    <div className='text'>Button 按钮</div>
                    <div>用户触发点击事件</div>
                </div>
                <div className='basicUsing'>
                    <div className='title'>基础用法</div>
                    <div className='content'>
                        <Button type='Primary'></Button>
                    </div>
                </div>
                
            </div>
            
        )
    }
}