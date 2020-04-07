import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Button from '../../Components/Button';

export default class ModalContent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleClick = () => {
        console.log('点击按钮');
    }

    render(){
        RESOURCE.MODAL_INFO_ARR.forEach(item => {
            switch(item.type){
                case 'modal-normal':
                item.showComponent = 
                <div className='modalTypeNormal'>
                    <Button type='Primary' text='Open Modal' handleClick={this.handleClick}/>
                </div>
                break;
                default:
                break;
            }

        })
        return(
            <div className='contentCommonStyle modalContent'>
                <div className='header'>
                    <div className='text'>Modal 对话框</div>
                    <div className=''></div>
                </div>
                <div className='useComponent'>
                    {
                        RESOURCE.MODAL_INFO_ARR.map(item => 
                        <div className='instructions' key={item.type}>
                            <div className='title'>{item.title}</div>
                            <div className='content'>
                                {item.showComponent}
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
}