import React, { useEffect, useState } from 'react';
import './pagination.less';

const Pagination = (props) => {
    const [page_info, set_page_info] = useState({currentPage: 1, pageSize: 1});
    const [page_arr, set_page_arr] = useState([]);

    useEffect(() => {
        const { current } = props;
        let page_info_new = JSON.parse(JSON.stringify(page_info));
        page_info_new.currentPage = current;
        set_page_info(page_info_new);
    }, [props])

    useEffect(() => {
        let totalPage = 0, pageArr = [];
        if (props.total <= page_info.pageSize) {
            totalPage = 1
        } else {
            if (props.total % page_info.pageSize === 0) {
                totalPage = props.total / page_info.pageSize
            } else {
                totalPage = Math.ceil(props.total / page_info.pageSize)
            } 
        }
        for (let i = 1; i < totalPage + 1; i++) {
            pageArr.push(i);
        }
        set_page_arr(pageArr);
    }, [props.total, page_info])

    return (
        <div className="jui-pagination">
            <div className="pageJump">
                跳转 <input value={page_info.currentPage} type="text" onChange={(e) => {
                    let pageInfo = JSON.parse(JSON.stringify(page_info));
                    Object.assign(pageInfo, { currentPage: e.target.value });
                    set_page_info(pageInfo)
                }} /> 页
            </div>
            <div className="pageToLeft" onClick={() => {

            }}>{`<`}</div>
            {
                page_arr.map(s => <div key={s} className="pageNum">
                    {s}
                </div>)
            }
            <div className="pageToRight" onClick={() => {}}>{`>`}</div>
            <div style={{display: 'inline-block'}}>共{page_arr[page_arr.length - 1]}页</div>
        </div>
    )
}

export default Pagination