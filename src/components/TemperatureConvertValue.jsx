function TemperatureConvertValue(){

    return(
       
        <div className="container p-2 my-2 border">
            <div className="convertValueContainer">
                <h5>Informe o valor a ser convertido</h5>
                <div className="input-group mb-3">
                    <input onChange={(val) => val.target.value} type="number" className="form-control" id="convertValue" placeholder="ºC, ºF ou ºK"></input>
                </div>
            </div>
        </div>
    );
}

export default TemperatureConvertValue;