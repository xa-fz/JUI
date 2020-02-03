import React, {Component} from 'react';
import RESOURCE from '../../resource';
import './Code.less';
import CodeBtnNormal from './CodeBtnNormal';

const codeArr = [
    {
        type: 'btn-normal',
        codeContent: <CodeBtnNormal />
    }
]
export default class Coding extends Component{
    constructor(props){
        super(props);
        this.state = {
            codeStatus: false
        }
    }
/**
 * @method 点击字体
 */
    handleClick = () => {
        const { codeStatus } = this.state;
        this.setState({
            codeStatus: !codeStatus
        })
    }
    
    render(){
        return (
            <div className='Code'>
                <div className='code-header'>
                    <span className='code-title' onClick={this.handleClick}>
                        { 
                            this.state.codeStatus ? RESOURCE.HIDDEN_CODE : RESOURCE.SHOW_CODE
                        }
                    </span>
                </div>
                {
                    this.state.codeStatus && 
                    <div className='code-content'>
                        {
                            codeArr.map((item) => {
                                let Code;
                                if(item.type === this.props.type){
                                    Code = item.codeContent
                                }
                                return <span key={item.type}>{ Code }</span>;
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

