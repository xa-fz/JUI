import React,{useContext, useState, useMemo } from 'react';
import './App.less';
import './styles/common.less';
import ComponentTree from './ComponentTree/ComponentTree';
import { ThemeContext } from './Contexts/theme-context';
import { GlobalDataContext } from './Contexts/global-data';
import Theme from './Theme';

const App = (props) => {
  const [global_data, set_global_data] = useContext(GlobalDataContext);
  const [themeStatus, set_themeStatus] = useState(false);
  const theme = useContext(ThemeContext)[0];
  const themeStyle = useMemo(() => theme.name, [theme]);

  const getComponent = myRoute => {
    console.log('路由：', myRoute);
    props.history.push(`/jui/${myRoute.path}`);
    set_global_data((data) => ({...data, current_component: myRoute.component}))
  }

  console.log(props);

  const cancelTheme = () => {
    set_themeStatus(!themeStatus);
  }

  return (
    <div className={`App ${themeStyle}`} onClick={() => cancelTheme()}>
        {
            <div className='componentList'>
              <div className='header'>
                <span className="pointer" onClick={() => {
                  window.history.go(-1)
                }}>JUI</span>
              </div>
              <ComponentTree compConent = {v => getComponent(v)}/>
            </div>
        }

      <div className='rightPage'>
        <div className="codeContent">
          {/* { props.children } */}
          {global_data.current_component}
        </div>
      </div>
      <Theme themeStatus={themeStatus} />
    </div>
  )
}

export default App;