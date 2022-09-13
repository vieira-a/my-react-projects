import React from "react";
import HomeHeader from "../components/HomeHeader";
import Cards from "../components/Cards";
import About from "../components/About";

function Home() {
    return (
        <>
        <HomeHeader />
        <div className="container p-5 my-5 border">
        <About/>
        <div className="projects">    
            <h3>Projetos</h3>
            <p></p>
                <Cards />
            </div>    
        </div>
        </>
    );
}

export default Home;