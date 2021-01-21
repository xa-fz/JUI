import React,{useContext, useState, useMemo, useEffect } from 'react';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';
import { ThemeContext } from './Contexts/theme-context';
import { happyNewYear } from './resources/pic'; 
import Theme from './Theme';
import Utils from './utils';
import worker_script from './webworkers';
import ButtonContent from './ComponentTree/ButtonContent';

const utils = new Utils();

const App = () => {
  const [showComponent, set_showComponent] = useState(<React.Fragment></React.Fragment>);
  const [themeStatus, set_themeStatus] = useState(false);
  const theme = useContext(ThemeContext)[0];
  const themeStyle = useMemo(() => theme.name, [theme]);
  const [bk_pic, set_bk_pic] = useState('');
  const set_weather_info = useState('')[1];
  const [router_path, set_router_path] = useState('');
  const [now_date, set_now_date] = useState('');

  const initPage = <div className='welcome' onClick={() => {
    set_router_path('/buttons');
    set_showComponent(<ButtonContent />);
  }}>welcome to JUI!!</div>

  useEffect(() => {
    const today = utils.getTime();
    set_now_date(today);
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
  }, [set_weather_info])

  const getComponent = myRoute => {
    console.log(myRoute.path);
    // props.history.push(myRoute.path)
    set_showComponent(myRoute.component);
    set_router_path(myRoute.path);
  }

  const cancelTheme = () => {
    set_themeStatus(!themeStatus);
  }

  return (
    <div className={`App ${themeStyle}`} style={{backgroundImage: `url(${bk_pic})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}} 
      onClick={() => cancelTheme()}>
        {
          router_path && 
            <div className='componentList' style={{background: bk_pic && 'rgba(255, 255,255, .6)'}}>
              <div className='header'>JUI</div>
              {/* {weather_info} */}
              <ComponentTree compConent = {v => getComponent(v)}/>
            </div>
        }
      <div className='rightPage'>
        <div className="top-header">
            {now_date}
        </div>
        <div className="codeContent" style={{background: !router_path && '#3AAFA9'}}>
          { 
           router_path !== '' ? showComponent : initPage
          }
        </div>
      </div>
      <Theme themeStatus={themeStatus} />
    </div>
  )
}

export default App;