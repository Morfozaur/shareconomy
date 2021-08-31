import React, {useCallback, useEffect} from 'react';
import HomeHeader from "./home/HomeHeader";
import HomeInfo from "./home/HomeInfo";
import HomeSteps from "./home/HomeSteps";
import HomeAbout from "./home/HomeAbout";
import HomeHelpers from "./home/HomeHelpers";
import HomeContact from "./home/HomeContact";
import {useHistory} from "react-router-dom";
import {loadData} from "../redux/actions/loadData";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const toLogin = () => {
        history.push('/logowanie')
    };


    useEffect(()=> {
        dispatch(loadData());
    },[dispatch])


    return (
        <>
            <HomeHeader toLogin={toLogin}/>
            <HomeInfo/>
            <HomeSteps toLogin={toLogin}/>
            <HomeAbout/>

            <HomeHelpers/>
            <HomeContact/>
        </>
    );
}

export default Home;