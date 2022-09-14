import styles from '../styles/components/TemperatureHeader.module.sass'

function TemperatureHeader(){
    return(

        <div className="container p-4 my-4">
            <h1>Conversor de escalas de Temperaturas</h1>
            <div className={styles.howItWorks}>
                <h4>Como funciona</h4>
                <ul>
                    <li>1. Informe o valor a ser convertido</li>
                    <li>2. Informe a escala base para conversão</li>
                    <li>3. O sistema informará o valor correspondente em cada escala</li>
                </ul>
            </div>
        </div>
    );
    
};

export default TemperatureHeader;