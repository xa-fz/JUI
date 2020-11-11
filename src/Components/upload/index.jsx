import React, { useRef, useState } from 'react';
import Icon from '../Icon';
import './upload.less'

const Upload = () => {
    const [images, set_images] = useState('');
    const myRef = useRef(<React.Fragment></React.Fragment>);
    const chooseFile = () => {
        myRef.current.click();
    }

    const uploadFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                set_images(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    }

    const deleteImages = () => {
        myRef.current.value = "";
        set_images("")
    }

    return (
        <div className="jui-upload">
            <div className="images" onClick={() => chooseFile()}>
                {
                    images === '' ? <div className="choose">+</div> : <img src={images} alt="点击导入本地图片" />
                }
                {
                   images &&  
                   <div onClick={e => e.stopPropagation()}><Icon style={{float: 'right', width: 30, height: 30}} type="close" 
                                handleClick={() => deleteImages()} /></div>
                }
            </div>
            <input ref={myRef} type="file" style={{display: 'none'}} onChange={e => uploadFile(e)} /><br />
			<button className="upload-Btn" onClick={() => chooseFile()}>选择文件</button>
		</div>
    )
}

export default Upload