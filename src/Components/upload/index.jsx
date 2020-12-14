import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Prompt from '../Prompt';
import './upload.less';

const Upload = (props) => {
    const [images, setImages] = useState('');
    const [imageStyle, setImageStyle] = useState({});
    const [alt, setAlt] = useState('');
    const [file_info, set_file_info] = useState({});
    const myRef = useRef(<React.Fragment></React.Fragment>);
    const promptRef = useRef(<React.Fragment></React.Fragment>);

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

    const chooseFile = () => {
        myRef.current.click();
    }

    const uploadFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            if(props && props.size && event.target.files[0].size > 1024 * 1024 * props.size) {
                promptRef.current.warning('warning', '提示!', `文件不能大于${props.size}MB，请重新选择！`);
                myRef.current.value = "";
                return
            }
            // Blob类型
            let data = new FormData();
            data.append("filesData", event.target.files[0]);
            props.onChange(data);
            // base64类型
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
            <Prompt ref={promptRef} />
		</div>
    )
}

export default Upload