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
        return (
            <div className='buttonContent'>
                <div className='header'>
                    <div className='text'>Button 按钮</div>
                </div>
                <div className='basicUsing'>
                    <div className='title'>{ RESOURCE.BTN_TITLE_ARR[0] }</div>
                    <div className='content'>
                        <div className='btnTypeNormal'>
                            <Button type='Primary' handleClick={this.handleClick}/>
                            &nbsp;&nbsp;
                            <Button type='Default'/>
                            &nbsp;&nbsp;
                            <Button type='Danger'/>
                        </div>
                        <Code type='btn-normal'/>
                    </div>
                    
                </div>
                
            </div>
            
        )
    }
}