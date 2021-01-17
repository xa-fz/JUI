import axios from 'axios';

class httpWorker {
    get = (url, data) => {
        axios.get(url, {
            params: data
        }).then((res)=>{
            console.log(res)
        })
    }

    post = () => {
        
    }

    delete = () => {
        
    }

    put = () => {
        
    }
}

export default httpWorker