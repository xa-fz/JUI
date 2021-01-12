import React,{useContext, useState, useMemo, useEffect } from 'react';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';
import { ThemeContext } from './Contexts/theme-context';
import { happyNewYear } from './resources/pic'; 
import Theme from './Theme';
import Utils from './utils';
import worker_script from './webworkers';

const utils = new Utils();

const App = () => {
  const [showComponent, set_showComponent] = useState(<React.Fragment></React.Fragment>);
  const [themeStatus, set_themeStatus] = useState(false);
  const theme = useContext(ThemeContext)[0];
  const themeStyle = useMemo(() => theme.name, [theme]);
  const [bk_pic, set_bk_pic] = useState('');
  const [weather_info, set_weather_info] = useState('');

  useEffect(() => {
    const today = utils.getTime();
    let backGround = null;
    if (today.includes('01-01')) {
      backGround = happyNewYear
    }
    set_bk_pic(backGround);
  }, [])

  // webworker线程
  useEffect(() => {
    let WEB_WORKER = new Worker(worker_script);
      WEB_WORKER.onmessage = (event) => {
        console.log(event.data);
        set_weather_info(event.data);
      }
      WEB_WORKER.postMessage('im from main');
  }, [])

  const getComponent = showComponent => {
    set_showComponent(showComponent);
  }

  const cancelTheme = () => {
    set_themeStatus(!themeStatus);
  }

  return (
    <div className={`App ${themeStyle}`} style={{backgroundImage: `url(${bk_pic})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}} 
      onClick={() => cancelTheme()}>
      <div className='componentList' style={{background:  bk_pic && 'rgba(255, 255,255, .6)'}}>
        <div className='header'>JUI</div>
        {weather_info}
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