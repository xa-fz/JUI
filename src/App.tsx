import React,{ Component, ReactElement, useContext } from 'react';
import './App.less';
import ComponentsTree from './ComponentTree/ComponentsTree';
import { ComponentsContext } from './context'

const App: React.FC = (): ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null =>{
  const child_component = useContext(ComponentsContext)[0];

    return (
      <div className="App">
        <div className='componentList'>
          <div className='header'>JUI</div>
          <ComponentsTree />
        </div>
        <div className='codeContent'>
          { child_component }
        </div>
      </div>
    )
}

export default App;