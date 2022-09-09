function TemperatureSelect(){
    return(
        <div className="selectTemperature">
                <h5>Selecione a temperatura base</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="celcius"></input>
                    <label className="form-check-label">Celcius</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="fahrenheit"></input>
                    <label className="form-check-label">Fahrenheit</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="kelvin"></input>
                    <label className="form-check-label">Kelvin</label>
                </div>
            </div>
    );
};

export default TemperatureSelect;