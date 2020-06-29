import React, { Component } from 'react';
import Icon from '../../Components/Icon';
import RESOURCE from '../../resource';

export default class IconContent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        return (
            <div className='contentCommonStyle iconContent'>
                <div className='header'>
                    <h1>Icon 图标</h1>
                </div>
                <div className='iconList'>
                    <div className='basicIcon'>
                        <h3 className='title'>基础图标</h3>
                        <ul>
                            {
                                RESOURCE.ICONS_NAME_ARR.map(item => 
                                    <li key={item.type}>
                                        <Icon type={item.type} style={{color: '#1890FF'}} size='large'/>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}