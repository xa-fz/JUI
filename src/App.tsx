import React,{ Component } from 'react';
import {useState, ReactElement} from 'react';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';

const App: React.FC = (): ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null =>{
  const [showComponent, setComponent]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(null); 
  const getComponent = (showComponent: any) => {
    setComponent(showComponent);
  }
    return (
      <div className="App">
        <div className='componentList'>
          <div className='header'>JUI</div>
          <ComponentTree compConent = {getComponent}/>
        </div>
        <div className='codeContent'>
          { showComponent }
        </div>
      </div>
    )
}

export default App;