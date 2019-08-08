import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/action';
import { connect } from 'react-redux'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    getNew = () => {
        this.props.getValue([4,5,6]);
    }
    render(){
        return(
            <div onClick={() => this.getNew()}>Home</div>
        )   
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions,dispatch)
}
    
export default connect(null,mapDispatchToProps)(Home);