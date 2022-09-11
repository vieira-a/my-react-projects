import React from "react";
import TemperatureHeader from "../components/TemperatureHeader";
import TemperatureConvertValue from "../components/TemperatureConvertValue";
import TemperatureSelect from "../components/TemperatureSelect";
import TemperatureResult from "../components/TemperatureResult";

function TemperatureConverter() {
    return(
        <div>
            <TemperatureHeader/>
            <div className="container p-5 my-5 border">
            <TemperatureConvertValue/>
            <TemperatureSelect/>
            <TemperatureResult/></div>
        </div>
    );   
}

let temperatureToConvert = 0;
let selectTemperature = 'celcius';
let tempResult = 0;

window.onload = function(){ 
    
    function getValueToConvert(){
        document.getElementById('convertValue').addEventListener('change', function () {
            temperatureToConvert = Number(document.getElementById('convertValue').value)
            console.log(temperatureToConvert)
        })
    }
    
    function getBaseTemperature(){
        if(document.getElementById('celcius').addEventListener('click', ()=>{
            selectTemperature = 'celcius';
            console.log(selectTemperature)
            celciusToFahrenheit()
            celciusToKelvin()
        })){
    
        } else if(document.getElementById('fahrenheit').addEventListener('click', ()=>{
            selectTemperature = 'fahrenheit';
            console.log(selectTemperature)
            fahrenheitToCelcius()
            fahrenheitToKelvin()
        })) {
    
        } else if(document.getElementById('kelvin').addEventListener('click', ()=>{
            selectTemperature = 'kelvin';
            console.log(selectTemperature)
            kelvinToCelcius()
            kelvinToFahrenheit()
        })){
        }
    }
    /**
    * Calculate conversion
    * 
    * °C => °F - (°C × 9/5) + 32 = °F
    */
    function celciusToFahrenheit(){
        document.getElementById('resultCelcius').value = `${temperatureToConvert} °C`;
        tempResult = ((temperatureToConvert * 9/5) + 32).toFixed(2);
        document.getElementById('resultFahrenheit').value = `${tempResult} °F`
    }
    /** °C => °K - C + 273,15 = K
     */
    function celciusToKelvin() {
        document.getElementById('resultCelcius').value = `${temperatureToConvert} °C`;
        tempResult = (temperatureToConvert + 273.15).toFixed(2)
        document.getElementById('resultKelvin').value = `${tempResult} °K`;
    }
    /** °F => °C - (°F − 32) × 5/9 = °C
     */
    function fahrenheitToCelcius() {
        document.getElementById('resultFahrenheit').value = `${temperatureToConvert} °F`;
        tempResult = ((temperatureToConvert - 32) * 5/9).toFixed(2);
        document.getElementById('resultCelcius').value = `${tempResult} °C`;
    }
    /** °F => °K - (°F − 32) × 5/9 + 273,15 = K
     */
    function fahrenheitToKelvin() {
        document.getElementById('resultFahrenheit').value = `${temperatureToConvert} °F`;
        tempResult = ((temperatureToConvert - 32) * 5/9 + 273.15).toFixed(2);
        document.getElementById('resultKelvin').value = `${tempResult} °K`
    }
    /** °K => °C - 273,15 = °C
     */
    function kelvinToCelcius() {
        document.getElementById('resultKelvin').value = `${temperatureToConvert} °K`;
        tempResult = (temperatureToConvert - 273.15).toFixed(2);
        document.getElementById('resultCelcius').value = `${tempResult} °C`
    }
    /** °K => °F - (K − 273,15) × 9/5 + 32 = °F
     */
    function kelvinToFahrenheit() {
        document.getElementById('resultKelvin').value = `${temperatureToConvert} °K`;
        tempResult = ((temperatureToConvert - 273.15) * 9/5 + 32).toFixed(2);
        document.getElementById('resultFahrenheit').value = `${tempResult} °F`
    }
    getValueToConvert();
    getBaseTemperature();
    
}
export default TemperatureConverter
