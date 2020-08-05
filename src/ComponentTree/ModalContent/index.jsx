import React, { Component } from 'react';
import RESOURCE from '../../resource';
import Button from '../../Components/Button';
import Modal from '../../Components/Modal';
import Prompt from '../../Components/Prompt';

export default class ModalContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isOpenA: false,
            isOpenB: false,
            isOpenC: false
        }
    }

    handleClickA = () => {
        this.setState({
            isOpenA: !this.state.isOpenA
        })
    }

    handleClick = () => {
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
        const { isOpen, isOpenA, isOpenB, isOpenC } = this.state;
        RESOURCE.MODAL_INFO_ARR.forEach(item => {
            switch(item.type){
                case 'modal-normal':
                item.showComponent = 
                <div className='modalBorder modalTypeNormal'>
                    <div className="display mr-20">
                        <Button type='Primary' text='Open Modal' handleClick={this.handleClick} buttonStyle={{width: '120px'}}/>
                        <Modal
                            hasClose={true}
                            visible={isOpen}
                            cancel={this.cancelModal}
                            title='title'
                        >
                            <div>
                                基础弹窗内容
                            </div>
                        </Modal>
                    </div>
                    <div className="display mr-20">
                        <Button type='Default' text='click mask' handleClick={() => this.setState({isOpenB: !this.state.isOpenB})} buttonStyle={{width: '120px'}}/>
                        <Modal
                            hasClose={true}
                            visible={isOpenB}
                            cancel={() => this.setState({isOpenB: false})}
                            title='title'
                            mask={true}
                        >
                            <div>
                                可点击遮罩层关闭
                            </div>
                        </Modal>
                    </div>
                    <div className="display mr-20">
                        <Button type='Default' text='no mask' handleClick={() => this.setState({isOpenC: !this.state.isOpenC})} buttonStyle={{width: '120px'}}/>
                        <Modal
                            hasClose={true}
                            visible={isOpenC}
                            cancel={() => this.setState({isOpenC: false})}
                            title='title'
                            mask={null}
                        >
                            <div>
                                没有遮罩层
                            </div>
                        </Modal>
                    </div>
                    <div className="display v-top">
                        <Button type='Default' text='no footer and title' handleClick={() => this.setState({isOpenA: !this.state.isOpenA})}/>
                        <Modal
                            hasClose={true}
                            visible={isOpenA}
                            cancel={() => this.setState({isOpenA: false})}
                            footer={null}
                        >
                            <div>
                                去掉页脚及title信息
                            </div>
                        </Modal>
                    </div>  
                </div>
                break;
                case 'modal-tips':
                    item.showComponent = <div className='modalBorder modalTipsInfo'>
                        <Button type='Default' handleClick={() => this.prompts.info('info', 'info title!', <div>this is a message!!</div>)} buttonStyle={{width: '120px'}}>
                            info
                        </Button>
                        <Prompt promptRef={(p) => this.prompts = p}/>
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