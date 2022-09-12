function Cards(){

    const apps = {
        name: "Conversor de temperaturas",
        description: "Você seleciona uma temperatura base para conversão; o aplicativo realiza as conversões e mostra o resultado tem tempo real.",
        url: "/temperature"
    }

    return (

        <div className="card">
            <h5 className="card-header">{apps.name}</h5>
            <div className="card-body">
                <p className="card-text">{apps.description}</p>
                <a href={apps.url} className="btn btn-primary">Acesse</a>
            </div>
        </div>
    );
}

export default Cards;