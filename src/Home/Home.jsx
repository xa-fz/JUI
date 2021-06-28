import React,{ useEffect, useState } from 'react';
import {bindActionCreators} from 'redux';
import * as Actions from '../redux/action';
import { connect } from 'react-redux'
import Utils from '../utils';
import { happyNewYear } from '../resources/pic';
import worker_script from '../webworkers';
import './home.less';

const utils = new Utils();

const Home = (props) => {
    const [now_date, set_now_date] = useState('');
    const [bk_pic, set_bk_pic] = useState('');
    const set_weather_info = useState('')[1];

        // webworker线程
    useEffect(() => {
        let WEB_WORKER = new Worker(worker_script);
        WEB_WORKER.onmessage = (event) => {
            console.log(event.data);
            set_weather_info(event.data);
        }
        WEB_WORKER.postMessage('im from main');
    }, [set_weather_info])

    useEffect(() => {
        const today = utils.getTime();
        set_now_date(today);
        let backGround = null;
        if (today.includes('01-01')) {
            backGround = happyNewYear
        }
        console.log(bk_pic);
        set_bk_pic(backGround);
    }, [bk_pic])

    // const getNew = () => {
    //     props.getValue([4,5,6]);
    // }

    return(
        <div className="jui-home">
            <div className="top-header">
                {now_date}
            </div>
            <div className="content">
                <div className="welcome">welcome to JUI</div>
                <div title="click me!" className="start" onClick={() => {
                    props.history.push("/jui")
                }}>开始使用</div>
            </div>
            {/* <div onClick={() => getNew()}>Home</div> */}
        </div>
        
    )   
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions,dispatch)
}
    
export default connect(null,mapDispatchToProps)(Home);