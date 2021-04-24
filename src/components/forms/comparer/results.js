import React from 'react';
import {useSelector} from 'react-redux';

const Results = ({currentId, currentIdd}) => {
  
  const cars = useSelector(state => state.cars);

  const carA = cars.filter((car) => car._id.toLowerCase() === currentId);
  const carB = cars.filter((car) => car._id.toLowerCase() === currentIdd);

  console.log(carA);

  return (
    <section className="section results row">
      <hr/>
      <h5 className="pad transparent z-depth-2 indigo-text">Technical Data </h5>
      <hr/>

      <table className="striped">
          <thead>
            <tr className="">
              <th className="col s2 m2 l3"> <i className="material-icons indigo-text text-lighten-3 ">toys</i> </th>
              <th className="col s5 m5 l4 indigo-text text-darken-4"> Car A </th>
              <th className="col s5 m5 l4 indigo-text text-darken-4"> Car B </th>
            </tr>
          </thead>

          <tbody className=" brown-text text-darken-4">
            <tr>
              <td className="col s2 m2 l3"> Brand: </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].brand} </p> :  'Brand'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].brand} </p> :  'Brand'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Model </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].model} { carA[0].version} </p> :  'Model' } </td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].model} { carB[0].version} </p> :  'Model' } </td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Fuel Type </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].fuelType} </p> :  'Fuel Type'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].fuelType} </p> :  'Fuel Type'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> engine Type </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].engineType} </p> :  'Engine Type'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].engineType} </p> :  'Engine Type'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Combined Power </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].comMaxTorque} </p> :  'Combined Power'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].comMaxTorque} </p> :  'Combined Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Combined Max. Torque </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].comMaxTorque} </p> :  'Combined Max. Torque'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].comMaxTorque} </p> :  'Combined Max. Torque'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Max. Power </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].maxPower} </p> :  'Max. Power'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].maxPower} </p> :  'Max. Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Max. Torque </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].maxTorque} </p> :  'Max. Power'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB [0].maxTorque} </p> :  'Max. Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of Electric Engines </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].maxTorque} </p> :  'Number of Electric Engines'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].maxTorque} </p> :  'Number of Electric Engines'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Traction </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].traction} </p> :  'Traction'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].traction} </p> :  'Traction'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of Speed </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].numofSpeed} </p> :  'Number of Speed'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].numofSpeed} </p> :  'Number of Speed'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Clutch Type </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].clutchType} </p> :  'Clutch Type'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].clutchType} </p> :  'Clutch Type'  }</td>
            </tr>
            </tbody>
            </table>

            <hr/>
            <h5 className="pad transparent z-depth-2 indigo-text"> Performance <i className="material-icons black-text">traffic</i></h5>
            <hr/>
            
            <table className="striped brown-text text-darken-3">
            <tbody>
            <tr>
              <td className="col s2 m2 l3"> top Speed </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].topSpeed} </p> :  'Top Speed'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].topSpeed} </p> :  'Top Speed'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Acceleration </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].acceleration} </p> :  'Acceleration'  }</td>
              <td className="col s5 m5 l4"> { carB.acceleration ? <p> { carB[0].acceleration} </p> :  'Acceleration'  }</td>
            </tr>
            </tbody>
            </table>


            <hr/>
            <h5 className=" pad transparent z-depth-2 indigo-text"> Battery Technical Data, Charging and Range <i className="material-icons black-text">settings_input_component</i></h5>
            <hr/>

            <table className="striped  brown-text text-darken-4">
            <tbody>
            <tr>
              <td className="col s2 m2 l3"> Battery Type </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].batType} </p> :  'Battery Type'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].batType} </p> :  'Battery Type'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Battery Capacity </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].batCap} </p> :  'Battery Capacity'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].batCap} </p> :  'Battery Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Electric Range EPA </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].electricRangeEPA} </p> :  'Electric Range EPA'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].electricRangeEPA} </p> :  'Electric Range EPA'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Electric Range WLPT </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].electricRangeWLPT} </p> :  'Electric Range WLPT'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].electricRangeWLPT} </p> :  'Electric Range WLPT'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Charge Time </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].chargeTime} </p> :  'Charge Time'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].chargeTime} </p> :  'Charge Time'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Fast Charge Time </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].fastChargeTime} </p> :  'Fast Charge Time'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].fastChargeTime} </p> :  'Fast Charge Time'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> co2 Emission WLTP </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].co2EmissionWLTP} </p> :  'co2 Emission WLTP'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].co2EmissionWLTP} </p> :  'co2 Emission WLTP'  }</td>
            </tr>
            </tbody>
            </table>


            <hr/>
            <h5 className="pad transparent z-depth-2 indigo-text">Size Dimension Aerodynamics and Weight <i className="material-icons black-text">select_all</i></h5>
            <hr/>

            <table className="brown-text text-darken-4">
            <tbody className="striped">
            <tr>
              <td className="col s2 m2 l3"> Body </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].body} </p> :  'Body'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].body} </p> :  'Body'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of doors </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].numofdoors} </p> :  'Number of doors'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].numofdoors} </p> :  'Number of doors'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Wheelbase </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].wheelbase} </p> :  'Wheelbase'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].wheelbase} </p> :  'Wheelbase'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Length </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].length} </p> :  'Length'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].length} </p> :  'Length'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Width </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].width} </p> :  'Width'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].width} </p> :  'Width'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Height </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].height} </p> :  'Height'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].height} </p> :  'Height'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Axle </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].frontAxle} </p> :  'Front Axle'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].frontAxle} </p> :  'Front Axle'  }</td>
            </tr>
            <tr>
              <td className="col s2 m2 l3"> Rear Axle </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].rearAxle} </p> :  'Rear Axle'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].rearAxle} </p> :  'Rear Axle'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Number of Seats </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].numofSeats} </p> :  'Number of Seats'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].numofSeats} </p> :  'Number of Seats'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Brakes </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].frontBrakes} </p> :  'Front Brakes'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].frontBrakes} </p> :  'Front Brakes'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Rear Breaks </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].rearBreaks} </p> :  'Rear Breaks'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].rearBreaks} </p> :  'Rear Breaks'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Tyres </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].frontTyres} </p> :  'Front Tyres'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].frontTyres} </p> :  'Front Tyres'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Rear Tyres </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].rearTyres} </p> :  'Rear Tyres'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].rearTyres} </p> :  'Rear Tyres'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Curb Weight </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].curbWeight} </p> :  'Curb Weight'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].curbWeight} </p> :  'Curb Weight'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Max. Tow Capacity </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].maxTowCap} </p> :  'Max. Tow Capacity'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].maxTowCap} </p> :  'Max. Tow Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Weight Power </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].weightPower} </p> :  'Weight Power'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].weightPower} </p> :  'Weight Power'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Trunk Capacity </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].trunkCap} </p> :  'Trunk Capacity'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].trunkCap} </p> :  'Trunk Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Front Suspension </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].frontSus} </p> :  'Front Suspension'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].frontSus} </p> :  'Front Suspension'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Rear Suspension </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].rearSus} </p> :  'Rear Suspension'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].rearSus} </p> :  'Rear Suspension'  }</td>
            </tr>
            </tbody>
            </table>

            <hr/>
            <h5 className=" pad transparent z-depth-2 indigo-text"> Others <i className="material-icons black-text">power_input</i><i className="material-icons grey-text text-lighten-3">more_horiz</i> </h5>
            <hr/>

            <table>
            <tbody className="striped teal-text text-darken-4 ">
            <tr>
              <td className="col s2 m2 l3"> summmary </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].summmary} </p> :  'summmary'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].summmary} </p> :  'summmary'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Release Date </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].releaseDate} </p> :  'Release Date'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].releaseDate} </p> :  'Release Date'  }</td>
            </tr>

            <tr>
              <td className="col s2 m2 l3"> Price </td>
              <td className="col s5 m5 l4"> { carA.length ? <p> { carA[0].price} </p> :  'Price'  }</td>
              <td className="col s5 m5 l4"> { carB.length ? <p> { carB[0].price} </p> :  'Price'  }</td>
            </tr>
          </tbody>
      </table>
    </section>
  )
}

export default Results;