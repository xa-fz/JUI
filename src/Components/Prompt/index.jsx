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

    success = (type, title, content) => {
        this.setState({
            type,
            title,
            content,
            visible: true
        })
    }

    error = (type, title, content) => {
        this.setState({
            type,
            title,
            content,
            visible: true
        })
    }

    warning =  (type, title, content) => {
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
                bodyStyle={{height:'200px', width:'400px'}}
                footer={[
                    <Button key='confirm' handleClick={() => this.setState({visible: false})} className='mr-20' type='Primary' text='OK' buttonStyle={{height: '40px', width: '120px'}}/>
                ]}
            >
                {
                    type === 'info' && 
                    <Icon type={type} style={{color: 'rgb(24, 144, 255)'}}/>
                }
                {
                    type === 'success' &&
                    <Icon type={type} style={{color: 'rgb(82, 196, 26)'}}/>
                }
                {
                    type === 'error' &&
                    <Icon type={type} style={{color: 'rgb(255, 77, 79)'}}/>
                }
                {
                    type === 'warning' &&
                    <Icon type={type} style={{color: 'rgb(250, 173, 20)'}}/>
                }
                <span>{title}</span>
                <div style={{padding: '10px'}}>
                    {content}
                </div>
            </Modal>
        )
    }
}