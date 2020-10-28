import React, { useRef } from 'react';

const Upload = () => {
    const myRef = useRef(null);
    const chooseFile = () => {
        console.log('选择文件');
        myRef.current.click();
    }
    return (
        <div>
			<input ref={myRef} type="file" style={{display: 'none'}} /><br />
			<button onClick={() => chooseFile()}>选择上传文件</button>
		</div>
    )
}

export default Upload