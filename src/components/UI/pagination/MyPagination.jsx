import React from 'react';
import classes from './MyPagination.module.css'
import '../../../styles/App.css'
import {getPagesArray} from "../../../utils/pages";

const MyPagination = (props) => {
    let pagesArray = getPagesArray(props.totalPages);

    return (
        <div className={'page__wrapper'}>
            {pagesArray.map(p =>
                <span onClick={() => {
                    props.setPage(p)
                }} className={props.page === p ? 'page page__current' : 'page'} key={p}>{p}</span>)}
        </div>
    );
};

export default MyPagination;