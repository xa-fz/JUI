import React,{ Component } from 'react';
import './App.less';
import ComponentTree from './ComponentTree/ComponentTree';
import Theme from './Theme';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showComponent: null,
      themeStatus: false
    }
  }
  getComponent = showComponent => {
    this.setState({
      showComponent
    })
  }

  cancelTheme = () => {
    const { themeStatus } = this.state;
    this.setState({
      themeStatus: !themeStatus
    })
  }

  render(){
    return (
      <div className="App" onClick={this.cancelTheme}>
        <div className='componentList'>
          <div className='header'>JUI</div>
          <ComponentTree compConent = {this.getComponent}/>
        </div>
        <div className='codeContent'>
          { this.state.showComponent }
        </div>
        <Theme themeStatus={this.state.themeStatus} />
      </div>
    )
  }
}

export default App;