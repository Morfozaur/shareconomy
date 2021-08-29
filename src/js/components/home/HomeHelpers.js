import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {fetchLists} from "../../redux/actions/fetchLists";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import {fetchFoundations, fetchFundraisers, fetchOrganisations} from "../../redux/actions/allFetchers";
import {isLogged} from "../../redux/reducers/isLogged";


const HomeHelpers = () => {

    const dispatch = useDispatch();

    const fetchLists = async () => {
        await getDocs(collection(db, 'foundations'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchFoundations(data));
            })

        await getDocs(collection(db, 'fundraisings'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchFundraisers(data));
            })

        await getDocs(collection(db, 'organisations'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchOrganisations(data));
            })
    }


        const login = useSelector(state => state.isLogged)
        const foundations = useSelector(state => state.foundations)
    const fundraisers = useSelector(state => state.fundraisers)
    const organisations = useSelector(state => state.organisations)

    useEffect(()=> {
        fetchLists()
    },[])

    // console.log(foundations)
    return (
        <section className='helpers'>
            <p onClick={()=>console.log(foundations, fundraisers, organisations)}>HELPERS</p>
            {/*{foundations.map(el => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*        <h2>{el.name}</h2>*/}
            {/*        <p>{el.goal}</p>*/}
            {/*        <strong>{el.request}</strong>*/}
            {/*        </>*/}
            {/*    )*/}
            {/*})}*/}
            <p>HELPERS</p>

            <p>HELPERS</p>


        </section>
    );
}

export default HomeHelpers;