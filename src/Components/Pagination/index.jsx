import React, { useEffect, useState } from 'react';
import './pagination.less';

const Pagination = (props) => {
    const [page_info, set_page_info] = useState({currentPage: 1, pageSize: 1});
    const [page_arr, set_page_arr] = useState([]);
    const [jump_page, set_jump_page] = useState(<></>);
    const [back_previous_jsx, set_back_previous_jsx] = useState(<></>);

    // 获取属性并处理数据
    useEffect(() =>{
        const { total, pageSize, current } = props;
        // 排列计算总页数
        let totalPage = 0, pageArr = [];
        if (total <= pageSize) {
            totalPage = 1
        } else {
            if (props.total % pageSize === 0) {
                totalPage = total / pageSize
            } else {
                totalPage = Math.ceil(total / pageSize)
            } 
        }
        for (let i = 1; i < totalPage + 1; i++) {
            pageArr.push(i);
        }
        set_page_arr(pageArr);
        let page_info_new = {};
        page_info_new.currentPage = current;
        page_info_new.pageSize = pageSize;
        set_page_info(page_info_new);
    }, [props])

    // 眺页
    useEffect(() => {
        set_jump_page(
            <div className="pageJump display-inline">
                跳转 <input value={page_info.currentPage} type="text" onChange={e => {
                        if (page_arr.length) {
                            if (typeof Number(e.target.value) === 'number' && Number(e.target.value) <= page_arr.length && Number(e.target.value) > 0) {
                                let pageInfo = JSON.parse(JSON.stringify(page_info));
                                Object.assign(pageInfo, { currentPage: Number(e.target.value) });
                                props.handleChange && props.handleChange(Number(e.target.value), page_info.pageSize);
                                set_page_info(pageInfo)
                            }
                        } else {
                            set_page_info(currentState => ({...currentState, currentPage: 0}));
                            props.onChange(0, 0);
                        }
                    }} 
                /> 页
            </div>
        )
    }, [page_info, page_arr, props])

    // 切换页数
    useEffect(() => {
        set_back_previous_jsx(
            <>
                <div className="pageToLeft display-inline" onClick={() => {
                    if (page_info.currentPage > 1) {
                        let new_current = page_info.currentPage - 1;
                        new_current && set_page_info(currentState => ({...currentState, currentPage: new_current}))
                        props.handleChange && props.handleChange(new_current, page_info.pageSize);
                    }
                }}>{`<`}</div>
                {
                    page_arr.map(s => <div key={s} onClick={() => {
                        props.handleChange && props.handleChange(s, page_info.pageSize);
                        set_page_info(currentState => ({...currentState, currentPage: s}));   
                    }}
                        className={`pageNum ${s === page_info.currentPage && 'borderChoosed'} display-inline`}>
                        {s}
                    </div>)
                }
                <div className="pageToRight display-inline" onClick={() => {
                    if (page_info.currentPage < page_arr.length) {
                        let new_current = page_info.currentPage + 1;
                        new_current && set_page_info(currentState => ({...currentState, currentPage: new_current}))
                        props.handleChange && props.handleChange(new_current, page_info.pageSize);
                    }
                }}>{`>`}</div>
            </>
        )
    }, [page_arr, page_info, props])

    return (
        <div className="jui-pagination">
            { props.total && <div className="mr-10 display-inline">Total {props.total} items</div> }
            { jump_page }
            { back_previous_jsx }
            <div className="display-inline">每页 {page_info.pageSize} 条</div>
        </div>
    )
}

export default Pagination