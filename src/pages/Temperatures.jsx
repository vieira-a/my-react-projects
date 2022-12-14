import React, { useState } from "react";
import TemperatureHeader from "../components/TemperatureHeader";

function TemperatureConverter() {

    const [valueConvert, setValueConvert] = useState(''); //pega a temperatura para converter
    const [temperatureSelect, setTemperatureSelect] = useState('') //seleciona a temperatura base para conversão

    let convertedFahreheit = '';
    let convertedCelcius = '';
    let convertedKelvin = '';

    const calculateValue = () => {
        if(temperatureSelect === 'fahrenheit'){
            fahrenheitToCelcius();
            fahrenheitToKelvin();
        };

        if(temperatureSelect === 'celcius'){
            celciusToFahrenheit();
            celciusToKelvin();
        };

        if(temperatureSelect === 'kelvin'){
            kelvinToCelcius();
            kelvinToFahrenheit();
        };
    }

    calculateValue()
    
    function celciusToFahrenheit(){
        convertedCelcius = Number(valueConvert);
        convertedFahreheit = ((Number(valueConvert) * 9/5) + 32).toFixed(2);
    };

    function celciusToKelvin() {
        convertedCelcius = Number(valueConvert);
        convertedKelvin = (Number(valueConvert) + 273.15).toFixed(2);
    };

    function fahrenheitToCelcius(){
        convertedFahreheit = Number(valueConvert);
        convertedCelcius = ((Number(valueConvert) - 32) * 5/9).toFixed(2);
    };

    function fahrenheitToKelvin() {
        convertedFahreheit = Number(valueConvert);
        convertedKelvin = ((Number(valueConvert) - 32) * 5/9 + 273.15).toFixed(2);
    };

    function kelvinToCelcius(){
        convertedKelvin = Number(valueConvert);
        convertedCelcius = (Number(valueConvert) - 273.15).toFixed(2);    
    };

    function kelvinToFahrenheit(){
        convertedKelvin = Number(valueConvert);
        convertedFahreheit = ((Number(valueConvert) - 273) * 1.8 + 32).toFixed(2);
    };

    return(
        <> 
        <TemperatureHeader/>
        <div className="container p-4 my-4">
            <section>
                <h5>Informe o valor a ser convertido</h5>
                <div className="input-group mb-2 my-4">
                    <input type="number" className="form-control" id="convertValue" placeholder="ºC, ºF ou ºK" name="temperature" onChange={(e) => setValueConvert(e.target.value)} value={valueConvert}></input>
                </div>
            </section>
            
            <section>
                <h5>Selecione a temperatura base</h5>
                <div className="form-check mb-2 my-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="celcius" onClick={(e)=> setTemperatureSelect(e.target.value)}></input>
                    <label className="form-check-label">Celcius</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="fahrenheit" onClick={(e)=> setTemperatureSelect(e.target.value)}></input>
                    <label className="form-check-label">Fahrenheit</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="kelvin" onClick={(e)=> setTemperatureSelect(e.target.value)}></input>
                    <label className="form-check-label">Kelvin</label>
                </div>
            </section>
            <section>
                <h5>Resultado da conversão</h5>
                <div className="input-group mb-3 my-4">
                    <span style={{width: "100px"}} className="input-group-text">Celcius</span>
                    <input type="text" className="form-control" name="resultCelcius" readOnly="readonly" value={convertedCelcius}></input>
                </div>
                <div className="input-group mb-3 my-4">
                    <span style={{width: "100px"}} className="input-group-text">Fahrenheit</span>
                    <input type="text" className="form-control" name="resultFahrenheit" readOnly="readonly" value={convertedFahreheit}></input>
                </div>
                <div className="input-group mb-3 my-4">
                    <span style={{width: "100px"}} className="input-group-text">Kelvin</span>
                    <input type="text" className="form-control" name="resultKelvin" readOnly="readonly" value={convertedKelvin}></input>
                </div>
            </section>
        </div>
        </>
    );  
};

export default TemperatureConverter;
