import React,{useContext, useState, useMemo } from 'react';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';
import Theme from './Theme';
import { ThemeContext } from './Contexts/theme-context';

const App = () => {
  const [showComponent, set_showComponent] = useState(<React.Fragment></React.Fragment>);
  const [themeStatus, set_themeStatus] = useState(false);
  const theme = useContext(ThemeContext)[0];
  const themeStyle = useMemo(() => theme.name, [theme]);

  const getComponent = showComponent => {
    set_showComponent(showComponent);
  }

  const cancelTheme = () => {
    set_themeStatus(!themeStatus);
  }

  return (
    <div className={`App ${themeStyle}`} onClick={() => cancelTheme()}>
      <div className='componentList'>
        <div className='header'>JUI</div>
        <ComponentTree compConent = {v => getComponent(v)}/>
      </div>
      <div className='codeContent'>
        { showComponent }
      </div>
      <Theme themeStatus={themeStatus} />
    </div>
  )
}

export default App;