import React, { useEffect } from 'react';
import './pagination.less';

const Pagination = (props) => {

    useEffect(() => {
        // const { pagination } = props;

    }, [props])

    return (
        <div className="jui-pagination">
            <div className="pagination-back">{`<`}</div>
            <div className="pagination-forward">{`>`}</div>
        </div>
    )
}

export default Pagination