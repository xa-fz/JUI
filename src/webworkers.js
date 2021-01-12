const workercode = () => {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = function(e) {
        postMessage('hello react!!');
    }
};

let code = workercode.toString();
console.log(code); // 转为string类型
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));
console.log(typeof code, code);// 处理字符串拿到onmessage的string
const blob = new Blob([code], {type: "application/javascript"});
console.log(blob);
const worker_script = URL.createObjectURL(blob);
console.log(worker_script);

export default worker_script