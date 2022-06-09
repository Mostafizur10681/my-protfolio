import React from 'react';
import Banner from './Banner';
import HomeAbout from './HomeAbout';
import MyProjects from './MyProjects';
import Services from './Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;