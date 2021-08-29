import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadData} from "../../redux/actions/loadData";
// import {isLogged} from "../../redux/reducers/isLogged";


const HomeHelpers = () => {

    const dispatch = useDispatch();

    // const login = useSelector(state => state.isLogged)
    const foundations = useSelector(state => state.foundations)
    const fundraisers = useSelector(state => state.fundraisers)
    const organisations = useSelector(state => state.organisations)

    useEffect(()=> {
        dispatch(loadData())
    },[dispatch])

    return (
        <section className='helpers'>
            <p>HELPERS</p>
            {foundations.map(({name, goal, request}) => {
                return (
                    <div className='helpers__single' key={name}>
                        <h2>{name}</h2>
                        <p>{goal}</p>
                        <strong>{request}</strong>
                    </div>
                )
            })}
            <p>HELPERS</p>

            <p>HELPERS</p>


        </section>
    );
}

export default HomeHelpers;