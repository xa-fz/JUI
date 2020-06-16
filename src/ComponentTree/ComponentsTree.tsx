import React,{ useState, useContext, ReactElement, Component } from 'react';
import ButtonContent from './ButtonContent';
import IconContent from './IconContent';
import ModalContent from './ModalContent';
import './Component.less';
import J_ICONS from '../utils/urls';
import { ComponentsContext } from '../context';

const ComponentsTree: React.FC = (): ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null =>{
    const [componentList, set_componentList]: [any[], React.Dispatch<React.SetStateAction<any[]>>] = useState<any[]>([
        {
            id: '00',
            compType: '基础组件',
            listState: false,
            childern: [
                {
                    id: '00-01',
                    compName: 'Button 按钮',
                    component: <ButtonContent />
                },
                {
                    id: '00-02',
                    compName: 'Icon图标',
                    component: <IconContent />
                }
            ]
        },{
            id: '01',
            compType: '提示信息',
            listStatus: false,
            childern: [
                {
                    id: '01-01',
                    compName: 'Modal  对话框',
                    component:<ModalContent />
                }
            ]
        }
    ]);
    const set_child_component = useContext(ComponentsContext)[1];

    /**
     * @method 展开组件列表
     */
    const showList = (comInfo: any) => {
        let arr = [...componentList];
        arr.forEach(item => {
            if(comInfo.id === item.id){
                item.listState = !item.listState;
            }
        })
        set_componentList(arr);
    }

    /**
     * @method 展示组件内容
     */
    const showContent = (child: any) => {
        set_child_component(child.component);
    }

    return (
        <div className='componentTree'>
                {
                    componentList.map((item) => 
                        <div key={ item.id }>
                            <div className='Tree_type' onClick={() => showList(item)}>
                                {item.compType}
                                <img alt={'暂无图片'} src={!item.listState ? J_ICONS.ArrowDown: J_ICONS.ArrowUp} 
                                    className='IconStyle'/>
                            </div>
                            {
                                item.listState && 
                                <div className='Tree_list'>
                                    {
                                        item.childern.map((child: any) => 
                                            <div className='listComponent' key={child.id} onClick={() => showContent(child)}>
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
export default ComponentsTree