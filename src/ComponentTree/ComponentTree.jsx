import React,{ Component } from 'react';
import ButtonContent from './ButtonContent';
import IconContent from './IconContent';
import ModalContent from './ModalContent';
import TableContent from './TableContent';
import UploadContent from './UploadContent';
import LayoutContent from './LayoutContent';
import JVideoContent from './JVideoContent';
import Pagination from './PaginationContent';
import './Component.less';
import J_ICONS from '../utils/urls';

class ComponentTree extends Component{
    constructor(props){
        super(props);
        this.state = {
            chooseId: '',
            componentList : [
                {
                    id: '00',
                    compType: '基础组件',
                    listState: false,
                    childern: [
                        {
                            id: '00-01',
                            compName: 'Button 按钮',
                            component: <ButtonContent />,
                            path: 'buttons'
                        },
                        {
                            id: '00-02',
                            compName: 'Icon图标',
                            component: <IconContent />,
                            path: 'icons'
                        }
                    ]
                },
                {
                    id: '01',
                    compType: '提示信息',
                    listStatus: false,
                    childern: [
                        {
                            id: '01-01',
                            compName: 'Modal  对话框',
                            component:<ModalContent />,
                            path: 'modals'
                        }
                    ]
                },
                {
                    id: '02',
                    compType: '数据展示',
                    listStatus: false,
                    childern: [
                        {
                            id: '02-01',
                            compName: 'Table  表格',
                            component: <TableContent />,
                            path: 'tables'
                        },
                        {
                            id: '02-02',
                            compName: 'Pagination 分页',
                            component: <Pagination />,
                            path: 'paginations'
                        },
                        {
                            id: '02-03',
                            compName: 'H5Video 播放器',
                            component: <JVideoContent />,
                            path: 'h5Videos'
                        }
                    ]
                },
                {
                    id: '03',
                    compType: '数据获取',
                    listStatus: false,
                    childern: [
                        {
                            id: '03-01',
                            compName: 'Upload 上传',
                            component: <UploadContent />,
                            path: 'uploads'
                        }
                    ]
                },
                {
                    id: '04',
                    compType: '布局',
                    listStatus: false,
                    childern: [
                        {
                            id: '04-01',
                            compName: 'layout布局',
                            component: <LayoutContent />,
                            path: 'layouts'
                        }
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
        arr.forEach(item => {
            if(comInfo.id === item.id){
                item.listState = !item.listState;
            }
        })
        this.setState({
            componentList: arr
        })
    }

    /**
     * @method 展示组件内容
     */
    showContent = child => {
        console.log(child);
        this.props.compConent(child);
        this.setState({
            chooseId: child.id
        })
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
                                        item.childern.map(child => 
                                            <div className={`listComponent ${child.id === this.state.chooseId && 'listChoosed'}`}  key={child.id} onClick={() => this.showContent(child)}>
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