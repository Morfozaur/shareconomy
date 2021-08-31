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
            <div className="helper__list">
                {currPage.map(({name, goal, request}) => {
                    return <SingleFund name={name} goal={goal} request={request}/>
                })}
            </div>

            <div className="helper__nav">
                {btns.map(el =>{
                    return <p>penis</p>
                })}
            </div>
        </>
    );
}

export default Paginator;