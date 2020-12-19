import React, { useEffect, useState } from 'react';
import { Play } from '../../resources/pic'; 
import Icon from '../Icon';
import './JVideo.less';

const JVideo = (props) =>{
    const [visible_play, set_visble_play] = useState(false);
    const [area_style, set_area_style] = useState({});

    useEffect(() => {
        const { areaStyle } = props;
        let objStyle = {
            width: areaStyle && areaStyle.width ? areaStyle.width : '300px',
            height: areaStyle && areaStyle.height ? areaStyle.height : '160px',
            backGround: areaStyle && areaStyle.background ? areaStyle.background : '#fff',
        }
        set_area_style({
            ...objStyle,
            border: '1px solid #000'
        });
    },[props])

    const { url, coverPic } = props;
    return (
        <div className="jui-Video">
            <div className="video-show" style={area_style}>
                <img className="pic-cover" src={coverPic || ''} alt="暂无图片"/>
                <img className="pic-play" src={Play} alt="" onClick={() => set_visble_play(true)} 
                    style={{height: 80, width: 80, left: `calc(50% - 40px)`, top: `calc(50% - 40px)`}}/>
            </div>
            {
                visible_play && 
                <div className="video-play">
                    <video src={ url || '' } className="video" controls></video>
                    <Icon type='close' handleClick={ () => set_visble_play(false) }
                    style={{color: '#fff', zIndex: 1000, cursor: 'pointer', position: 'absolute', right: 'calc(50% - 300px)', top: 'calc(50% - 160px)'}}/>
                </div>
            }
        </div>
    )
}

export default JVideo