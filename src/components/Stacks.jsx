import { IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoJavascript, IoLogoSass } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";

import '../styles/components/Stacks.module.sass'

function Stacks(){
    return(
        <section>
            <h2>Tecnologias utilizadas</h2>
            <p>Além de utilizar os módulos e funcionalidades padrão para execução de projetos em React, pretendo utilizar bibliotecas que auxiliam o desenvolvimento das aplicações com mais agilidade, consistência e organização.</p> 
            <ul>
                <li><IoLogoHtml5/>HML5</li>
                <li><IoLogoCss3/>CSS3</li>
                <li><IoLogoJavascript/>Javascript</li>
                <li><IoLogoReact/>React JS</li>
                <li><BsFillBootstrapFill/>Bootstrap</li>
                <li><IoLogoSass/>Sass</li>
            </ul>
        </section>
    );
};

export default Stacks;