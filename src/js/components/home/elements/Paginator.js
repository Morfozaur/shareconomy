import React, {useCallback, useEffect, useState} from 'react';
import {paginateMe} from "../../../paginateMe";
import SingleFund from "./SingleFund";

const Paginator = ({starter}) => {
    const [currList, setCurrList] = useState(starter)
    const [currPage, setCurrPage] = useState([])
    const [btns, setBtns] = useState([])

    const firstHelpers = useCallback(()=> {
        paginateMe(currList, setCurrPage, setBtns)
    },[currList])

    useEffect(()=> {
        firstHelpers()
    },[firstHelpers])

    return (
        <>
            <div className="helpers__list">
                {currPage.map(({name, goal, request}) => {
                    return <SingleFund name={name} goal={goal} request={request}/>
                })}
            </div>

            <div className="helpers__nav">
                {btns.map(el =>{
                    return <div className='helpers__page'>{el}</div>
                })}
            </div>
        </>
    );
}

export default Paginator;