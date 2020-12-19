import React, { useEffect, useState } from 'react';
import JVideo from '../../Components/JVideo';
import ComponentLayout from '../ComponentLayout';
import RESOURCE from '../../resource';
// import { Cartoon } from '../../resources/videos';
import { Cover } from '../../resources/pic'; 

const JVideoContent = () => {
    const [videosArr, set_videosArr] = useState([]);

    useEffect(() => {
        let videoArr = RESOURCE.VIDEO_ARR;
        videoArr.forEach(item => {
            switch(item.type) {
                case 'basic':
                    item.showComponent = 
                    <JVideo url='' coverPic={Cover} />
                    break;
                case 'Vstyle':
                    item.showComponent = 
                    <JVideo url='' areaStyle={{width: '300px', height: '160px'}}/>
                    break;
                default:
                    break;
            }
        })
        set_videosArr(videoArr);
    }, [])

    return (
        <ComponentLayout
            head='基于H5的视频播放'
            className={{
                layoutBodyStyle: 'jvideoContent', 
                componentStyle: 'jvideoComponent'
            }}
            data={videosArr}
        />
    )
}

export default JVideoContent