import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import './upload.less';

const Upload = (props) => {
    const [images, setImages] = useState('');
    const [imageStyle, setImageStyle] = useState({});
    const [alt, setAlt] = useState('');
    const [file_info, set_file_info] = useState({});

    useEffect(() => {
        if (props && props.contentStyle) {
            const styles = props.contentStyle;
            let imageStyle = {};
            imageStyle.width = styles.width ? styles.width : '200px';
            imageStyle.height = styles.height ? styles.height : '200px';
            setImageStyle(imageStyle);
        }
        const alt = props && props.alt ? props.alt : '请选择图片';
        setAlt(alt);
    }, [props])

    const myRef = useRef(<React.Fragment></React.Fragment>);
    const chooseFile = () => {
        myRef.current.click();
    }

    const judgeSize = useCallback((fileSize) => {
        if (props && props.size && (fileSize > (1024 * 1024 * props.size))) {
            console.log('文件过大'); // 待开发了提示信息组件后加入
            return
        }
    }, [props])

    const uploadFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            judgeSize(event.target.files[0].size);
            var data=new FormData();
            data.append("filesData", event.target.files[0]);
            props.onChange(data);
            // 读取文件
            let reader = new FileReader();
            reader.onload = (e) => {
                setImages(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            set_file_info(event.target.files[0]);
        }
    }

    const deleteImages = () => {
        myRef.current.value = "";
        setImages("");
        set_file_info({});
    }

    return (
        <div className="jui-upload">
            <div className="upload-content">
                {
                    props && props.accept && props.accept.includes('image') && 
                        <div className="images" style={imageStyle} onClick={() => chooseFile()}>
                            {
                                images === '' ? <div className="choose">+</div> : <img src={images} alt={alt} />
                            }
                            {
                            images &&  
                            <div onClick={e => e.stopPropagation()}>
                                <Icon style={{float: 'right', width: 30, height: 30}} type="close" handleClick={() => deleteImages()} />
                                </div>
                            }
                        </div>
                }
                <input ref={myRef} type="file" style={{display: 'none'}} onChange={e => uploadFile(e)} accept={props && props.accept ? props.accept : '*'} /><br />
                <button className="upload-Btn" onClick={() => chooseFile()}>选择文件</button>
            </div>
            {
                file_info && 
                <div className='file-name' style={{cursor: file_info && file_info.name && file_info.name.includes('pdf') ? 'pointer' : 'default'}}>
                    { file_info.name}
                </div>
            }
		</div>
    )
}

export default Upload