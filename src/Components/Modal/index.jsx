import React, { Component } from 'react';
import './modal.less';

export default class Modal extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    /** 
     * @method 用于赋值给对话框的margin使垂直居中
    */
    judgeType = attr =>{
        let attrVal;
        if(typeof attr === 'number'){
            attrVal = -attr/2
        }else if(typeof attr === 'string'){
            attrVal = -parseInt(attr.split('px').join())/2;
        }
        return attrVal
    }


    render(){
        const { visible, bodyStyle } = this.props;
        let margintop;
        let marginleft;
        let modalHeight;
        let modalWidth;
        if(bodyStyle && bodyStyle.height){
            modalHeight = bodyStyle.height;
            margintop = this.judgeType(bodyStyle.height);
        }else{
            modalHeight = '270px';
            margintop = '135px';
        }

        if(bodyStyle && bodyStyle.width){
            modalWidth = bodyStyle.width;
            marginleft = this.judgeType(bodyStyle.width); 
        }else{
            modalWidth = '520px';
            marginleft = '-260px';
        }

        return (
            <div className='jui-modal' style={{display: visible ? 'block' : 'none'}}>
                <div className='dialog' 
                    style={{
                        width: modalWidth,
                        height: modalHeight,
                        marginTop: margintop,
                        marginLeft: marginleft
                    }}
                >
                    <p>123123</p>
                </div>
            </div>
        )
    }
}