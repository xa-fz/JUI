import React, { useState, useMemo, useEffect, useContext } from 'react';
import Icon from '../Components/Icon';
import { ThemeContext } from '../Contexts/theme-context';
import './theme.less';

const Theme = (props) => {
    const colorList = useMemo(() => [{name: 'blue', value: '#1890FF'}, {name: 'dark_pink', value: '#8B008B'}],[]);
    const [showTheme, set_showTheme] = useState(false);
    const [theme, set_theme] = useContext(ThemeContext);

    useEffect(() => {
        set_showTheme(false);
    }, [props.themeStatus])

    const changeTheme = (e) => {
        e.stopPropagation();
        let status = !showTheme;
        set_showTheme(status);
    }

    const chooseColor = (e, v) => {
        e.stopPropagation();
        set_theme(v);
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
                                style={{backgroundColor: v.value, border: `2px solid ${theme.name === v.name ? '#fff' : v.value}`, opacity: theme.name !== v.name && 0.5}}
                                onClick={(e) => chooseColor(e, v)}
                            ></div>
                        )
                    }
                </div>
            }
            <div className='theme-button' style={{backgroundColor: theme.value}} onClick={(e) => changeTheme(e)} title='主题'>
                <Icon type='theme' style={{height: '24px', width: '24px', color: '#fff', marginTop: 'calc(50% - 12px)', marginLeft: 'calc(50% - 12px)'}} />
            </div>
        </div>
    )
}

export default Theme