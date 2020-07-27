import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Button from '../../Components/Button';
import Modal from '../../Components/Modal';

export default class ModalContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isOpenA: false
        }
    }

    handleClickA = () => {
        this.setState({
            isOpenA: !this.state.isOpenA
        })
    }

    handleClick = () => {
        console.log('点击按钮');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    

    cancelModal = () => {
        this.setState({
            isOpen: false
        })
    }
    cancelModalA = () => {
        this.setState({
            isOpenA: false
        })
    }
    render(){
        const { isOpen, isOpenA } = this.state;
        RESOURCE.MODAL_INFO_ARR.forEach(item => {
            switch(item.type){
                case 'modal-normal':
                item.showComponent = 
                <div className='modalTypeNormal'>
                    <div className="display mr-20">
                        <Button type='Primary' text='Open Modal' handleClick={this.handleClick}/>
                        <Modal
                            hasClose={true}
                            visible={isOpen}
                            cancel={this.cancelModal}
                            title='title'
                            mask={false}
                        >
                            <div>
                                基础弹窗内容
                            </div>
                        </Modal>
                    </div>
                    <div className="display v-top">
                        <Button type='Primary' text='no footer and title' handleClick={this.handleClickA} className="text-ellipsis"/>
                        <Modal
                            hasClose={true}
                            visible={isOpenA}
                            cancel={this.cancelModalA}
                            mask={false}
                            footer={null}
                        >
                            <div>
                                去掉页脚及title信息
                            </div>
                        </Modal>
                    </div>  
                </div>
                break;
                default:
                break;
            }

        })
        return(
            <div className='contentCommonStyle modalContent'>
                <div className='header'>
                    <h1>Modal 对话框</h1>
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