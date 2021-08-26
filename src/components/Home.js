import React from 'react';
import HomeHeader from "./home/HomeHeader";
import HomeInfo from "./home/HomeInfo";
import HomeSteps from "./home/HomeSteps";
import HomeAbout from "./home/HomeAbout";
import HomeHelpers from "./home/HomeHelpers";
import HomeContact from "./home/HomeContact";
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory()

    const toLogin = () => {
        history.push('/logowanie')
    };

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