import React, {useEffect, useState} from 'react';
import {paginateMe} from "../../../paginateMe";
import SingleFund from "./SingleFund";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {fetchList} from "../../../redux/actions/allFetchers";

const Paginator = ({active}) => {
    const [dividedList, setDividedList] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [btns, setBtns] = useState([])

    const dispatch = useDispatch();
    const helpers = useSelector(state => state.helpers)
    const currList = useSelector(state => state.currList)

    useEffect(()=> {
        setPageNumber(0);
        dispatch(fetchList(helpers[active]));

    },[dispatch, active, helpers])

    useEffect(()=> {
        paginateMe(currList, setDividedList, setBtns);
    },[currList])

    return (
        <>
            {dividedList.length && <div className="helpers__list">
                {dividedList[pageNumber].map(({name, goal, request}) => {
                    return <SingleFund key={name} name={name} goal={goal} request={request}/>
                })}
            </div>}


            <div className="helpers__nav">
                {btns.length > 1 &&
                    <>
                {btns.map((el, idx) =>{
                    const changePage = () => {
                        setPageNumber(idx)
                    };
                    return <div key={el+idx} className={classNames('helpers__page', {'helpers__choose--active': pageNumber === idx})}
                                onClick={()=>changePage()}>{el}</div>
                })}
                    </>
                }
            </div>

        </>
    );
}

export default Paginator;