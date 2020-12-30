/**
 * 资源化
 */
const RESOURCE = {
    SHOW_CODE: '显示代码',
    HIDDEN_CODE: '隐藏代码',
    CUSTOM_WORD: '自定义文字',
    BTN_INFO_ARR: [
        {
            type: 'btn-normal',
            title: '基础用法：根据功能的区别选择使用按钮的类型'
        },
        {
            type: 'btn-icon',
            title: '图标：根据功能选择选择相应带有icon的按钮'
        },
        {
            type: 'btn-disable',
            title: '按钮的不可点击状态'
        }
    ],
    MODAL_INFO_ARR: [
        {
            type: 'modal-normal',
            title: '基本用法：询问用户操作'
        },
        {
            type: 'modal-tips',
            title: '提示：操作结果的提示信息'
        }
    ],
    TABLE_INFO_ARR: [
        {
            type: 'tab-basic',
            title: '默认带有分页的表格组件'
        },
        {
            type: 'tab-arrangement',
            title: '含排列功能表格'
        }
    ],
    ICONS_NAME_ARR: [
        {
            name: 'Arrow up',
            type: 'arrowUp'
        },
        {
            name: 'Arrow down',
            type: 'arrowDown'
        },
        {
            name: 'Arrow left',
            type: 'arrowLeft'
        },
        {
            name: 'Close',
            type: 'close'
        },
        {
            name: 'User',
            type: 'user'
        },
        {
            name: 'Success',
            type: 'success'
        },
        {
            name: 'Error',
            type: 'error'
        },
        {
            name: 'Info',
            type: 'info'
        },
        {
            name: 'Warning',
            type: 'warning'
        },
        {
            name: 'Increasing',
            type: 'increasing'
        },
        {
            name: 'Decreasing',
            type: 'decreasing'
        },
        {
            name: 'Theme',
            type: 'theme'
        }
    ],
    UPLOAD_ARR: [
        {
            type: 'upload-basic',
            title: '基础上传功能'
        },{
            type: 'upload-pic',
            title: '图片上传功能'
        }
    ],
    LAYOUT_ARR: [
        {
            type: 'layout-column',
            title: '纵向布局'
        }
    ],
    VIDEO_ARR: [
        {
            type: 'basic',
            title: '基础视频播放'
        },
        {
            type: 'Vstyle',
            title: '可控制点击视频区域大小及其他样式'
        },
        {
            type: 'WHvideo',
            title: '视频宽高属性'
        }
    ],
}

export default RESOURCE