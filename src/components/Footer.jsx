import { IoMailOutline, IoLogoLinkedin } from "react-icons/io5";
import '../styles/components/Footer.module.sass';

function Footer(){
    
    const author = {
        name: 'Anderson Vieira', 
        email: 'malito:asvieira.br@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vieira-a/',
    };

    return (
        
        <footer className="py-4 text-center bg-dark">
        <p>Desenvolvido por {author.name}</p>
        <ul>
            <li>
                <p><a href={author.linkedin}><IoLogoLinkedin/></a></p>
            </li>
            <li>
                <p><a href={author.email}><IoMailOutline/></a></p>
            </li>
        </ul>
        </footer>   

    );
};

export default Footer;