import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Button from '../../Components/Button';
import Modal from '../../Components/Modal';

export default class ModalContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClick = () => {
        console.log('点击按钮');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const { isOpen } = this.state;
        RESOURCE.MODAL_INFO_ARR.forEach(item => {
            switch(item.type){
                case 'modal-normal':
                item.showComponent = 
                <div className='modalTypeNormal'>
                    <Button type='Primary' text='Open Modal' handleClick={this.handleClick}/>
                    <Modal 
                       visible={isOpen}
                       bodyStyle={{
                           width:'520px',
                           height:'260px'
                       }}
                    >
                        <div>
                            ttttttttttttttttttt
                        </div>
                    </Modal>
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