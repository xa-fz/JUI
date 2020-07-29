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
                <div className='btnBorder btnTypeNormal'>
                    <Button type='Primary' className="mr-20" buttonStyle={{width: '120px'}} handleClick={this.handleClick}/>
                    <Button type='Default' className='mr-20' buttonStyle={{width: '120px'}}/>
                    <Button type='Danger' buttonStyle={{width: '120px'}}/>
                </div>
                break;
                case 'btn-icon':
                item.showComponent = 
                <div className='btnBorder btnIcon'>
                    <Button type='Primary' text='我的' buttonStyle={{width: '120px'}} icons={<Icon type='user' style={{color: '#fff', width: '20px', height: '20px'}}/>}/>
                </div>
                break;
                case 'btn-disable':
                item.showComponent = 
                <div className='btnBorder btnDisabled'>
                    <Button className='mr-20' type='Primary' disabled={true} buttonStyle={{width: '120px'}}/>
                    <Button text={RESOURCE.CUSTOM_WORD} buttonStyle={{width: '120px'}} disabled={true}/>
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