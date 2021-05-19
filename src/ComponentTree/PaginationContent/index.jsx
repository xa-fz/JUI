import React, { useEffect, useState } from 'react';
import Pagination from '../../Components/Pagination';
import ComponentLayout from '../ComponentLayout';
import RESOURCE from '../../resource';

const PaginationContent = () => {
    const [pagArr, set_pagArr] = useState([]);

    useEffect(() => {
        let paginationArr = RESOURCE.PAGINATION_Arr;
        paginationArr.forEach(item => {
            switch(item.type) {
                case 'basic':
                    item.showComponent = 
                    <Pagination />
                    break;
                default:
                    break;
            }
        })
        set_pagArr(paginationArr);
    }, [])

    return (
        <ComponentLayout
            head='分页'
            className={{
                layoutBodyStyle: 'paginationContent', 
                componentStyle: 'paginationComponent'
            }}
            data={pagArr}
        />
    )
}

export default PaginationContent