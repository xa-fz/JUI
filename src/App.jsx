import React,{ Component } from 'react';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';
import Theme from './Theme';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showComponent: null
    }
  }
  getComponent = showComponent => {
    this.setState({
      showComponent
    })
  }
  render(){
    return (
      <div className="App">
        <div className='componentList'>
          <div className='header'>JUI</div>
          <ComponentTree compConent = {this.getComponent}/>
        </div>
        <div className='codeContent'>
          { this.state.showComponent }
        </div>
        <Theme />
      </div>
    )
  }
}

export default App;