import React,{ Component, useState, ReactElement, useContext } from 'react';
import './App.less';
import ComponentTrees from './ComponentTree/ComponentTree';
import { ComponentsContext } from './context'

const App: React.FC = (): ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null =>{
  const [showComponent, setComponent]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(null);
  const child_component = useContext(ComponentsContext)[0];


  const getComponent = (showComponent: any) => {
    setComponent(showComponent);
  }
    return (
      <div className="App">
        <div className='componentList'>
          <div className='header'>JUI</div>
          <ComponentTrees />
        </div>
        <div className='codeContent'>
          { child_component }
        </div>
      </div>
    )
}

export default App;