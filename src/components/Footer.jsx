import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <p><NavDropdown.Item href={author.linkedin} target="blank">Linkedin</NavDropdown.Item></p>
                <p><NavDropdown.Item href={author.email}>E-mail</NavDropdown.Item></p>
            </footer>   
        </div>   
    );
};

export default Footer;