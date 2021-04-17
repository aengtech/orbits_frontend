import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Specs = () => {
  const { id } = useParams();
  console.log(id);

  const cars = useSelector((state) => state.cars);
  const singleCars = cars.filter((car) => car._id.toLowerCase() === id.toLowerCase());

  return (
    <section className="section specs row">
      <div className="container">
        <div className="img-carousel container">
        </div>
        <div className="specfications">
          <h4> here are the specifications of { singleCars[0].brand } { singleCars[0].model } { singleCars[0].version } Data </h4>

        </div>

        <table>
          <thead>
            <tr>
              <th className="col s5 m5 l4"> Specifications </th>
              <th className="col s7 m7 l8"> { singleCars[0].brand } </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="col s5 m5 l4"> Model </td>
              <td className="col s7 m7 l8"> { singleCars[0].model } { singleCars[0].version } </td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Fuel Type </td>
              <td className="col s7 m7 l8"> { singleCars.fuelType ? <p> { singleCars[0].fuelType} </p> :  'Fuel Type'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> engine Type </td>
              <td className="col s7 m7 l8"> { singleCars.engineType ? <p> { singleCars[0].engineType} </p> :  'Engine Type'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Combined Power </td>
              <td className="col s7 m7 l8"> { singleCars.comMaxTorque ? <p> { singleCars[0].comMaxTorque} </p> :  'Combined Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Combined Max. Torque </td>
              <td className="col s7 m7 l8"> { singleCars.comMaxTorque ? <p> { singleCars[0].comMaxTorque} </p> :  'Combined Max. Torque'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Max. Power </td>
              <td className="col s7 m7 l8"> { singleCars.maxPower ? <p> { singleCars[0].maxPower} </p> :  'Max. Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Max. Torque </td>
              <td className="col s7 m7 l8"> { singleCars.maxTorque ? <p> { singleCars[0].maxTorque} </p> :  'Max. Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of Electric Engines </td>
              <td className="col s7 m7 l8"> { singleCars.maxTorque ? <p> { singleCars[0].maxTorque} </p> :  'Number of Electric Engines'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Traction </td>
              <td className="col s7 m7 l8"> { singleCars.traction ? <p> { singleCars[0].traction} </p> :  'Traction'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of Speed </td>
              <td className="col s7 m7 l8"> { singleCars.numofSpeed ? <p> { singleCars[0].numofSpeed} </p> :  'Number of Speed'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Clutch Type </td>
              <td className="col s7 m7 l8"> { singleCars.clutchType ? <p> { singleCars[0].clutchType} </p> :  'Clutch Type'  }</td>
            </tr>
            </tbody>
            </table>

            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4"> Performance </h5>
            <hr/>
            
            <table>
            <tbody>
            <tr>
              <td className="col s2 m2 l3"> top Speed </td>
              <td className="col s7 m7 l8"> { singleCars.topSpeed ? <p> { singleCars[0].topSpeed} </p> :  'Top Speed'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Acceleration </td>
              <td className="col s7 m7 l8"> { singleCars.acceleration ? <p> { singleCars[0].acceleration} </p> :  'Acceleration'  }</td>
            </tr>
            </tbody>
            </table>


            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4"> Battery Technical Data, Charging and Range </h5>
            <hr/>

            <table>
            <tbody>
            <tr>
              <td className="col s2 m2 l3"> Battery Type </td>
              <td className="col s7 m7 l8"> { singleCars.batType ? <p> { singleCars[0].batType} </p> :  'Battery Type'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Battery Capacity </td>
              <td className="col s7 m7 l8"> { singleCars.batCap ? <p> { singleCars[0].batCap} </p> :  'Battery Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Electric Range EPA </td>
              <td className="col s7 m7 l8"> { singleCars.electricRangeEPA ? <p> { singleCars[0].electricRangeEPA} </p> :  'Electric Range EPA'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Electric Range WLPT </td>
              <td className="col s7 m7 l8"> { singleCars.electricRangeWLPT ? <p> { singleCars[0].electricRangeWLPT} </p> :  'Electric Range WLPT'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Charge Time </td>
              <td className="col s7 m7 l8"> { singleCars.chargeTime ? <p> { singleCars[0].chargeTime} </p> :  'Charge Time'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Fast Charge Time </td>
              <td className="col s7 m7 l8"> { singleCars.fastChargeTime ? <p> { singleCars[0].fastChargeTime} </p> :  'Fast Charge Time'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> co2 Emission WLTP </td>
              <td className="col s7 m7 l8"> { singleCars.co2EmissionWLTP ? <p> { singleCars[0].co2EmissionWLTP} </p> :  'co2 Emission WLTP'  }</td>
            </tr>
            </tbody>
            </table>


            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4">Size Dimension Aerodynamics and Weight </h5>
            <hr/>

            <table>
            <tbody>
            <tr>
              <td className="col s2 m2 l3"> Body </td>
              <td className="col s7 m7 l8"> { singleCars.body ? <p> { singleCars[0].body} </p> :  'Body'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of doors </td>
              <td className="col s7 m7 l8"> { singleCars.numofdoors ? <p> { singleCars[0].numofdoors} </p> :  'Number of doors'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Wheelbase </td>
              <td className="col s7 m7 l8"> { singleCars.wheelbase ? <p> { singleCars[0].wheelbase} </p> :  'Wheelbase'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Length </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].length} </p> :  'Length'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Width </td>
              <td className="col s7 m7 l8"> { singleCars.width ? <p> { singleCars[0].width} </p> :  'Width'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Height </td>
              <td className="col s7 m7 l8"> { singleCars.height ? <p> { singleCars[0].height} </p> :  'Height'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Axle </td>
              <td className="col s7 m7 l8"> { singleCars.frontAxle ? <p> { singleCars[0].frontAxle} </p> :  'Front Axle'  }</td>
            </tr>
            <tr>
              <td className="col s2 m2 l3"> Rear Axle </td>
              <td className="col s7 m7 l8"> { singleCars.rearAxle ? <p> { singleCars[0].rearAxle} </p> :  'Rear Axle'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of Seats </td>
              <td className="col s7 m7 l8"> { singleCars.numofSeats ? <p> { singleCars[0].numofSeats} </p> :  'Number of Seats'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Brakes </td>
              <td className="col s7 m7 l8"> { singleCars.frontBrakes ? <p> { singleCars[0].frontBrakes} </p> :  'Front Brakes'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Rear Breaks </td>
              <td className="col s7 m7 l8"> { singleCars.rearBreaks ? <p> { singleCars[0].rearBreaks} </p> :  'Rear Breaks'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Tyres </td>
              <td className="col s7 m7 l8"> { singleCars.frontTyres ? <p> { singleCars[0].frontTyres} </p> :  'Front Tyres'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Rear Tyres </td>
              <td className="col s7 m7 l8"> { singleCars.rearTyres ? <p> { singleCars[0].rearTyres} </p> :  'Rear Tyres'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Curb Weight </td>
              <td className="col s7 m7 l8"> { singleCars.curbWeight ? <p> { singleCars[0].curbWeight} </p> :  'Curb Weight'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Max. Tow Capacity </td>
              <td className="col s7 m7 l8"> { singleCars.maxTowCap ? <p> { singleCars[0].maxTowCap} </p> :  'Max. Tow Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Weight Power </td>
              <td className="col s7 m7 l8"> { singleCars.weightPower ? <p> { singleCars[0].weightPower} </p> :  'Weight Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Trunk Capacity </td>
              <td className="col s7 m7 l8"> { singleCars.trunkCap ? <p> { singleCars[0].trunkCap} </p> :  'Trunk Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Suspension </td>
              <td className="col s7 m7 l8"> { singleCars.frontSus ? <p> { singleCars[0].frontSus} </p> :  'Front Suspension'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Rear Suspension </td>
              <td className="col s7 m7 l8"> { singleCars.rearSus ? <p> { singleCars[0].rearSus} </p> :  'Rear Suspension'  }</td>
            </tr>
            </tbody>
            </table>

            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4"> Others </h5>
            <hr/>

            <table>
            <tbody>
            <tr>
              <td className="col s2 m2 l3"> summmary </td>
              <td className="col s7 m7 l8"> { singleCars.summmary ? <p> { singleCars[0].summmary} </p> :  'summmary'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Release Date </td>
              <td className="col s7 m7 l8"> { singleCars.releaseDate ? <p> { singleCars[0].releaseDate} </p> :  'Release Date'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Price </td>
              <td className="col s7 m7 l8"> { singleCars.price ? <p> { singleCars[0].price} </p> :  'Price'  }</td>
            </tr>            
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Specs 
