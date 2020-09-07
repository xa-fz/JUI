import React, { useState, useMemo } from 'react';
import Icon from '../Components/Icon';
import './theme.less';

const Theme = () => {
    const [themeColor, set_themeColor] = useState('#1890FF');
    const colorList = useMemo(() => ['#1890FF', '#8B008B'],[]);
    const [showTheme, set_showTheme] = useState(false);

    /**
     * @method 切换主题
     */
    const changeTheme = () => {
        let status = !showTheme;
        set_showTheme(status);
    }
    /**
     * @method 点击选择主题
     */
    const chooseColor = (color) => {
        set_themeColor(color);
    }
    return (
        <div className='jui-theme'>
            {
                showTheme && 
                <div className='theme-list'>
                    {
                        colorList.map((v, index) => 
                            <div key={v + index}
                                className='theme-color'
                                style={{backgroundColor: v, border: `2px solid ${themeColor === v ? '#fff' : v}`, opacity: themeColor !==v && 0.5}}
                                onClick={() => chooseColor(v)}
                            ></div>
                        )
                    }
                </div>
            }
            <div className='theme-button' style={{backgroundColor: themeColor}} onClick={() => changeTheme()} title='主题'>
                <Icon type='theme' style={{height: '24px', width: '24px', color: '#fff', marginTop: 'calc(50% - 12px)', marginLeft: 'calc(50% - 12px)'}} />
            </div>
        </div>
    )
}

export default Theme