import React, { Component } from 'react';
import Button from '../../Components/Button';
import RESOURCE from '../../resource';
import Code from '../Coding';

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
        RESOURCE.BTN_INFO_ARR.forEach(item => {
            switch(item.type){
                case 'btn-normal':
                item.showComponent = 
                <div className='btnTypeNormal'>
                    <Button type='Primary' handleClick={this.handleClick}/>
                    &nbsp;&nbsp;
                    <Button type='Default' />
                    &nbsp;&nbsp;
                    <Button type='Danger'/>
                </div>
                break;
                case 'btn-icon':
                item.showComponent = 
                <div className='btnIcon'>
                    得先用svg画图
                </div>
                break;
                case 'btn-disable':
                item.showComponent = 
                <div className='btnDisabled'>
                    <Button type='Primary' disabled={true}/>
                    &nbsp;&nbsp;
                    <Button text={RESOURCE.CUSTOM_WORD} disabled={true}/>
                </div>
                break;
                default:
                break;
            }

        })
        return (
            <div className='contentCommonStyle buttonContent'>
                <div className='header'>
                    <div className='text'>Button 按钮</div>
                </div>
                <div className='useComponent'>
                    {
                        RESOURCE.BTN_INFO_ARR.map(item => 
                        <div className='instructions' key={item.type}>
                            <div className='title'>{item.title}</div>
                            <div className='content'>
                                {item.showComponent}
                                <Code type={item.type}/>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
}