import React, { useEffect, useState } from 'react';
import RESOURCE from '../../resource';
import Upload from '../../Components/upload';

const UploadContent = () => {
    const [uploadArr, set_uploadArr] = useState([]);
    const [fileInfo, setFileInfo] = useState({});

    useEffect(() => {
        let uploadInfo = RESOURCE.UPLOAD_ARR;
        uploadInfo.forEach(item => {
            switch(item.type){ 
                case 'upload-basic':
                    item.showComponent = 
                        <React.Fragment>
                            <Upload 
                                contentStyle={{width: '200px', height: '200px', border: '1px solid #808080'}}
                                alt='请选择图片'
                                getFile={(file) => {
                                    setFileInfo(file);
                                }}
                                accept='image/*'
                            />
                        </React.Fragment>
                    break;
                default:
                    break;
            }
        })
        set_uploadArr(uploadInfo);
    }, [setFileInfo, fileInfo])

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