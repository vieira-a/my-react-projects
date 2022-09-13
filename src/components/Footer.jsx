import { IoMailOutline, IoLogoLinkedin } from "react-icons/io5";
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Footer.module.css'

function Footer(){
    
    const author = {
        name: 'Anderson Vieira', 
        email: 'malito:asvieira.br@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vieira-a/',
    };

    return (
        
        <div className="container p-3 my-3 bg-primary text-white">
            <footer className="py-3 my3 text-center">
                <p>Desenvolvido por {author.name}</p>
                <ul className={styles.socialLinks}>
                    <li>
                        <p><NavDropdown.Item href={author.linkedin} target="blank"><IoLogoLinkedin/></NavDropdown.Item></p>
                    </li>
                    <li>
                        <p><NavDropdown.Item href={author.email}><IoMailOutline/></NavDropdown.Item></p>
                    </li>
                </ul>
            </footer>   
        </div>   
    );
};

export default Footer;