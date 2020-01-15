import React,{ Component } from 'react';
import ButtonContent from './ButtonContent/index';
import './Component.less';
import J_ICONS from '../utils/urls';

class ComponentTree extends Component{
    constructor(props){
        super(props);
        this.state = {
            componentList : [
                {
                    id: '00',
                    compType: '基础组件',
                    listState: false,
                    childern: [
                        {
                            id: '00-01',
                            compName: 'Button 按钮',
                            component: <ButtonContent/>
                        }
                    ]
                },{
                    id: '01',
                    compType: '高级组件',
                    listStatus: false,
                    childern: [
                        
                    ]
                }
            ]
        }
    }

    /**
     * @method 展开组件列表
     */
    showList = comInfo => {
        let { componentList } = this.state;
        let arr = [...componentList];
        arr.forEach((item) => {
            if(comInfo.id === item.id){
                item.listState = !item.listState;
            }
        })
        this.setState({
            componentList : arr
        })
    }

    /**
     * @method 展示组件内容
     */
    showContent = child => {
        this.props.compConent(child.component);
    }

    render(){
        let { componentList } = this.state;
        return (
            <div className='componentTree'>
                {
                    componentList.map((item) => 
                        <div key={ item.id }>
                            <div className='Tree_type' onClick={() => this.showList(item)}>
                                {item.compType}
                                <img alt={'暂无图片'} src={!item.listState ? J_ICONS.ArrowDown: J_ICONS.ArrowUp} 
                                    className='IconStyle'/>
                            </div>
                            {
                                item.listState && 
                                <div className='Tree_list'>
                                    {
                                        item.childern.map((child) => 
                                            <div className='listComponent' key={child.id} onClick={() => this.showContent(child)}>
                                                {child.compName}
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </div>  
                    )
                }
            </div>
        )
    }
}

export default ComponentTree;