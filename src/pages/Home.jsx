import React from "react";
import HomeHeader from "../components/HomeHeader";
import About from "../components/About";
import Projects from "../components/Projects";
import Stacks from "../components/Stacks";

function Home() {
    return (

        <>
        <HomeHeader />
        <div className="container p-5 my-5 border-0">
        <About/>
        <Stacks/>
        <Projects/>
        </div>
        </>
    );

};

export default Home;