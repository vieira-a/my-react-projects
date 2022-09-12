import React from "react";
import HomeHeader from "../components/HomeHeader";
import Cards from "../components/Cards";


function Home() {
    return (
        <>
        <HomeHeader />
        <div className="container p-5 my-5 border">
            <div className="presentation">
                <h2>Sobre</h2>
                <p>
                Um dos principais objetivos desta imersão é introduzir pessoas ao mundo do desenvolvimento web, e acontece no período de 05 a 19 de setembro de 2022. 
                Os projetos ganham mais complexidade com o passar das etapas.
                </p>
                <h4>Tecnologias utilizadas</h4>
                <ul>
                    <li>HML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Bootstrap 5</li>
                </ul>
            </div>
            <div className="projects">
                <h2>Projetos</h2>
                <Cards />
            </div>    
        </div>
        </>
    );
}

export default Home;