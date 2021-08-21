import React from 'react';
import HomeHeader from "./home/HomeHeader";
import HomeInfo from "./home/HomeInfo";
import HomeSteps from "./home/HomeSteps";
import HomeAbout from "./home/HomeAbout";
import HomeHelper from "./home/HomeHelper";
import HomeContact from "./home/HomeContact";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeInfo/>
            <HomeSteps/>
            <HomeAbout/>
            <HomeHelper/>
            <HomeContact/>
        </>
    );
}

export default Home;