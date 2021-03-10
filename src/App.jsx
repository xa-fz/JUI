import React,{useContext, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';
import { ThemeContext } from './Contexts/theme-context';
import Theme from './Theme';

const App = (props) => {
  const [showComponent, set_showComponent] = useState(<React.Fragment></React.Fragment>);
  const [themeStatus, set_themeStatus] = useState(false);
  const theme = useContext(ThemeContext)[0];
  const [path, set_path] = useState('');
  const themeStyle = useMemo(() => theme.name, [theme]);

  const getComponent = myRoute => {
    console.log(myRoute);
    props.history.push(`/jui/${myRoute.path}`);
    set_path(myRoute.path);
    set_showComponent(myRoute.component);
  }

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
 
          <Router>
            <Route exact path={`/jui/${path}`} component={showComponent} />
          </Router>
        
        </div>
      </div>
      <Theme themeStatus={themeStatus} />
    </div>
  )
}

export default App;