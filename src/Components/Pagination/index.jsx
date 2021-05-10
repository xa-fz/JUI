import React, { useEffect, useState, Fragment } from 'react';
import './pagination.less';

const Pagination = (props) => {
    const [page_info, set_page_info] = useState({currentPage: 1, pageSize: 5});
    const [pagesize_arr, set_pagesize_arr] = useState([]);

    useEffect(() => {
        let pageSizeArr = [];
        for (let i = 1; i < page_info.pageSize; i++) {
            pageSizeArr.push(i);
        }
        console.log(pageSizeArr);
        set_pagesize_arr(pageSizeArr);
    }, [page_info.pageSize])

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
                pagesize_arr.map(s => <div key={s} className="pageNum">
                    {s}
                </div>)
            }
            <div className="pageNum">{page_info.pageSize}</div>
            <div className="pageToRight" onClick={() => {}}>{`>`}</div>
            <div style={{display: 'inline-block'}}>共{5}页</div>
        </div>
    )
}

export default Pagination