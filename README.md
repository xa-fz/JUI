## JUI
A front-end component library based on reactJs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### ·记录·
1. 引入webworker，由于webpack打包，可能导致在项目中无法直接引入js脚本，
解决方案，是把传递信息的方法onmessage先转为string类型，再使用new Blob()
返回一个blob对象，URL.createObjectURL可以获取当前文件的一个内存URL，也就是webworker的路径；
