import React, { Component } from 'react';
import Button from '../../Components/Button';
import RESOURCE from '../../resource';
import Code from '../Coding';
import Icon from '../../Components/Icon';

export default class ButtonContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            resourceArr: []
        }
    }

    componentDidMount() {
        let resourceArr = [...RESOURCE.BTN_INFO_ARR];
        resourceArr.forEach(item => {
            switch(item.type){
                case 'btn-normal':
                item.showComponent = 
                <div className='btnBoder btnTypeNormal'>
                    <Button type='Primary' className="mr-20" handleClick={this.handleClick}/>
                    <Button type='Default' buttonStyle={{marginRight: '20px'}}/>
                    <Button type='Danger'/>
                </div>
                break;
                case 'btn-icon':
                item.showComponent = 
                <div className='btnBoder btnIcon'>
                    <Button type='Primary' text='我的' icons={<Icon type='user' style={{color: '#fff', width: '20px', height: '20px'}}/>}/>
                </div>
                break;
                case 'btn-disable':
                item.showComponent = 
                <div className='btnBoder btnDisabled'>
                    <Button type='Primary' disabled={true} buttonStyle={{marginRight: '20px'}}/>
                    <Button text={RESOURCE.CUSTOM_WORD} disabled={true}/>
                </div>
                break;
                default:
                break;
            }
        })
        this.setState({
            resourceArr
        })
    }

    handleClick = () => {
        console.log('点击按钮');
    }
    
    render(){
        return (
            <div className='contentCommonStyle buttonContent'>
                <div className='header'>
                    <h1>Button 按钮</h1>
                </div>
                <div className='useComponent'>
                    {
                        this.state.resourceArr.map(item => 
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