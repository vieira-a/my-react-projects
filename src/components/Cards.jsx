import styles from '../styles/components/Cards.module.sass'

function Cards(){

    const apps = {

        name: "Conversor de temperaturas",
        description: "Você seleciona uma temperatura base para conversão; o aplicativo realiza as conversões e mostra o resultado tem tempo real.",
        url: "/temperature"

    }

    return (
        
        <div className={styles.projectCards}>
            <h5>{apps.name}</h5>
            <div>
                <p>{apps.description}</p>
                <a href={apps.url} className={styles.btns}>Acesse</a>
            </div>
        </div>
    );
};

export default Cards;