function TemperatureResult(){
    return(
        <div className="result">
                <h5>Resultado da conversão</h5>
                <div className="input-group mb-3">
                    <span style={{width: "100px"}} className="input-group-text">Celcius</span>
                    <input type="text" className="form-control" id="resultCelcius" readOnly="readonly"></input>
                </div>
                <div className="input-group mb-3">
                    <span style={{width: "100px"}} className="input-group-text">Fahrenheit</span>
                    <input type="text" className="form-control" id="resultFahrenheit" readOnly="readonly"></input>
                </div>
                <div className="input-group mb-3">
                    <span style={{width: "100px"}} className="input-group-text">Kelvin</span>
                    <input type="text" className="form-control" id="resultKelvin" readOnly="readonly"></input>
                </div>
            </div>
    );
};

export default TemperatureResult;