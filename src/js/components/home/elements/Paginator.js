import React, {useCallback, useEffect, useState} from 'react';
import {paginateMe} from "../../../paginateMe";
import SingleFund from "./SingleFund";
import {useSelector} from "react-redux";

const Paginator = ({starter}) => {
    const [currList, setCurrList] = useState(starter)
    const [currPage, setCurrPage] = useState([])

    const firstHelpers = useCallback(()=> {
        paginateMe(currList, setCurrPage)
        console.log(currPage, currList)
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
                {/*{new Array()}*/}
            </div>
        </>
    );
}

export default Paginator;