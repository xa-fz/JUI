import React, { useEffect, useState } from 'react';
import RESOURCE from '../../resource';
import Upload from '../../Components/upload';

const UploadContent = () => {
    const [uploadArr, set_uploadArr] = useState([]);
    const [image_base64, set_image_base64] = useState('');

    const handleChange = (url_data) => {
        // 返回base64，可以上传服务器
        console.log(url_data);
        set_image_base64(url_data);
    }

    useEffect(() => {
        let uploadInfo = RESOURCE.UPLOAD_ARR;
        uploadInfo.forEach(item => {
            switch(item.type){ 
                case 'upload-basic':
                    item.showComponent = 
                        <Upload />
                    break;
                case 'upload-pic':
                    item.showComponent = 
                        <Upload 
                            contentStyle={{width: '200px', height: '200px', border: '1px solid #808080'}}
                            alt='请选择图片'
                            accept='image/*'
                            onChange={handleChange}
                            size={10}
                        />
                    break;
                default:
                    break;
            }
        })
        set_uploadArr(uploadInfo);
    }, [image_base64])

    return (
        <div className="contentCommonStyle uploadContent">
            <div className='header'>
                <h1>Upload 上传</h1>
            </div>
            <div className='useComponent'>
                {
                    uploadArr.map(item => 
                    <div className='instructions' key={item.type}>
                        <div className='title'>{item.title}</div>
                        <div className='content uploadComponent'>
                            {item.showComponent}
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default UploadContent