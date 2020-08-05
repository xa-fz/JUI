import React, { Component } from 'react';
import Modal from '../Modal';
import Button from '../../Components/Button';
import Icon from '../../Components/Icon';

export default class Prompt extends Component{
    constructor(props){
        super(props);
        this.state={
            type: '',
            title: '',
            content: '',
            visible: false
        };
    }

    componentDidMount(){
        this.props.promptRef(this)
    }

    info = (type, title, content) => {
        this.setState({
            type,
            title,
            content,
            visible: true
        })
    }

    render(){
        const { type, title, content, visible } = this.state;
        return (
            <Modal
                header={false}
                visible={visible}
                footer={[
                    <Button key='confirm' handleClick={() => this.setState({visible: false})} className='mr-20' type='Primary' text='知道了' buttonStyle={{height: '40px', width: '120px'}}/>
                ]}
            >
                {
                    type === 'info' && 
                    <Icon type='info' style={{color: '#1890FF'}}/>
                }
                <span>{title}</span>
                <div style={{padding: '10px'}}>
                    {content}
                </div>
            </Modal>
        )
    }
}