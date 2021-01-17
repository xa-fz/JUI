import axios from 'axios';

class httpWorker {
    get = (url, data) => {
        axios.get({
            method:'get',
            url,
            data,
          }).then((res)=>{
            console.log(res)
        })
    }

    post = (url, data) => {
        axios.post({
            method:'post',
            url,
            data
        }).then(res=>{
            console.log(res)
        })
    }

    delete = (url, data) => {
        axios.delete(url,{
            data
          }).then(res=>{
            console.log(res)
          })
    }

    put = (url, data) => {
        axios.put(url, data).then(res=>{
            console.log(res)
          })
    }
}

export default httpWorker