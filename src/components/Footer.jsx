function Footer(){
    
    const author = {
        name: 'Anderson Vieira', 
        email: 'asvieira.br@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vieira-a/',
    }

    return (
        
        <div className="container p-3 my-3 bg-primary text-white">
            <footer className="py-3 my3">
                <p className="text-center">Feito por {author.name}</p>
                
            </footer>   
        </div>
        
    )
}

export default Footer;