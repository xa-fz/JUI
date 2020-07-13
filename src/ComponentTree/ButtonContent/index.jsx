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
        let arr = [...RESOURCE.BTN_INFO_ARR];
        arr.forEach(item => {
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
                    <Button type='Primary' icons={<Icon type='user' style={{color: '#fff'}}/>}></Button>
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
        console.log(RESOURCE);
        this.setState({
            resourceArr: arr
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