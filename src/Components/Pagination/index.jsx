import React, { useEffect, useState } from 'react';
import './pagination.less';

const Pagination = (props) => {
    const [page_info, set_page_info] = useState({currentPage: 1, pageSize: 1});
    const [page_arr, set_page_arr] = useState([]);

    // 获取属性并处理数据
    useEffect(() =>{
        const { total, pageSize, current } = props;
        console.log(total, pageSize, current);
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

    return (
        <div className="jui-pagination">
            {
                props.total && <div className="mr-10 display-inline">Total {props.total} items</div>
            }
            <div className="pageJump display-inline">
                跳转 <input value={page_info.currentPage} type="text" onChange={(e) => {
                    let pageInfo = JSON.parse(JSON.stringify(page_info));
                    Object.assign(pageInfo, { currentPage: e.target.value });
                    set_page_info(pageInfo)
                }} /> 页
            </div>
            <div className="pageToLeft display-inline" onClick={() => {
                set_page_info(currentState => {
                    currentState.currentPage > 1 && currentState.currentPage--;
                    return {...currentState, currentPage: currentState.currentPage}
                })
            }}>{`<`}</div>
            {
                page_arr.map(s => <div key={s} onClick={() => set_page_info(currentState => ({...currentState, currentPage: s}))}
                    className={`pageNum ${s === page_info.currentPage && 'borderChoosed'} display-inline`}>
                    {s}
                </div>)
            }
            <div className="pageToRight display-inline" onClick={() => {
                set_page_info(currentState => {
                    currentState.currentPage < page_arr.length && currentState.currentPage++;
                    return {...currentState, currentPage: currentState.currentPage}
                })
            }}>{`>`}</div>
            <div className="display-inline">每页{page_info.pageSize}条</div>
        </div>
    )
}

export default Pagination