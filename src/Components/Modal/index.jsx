import React, { Component } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import './modal.less';

export default class Modal extends Component{
    constructor(props){
        super(props);
        this.state={
            translateX: 0, // 动画X轴移动长度
            translateY: 0  // 动画y轴移动长度
        };
        this.moving = false;
        this.lastX = null; // 移动后的x轴位置
        this.lastY = null; // 移动后的y轴位置
        window.onmouseup = e => this.onMouseUp(e);
        window.onmousemove = e => this.onMouseMove(e);
    }
    /** 
     * @method 用于赋值给对话框的margin使垂直居中
    */
    judgeType = attr => {
        let attrVal;
        if(typeof attr === 'number'){
            attrVal = -attr/2;
        }else if(typeof attr === 'string'){
            attrVal = -parseInt(attr.split('px').join())/2;
        }
        return attrVal
    }
    /** 
     * @method 监听鼠标按下的事件
    */
    onMouseDown = e => {
        e.stopPropagation();
        this.moving = true;
    }
    /** 
     * @method 监听鼠标的事件
     * 第一次移动，现在一次鼠标的位置减去上一次的位置就是需要移动的位置
    */
    onMouseMove = e => { 
        const { translateX, translateY } = this.state;
        if(this.moving){
            if(this.lastX && this.lastY) {
                let dx = e.clientX - this.lastX;
                let dy = e.clientY - this.lastY;
                this.setState({ translateX: translateX + dx, translateY: translateY + dy })
            }
            this.lastX = e.clientX;
            this.lastY = e.clientY;
        }
    }
    /** 
     * @method 鼠标弹起初始化状态
    */
    onMouseUp = () => {
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
    }

    render(){
        const { visible, bodyStyle, hasClose, children, title, mask, footer, header } = this.props;
        let margintop, marginleft, modalHeight, modalWidth;
        if(bodyStyle && bodyStyle.height){
            modalHeight = bodyStyle.height;
            margintop = this.judgeType(bodyStyle.height);
        }else{
            modalHeight = '270px';
            margintop = '-135px';
        }

        if(bodyStyle && bodyStyle.width){
            modalWidth = bodyStyle.width;
            marginleft = this.judgeType(bodyStyle.width); 
        }else{
            modalWidth = '520px';
            marginleft = '-260px';
        }
        let showClose = hasClose ? hasClose : true;
        let modalStyle = {
            transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`,
            ...(bodyStyle ? bodyStyle : {
                width: modalWidth,
                minHeight: modalHeight,
                marginTop: margintop,
                marginLeft: marginleft,
            }) 
        }
        bodyStyle && !bodyStyle.marginLeft && Object.assign(modalStyle, {marginLeft: marginleft});
        bodyStyle && !bodyStyle.marginTop && Object.assign(modalStyle, {marginTop: margintop});

        let headerStatus = true;
        if (header !== undefined) {
            headerStatus = header
        }
        console.log(mask);
        return (
            <div className='jui-modal' style={{display: visible ? 'block' : 'none'}}>
                <div className='dialog'
                    onMouseDown={e => this.onMouseDown(e)}
                    style={modalStyle}
                >
                    {
                        headerStatus && 
                        <div className='dialog-header'>
                            <span className='dialog-title'>{title ? title : ''}</span>
                            {
                                showClose &&  
                                <div className='fl-r' onClick={() => this.props.cancel()}>
                                    <Icon type='close' style={{float: 'right'}}/>
                                </div>
                            }
                        </div>
                    }
                    <div className='dialog-body'>
                        {children}
                    </div>
                    {
                        footer !== null && (footer === undefined ? 
                            <div className='dialog-footer'>
                                <Button className='mr-20' type='Primary' text='确定' buttonStyle={{height: '40px', width: '120px'}}/>
                                <Button text='取消' buttonStyle={{height: '40px', width: '120px'}} handleClick={() => this.props.cancel()}/>
                            </div> : 
                            <div className='dialog-footer'>
                                {
                                    footer.map((item) => item)
                                }
                            </div>)
                    }
                </div>
                {
                    mask !== null && 
                    <div className='mask' onClick={() => {
                        return mask === true ? this.props.cancel() : ''
                     }}></div>
                }
            </div>
        )
    }
}