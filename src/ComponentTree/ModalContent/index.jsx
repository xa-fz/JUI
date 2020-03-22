import React, { Component } from 'react';

export default class ModalContent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className='contentCommonStyle modalContent'>
                <div className='header'>
                    <div className='text'>Modal 对话框</div>
                </div>
            </div>
        )
    }
}