import React, { useState , useEffect}  from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { createCar, updateCar } from '../../actions/car';

const CarUpload = ({updateId}) => { 

  const dispatch = useDispatch();
  const [ carData, setCarData] = useState({
    brand: '', model: '', version: '', fuelType: '', engineType: '', comPower: '', comMaxTorque: '', 
    maxPower: '', maxTorque: '', numofElectricEngines: '', traction: '', numofSpeed: '', clutchType: '', 
    topSpeed: '', acceleration: '',batType: '', batCap: '', electricRangeEPA: '', electricRangeWLPT: '',
    chargeTime: '', fastChargeTime: '', co2EmissionWLTP: '', body: '', numofdoors: '',
    wheelbase: '', length: '', width: '', height: '', frontAxle: '', 
    rearAxle: '', numofSeats: '', frontBrakes: '', rearBreaks: '', frontTyres: '', rearTyres: '',
    curbWeight: '', maxTowCap: '', weightPower: '', trunkCap: '', frontSus: '', rearSus: '',
    price: '', summmary: '', releaseDate: '', 
    selectedFileA: '', selectedFileB: '', selectedFileC: '',
  });
  const car = useSelector((state) => (updateId ? state.cars.find((c) => c._id === updateId) : null));
  console.log(car);
  console.log(updateId);

  useEffect(() => {
    if (car) setCarData(car);
  }, [car]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateId === 0) {
      dispatch(createCar(carData));
    } else {
      dispatch(updateCar(updateId, carData));
    }
  }
  return (
    <section className="section container">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" id="brand" value={carData.brand} onChange={(e) => setCarData({ ...carData, brand: e.target.value })}/>
          <label htmlFor="brand"> Brand </label>
        </div>
        <div className="input-field">
          <input type="text" id="model" value={carData.model} onChange={(e) => setCarData({ ...carData, model: e.target.value })}/>
          <label htmlFor="model"> Model </label>
        </div>
        <div className="input-field">
          <input type="text" id="version" value={carData.version} onChange={(e) => setCarData({ ...carData, version: e.target.value })}/>
          <label htmlFor="version"> Version </label>
        </div>
        <div className="input-field">
          <input type="text" id="fuelType" value={carData.fuelType} onChange={(e) => setCarData({ ...carData, fuelType: e.target.value })}/>
          <label htmlFor="fuelType"> Fuel Type </label>
        </div>
        <div className="input-field">
          <input type="text" id="engineType" value={carData.engineType} onChange={(e) => setCarData({ ...carData, engineType: e.target.value })}/>
          <label htmlFor="engineType"> Engine Type </label>
        </div>
        <div className="input-field">
          <input type="text" id="comPower" value={carData.comPower} onChange={(e) => setCarData({ ...carData, comPower: e.target.value })}/>
          <label htmlFor="comPower"> Combined Power </label>
        </div>
        <div className="input-field">
          <input type="text" id="comMaxTorque" value={carData.comMaxTorque} onChange={(e) => setCarData({ ...carData, comMaxTorque: e.target.value })}/>
          <label htmlFor="comMaxTorque"> Combined Max. Torque </label>
        </div>
        <div className="input-field">
          <input type="text" id="maxPower" value={carData.maxPower} onChange={(e) => setCarData({ ...carData, maxPower: e.target.value })}/>
          <label htmlFor="maxPower"> maxPower </label>
        </div>
        <div className="input-field">
          <input type="text" id="maxTorque" value={carData.maxTorque} onChange={(e) => setCarData({ ...carData, maxTorque: e.target.value })}/>
          <label htmlFor="maxTorque"> maxTorque </label>
        </div>
        <div className="input-field">
          <input type="text" id="numofElectricEngines" value={carData.numofElectricEngines} onChange={(e) => setCarData({ ...carData, numofElectricEngines: e.target.value })}/>
          <label htmlFor="numofElectricEngines"> numofElectricEngines </label>
        </div>
        <div className="input-field">
          <input type="text" id="traction" value={carData.traction} onChange={(e) => setCarData({ ...carData, traction: e.target.value })}/>
          <label htmlFor="traction"> traction </label>
        </div>
        <div className="input-field">
          <input type="text" id="numofSpeed" value={carData.numofSpeed} onChange={(e) => setCarData({ ...carData, numofSpeed: e.target.value })}/>
          <label htmlFor="numofSpeed"> numofSpeed </label>
        </div>
        <div className="input-field">
          <input type="text" id="clutchType" value={carData.clutchType} onChange={(e) => setCarData({ ...carData, clutchType: e.target.value })}/>
          <label htmlFor="clutchType"> clutchType </label>
        </div>
        <div className="input-field">
          <input type="text" id="topSpeed" value={carData.topSpeed} onChange={(e) => setCarData({ ...carData, topSpeed: e.target.value })}/>
          <label htmlFor="topSpeed"> topSpeed </label>
        </div>
        <div className="input-field">
          <input type="text" id="acceleration" value={carData.acceleration} onChange={(e) => setCarData({ ...carData, acceleration: e.target.value })}/>
          <label htmlFor="acceleration"> acceleration </label>
        </div>
        <div className="input-field">
          <input type="text" id="batType" value={carData.batType} onChange={(e) => setCarData({ ...carData, batType: e.target.value })}/>
          <label htmlFor="batType"> batType </label>
        </div>
        <div className="input-field">
          <input type="text" id="batCap" value={carData.batCap} onChange={(e) => setCarData({ ...carData, batCap: e.target.value })}/>
          <label htmlFor="batCap"> batCap </label>
        </div>
        <div className="input-field">
          <input type="text" id="electricRangeEPA" value={carData.electricRangeEPA} onChange={(e) => setCarData({ ...carData, electricRangeEPA: e.target.value })}/>
          <label htmlFor="electricRangeEPA"> electricRangeEPA </label>
        </div>
        <div className="input-field">
          <input type="text" id="electricRangeWLPT" value={carData.electricRangeWLPT} onChange={(e) => setCarData({ ...carData, electricRangeWLPT: e.target.value })}/>
          <label htmlFor="electricRangeWLPT"> electricRangeWLPT </label>
        </div>
        <div className="input-field">
          <input type="text" id="chargeTime" value={carData.chargeTime} onChange={(e) => setCarData({ ...carData, chargeTime: e.target.value })}/>
          <label htmlFor="chargeTime"> chargeTime </label>
        </div>
        <div className="input-field">
          <input type="text" id="fastChargeTime" value={carData.fastChargeTime} onChange={(e) => setCarData({ ...carData, fastChargeTime: e.target.value })}/>
          <label htmlFor="fastChargeTime"> fastChargeTime </label>
        </div>
        <div className="input-field">
          <input type="text" id="co2EmissionWLTP" value={carData.co2EmissionWLTP} onChange={(e) => setCarData({ ...carData, co2EmissionWLTP: e.target.value })}/>
          <label htmlFor="co2EmissionWLTP"> co2 Emission WLTP </label>
        </div>
        <div className="input-field">
          <input type="text" id="body" value={carData.body} onChange={(e) => setCarData({ ...carData, body: e.target.value })}/>
          <label htmlFor="body"> body </label>
        </div>
        <div className="input-field">
          <input type="text" id="numofdoors" value={carData.numofdoors} onChange={(e) => setCarData({ ...carData, numofdoors: e.target.value })}/>
          <label htmlFor="numofdoors"> numofdoors </label>
        </div>
        <div className="input-field">
          <input type="text" id="wheelbase" value={carData.wheelbase} onChange={(e) => setCarData({ ...carData, wheelbase: e.target.value })}/>
          <label htmlFor="wheelbase"> wheelbase </label>
        </div>
        <div className="input-field">
          <input type="text" id="length" value={carData.length} onChange={(e) => setCarData({ ...carData, length: e.target.value })}/>
          <label htmlFor="length"> length </label>
        </div>
        <div className="input-field">
          <input type="text" id="width" value={carData.width} onChange={(e) => setCarData({ ...carData, width: e.target.value })}/>
          <label htmlFor="width"> width </label>
        </div>
        <div className="input-field">
          <input type="text" id="height" value={carData.height} onChange={(e) => setCarData({ ...carData, height: e.target.value })}/>
          <label htmlFor="height"> height </label>
        </div>
        <div className="input-field">
          <input type="text" id="frontAxle" value={carData.frontAxle} onChange={(e) => setCarData({ ...carData, brand: e.target.value })}/>
          <label htmlFor="frontAxle"> frontAxle </label>
        </div>
        <div className="input-field">
          <input type="text" id="rearAxle" value={carData.rearAxle} onChange={(e) => setCarData({ ...carData, rearAxle: e.target.value })}/>
          <label htmlFor="rearAxle"> rearAxle </label>
        </div>
        <div className="input-field">
          <input type="text" id="numofSeats" value={carData.numofSeats} onChange={(e) => setCarData({ ...carData, numofSeats: e.target.value })}/>
          <label htmlFor="numofSeats"> numofSeats </label>
        </div>
        <div className="input-field">
          <input type="text" id="frontBrakes" value={carData.frontBrakes} onChange={(e) => setCarData({ ...carData, frontBrakes: e.target.value })}/>
          <label htmlFor="frontBrakes"> frontBrakes </label>
        </div>
        <div className="input-field">
          <input type="text" id="rearBreaks" value={carData.rearBreaks} onChange={(e) => setCarData({ ...carData, rearBreaks: e.target.value })}/>
          <label htmlFor="rearBreaks"> rearBreaks </label>
        </div>
        <div className="input-field">
          <input type="text" id="frontTyres" value={carData.frontTyres} onChange={(e) => setCarData({ ...carData, frontTyres: e.target.value })}/>
          <label htmlFor="frontTyres"> frontTyres </label>
        </div>
        <div className="input-field">
          <input type="text" id="rearTyres" value={carData.rearTyres} onChange={(e) => setCarData({ ...carData, rearTyres: e.target.value })}/>
          <label htmlFor="rearTyres"> rearTyres </label>
        </div>
        <div className="input-field">
          <input type="text" id="curbWeight" value={carData.curbWeight} onChange={(e) => setCarData({ ...carData, curbWeight: e.target.value })}/>
          <label htmlFor="curbWeight"> curbWeight </label>
        </div>
        <div className="input-field">
          <input type="text" id="maxTowCap" value={carData.maxTowCap} onChange={(e) => setCarData({ ...carData, maxTowCap: e.target.value })}/>
          <label htmlFor="maxTowCap"> maxTowCap </label>
        </div>
        <div className="input-field">
          <input type="text" id="weightPower" value={carData.weightPower} onChange={(e) => setCarData({ ...carData, weightPower: e.target.value })}/>
          <label htmlFor="weightPower"> weightPower </label>
        </div>
        <div className="input-field">
          <input type="text" id="trunkCap" value={carData.trunkCap} onChange={(e) => setCarData({ ...carData, trunkCap: e.target.value })}/>
          <label htmlFor="trunkCap"> trunkCap </label>
        </div>
        <div className="input-field">
          <input type="text" id="frontSus" value={carData.frontSus} onChange={(e) => setCarData({ ...carData, frontSus: e.target.value })}/>
          <label htmlFor="frontSus"> frontSus </label>
        </div>
        <div className="input-field">
          <input type="text" id="rearSus" value={carData.rearSus} onChange={(e) => setCarData({ ...carData, rearSus: e.target.value })}/>
          <label htmlFor="rearSus"> rearSus </label>
        </div>
        <div className="input-field">
          <input type="text" id="price" value={carData.price} onChange={(e) => setCarData({ ...carData, price: e.target.value })}/>
          <label htmlFor="price"> price </label>
        </div>
        <div className="input-field">
          <input type="text" id="summmary" value={carData.summmary} onChange={(e) => setCarData({ ...carData, summmary: e.target.value })}/>
          <label htmlFor="summmary"> summmary </label>
        </div>
        <div className="input-field">
          <input type="date" id="releaseDate" value={carData.releaseDate} onChange={(e) => setCarData({ ...carData, releaseDate: e.target.value })}/>
          <label htmlFor="releaseDate"> releaseDate </label>
        </div>
        <FileBase type="file" multiple={false} onDone={(base64) => setCarData({ ...carData, selectedFileA: base64})} />
        <FileBase type="file" multiple={false} onDone={(base64) => setCarData({ ...carData, selectedFileB: base64})} />
        <FileBase type="file" multiple={false} onDone={(base64) => setCarData({ ...carData, selectedFileC: base64})} />

        <button className="btn" type="submit"> Upload </button>
      </form>
    </section>
  )
}

export default CarUpload;