import React, { Component } from 'react';
import Icon from '../../Components/Icon';

export default class IconContent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        return (
            <div className='iconContent'>
                <div className='header'>
                    <div className='text'>Icon 图标</div>
                </div>
                <div className='iconList'>
                    <div className='basicIcon'>
                        <div className='title'>基础图标</div>
                        <Icon type=''/>
                    </div>
                </div>
            </div>
        )
    }
}