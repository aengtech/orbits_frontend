import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

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
          <h5> Data of { singleCars[0].brand } { singleCars[0].model } { singleCars[0].version } </h5>

        </div>
  
          <div className="z-depth-3" >
            <img src={ singleCars[0].selectedFileA} alt="" className="responsive-img materialboxed"/>
          </div>

        <table className=" striped active brown-text text-darken-4">
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
              <td className="col s5 m5 l4"> Fuel Type </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].fuelType} </p> :  'Fuel Type'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> engine Type </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].engineType} </p> :  'Engine Type'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Combined Power </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].comMaxTorque} </p> :  'Combined Power'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Combined Max. Torque </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].comMaxTorque} </p> :  'Combined Max. Torque'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Max. Power </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].maxPower} </p> :  'Max. Power'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Max. Torque </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].maxTorque} </p> :  'Max. Power'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Number of Electric Engines </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].maxTorque} </p> :  'Number of Electric Engines'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Traction </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].traction} </p> :  'Traction'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Number of Speed </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].numofSpeed} </p> :  'Number of Speed'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Clutch Type </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].clutchType} </p> :  'Clutch Type'  }</td>
            </tr>
            </tbody>
            </table>

            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4"> Performance </h5>
            <hr/>
            
            <table className="striped">
            <tbody>
            <tr>
              <td className="col s5 m5 l4"> top Speed </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].topSpeed} </p> :  'Top Speed'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Acceleration </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].acceleration} </p> :  'Acceleration'  }</td>
            </tr>
            </tbody>
            </table>


            <div className="z-depth-2" >
              <img src={ singleCars[0].selectedFileB} alt="" className="responsive-img materialboxed"/>
            </div>


            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4"> Battery Technical Data, Charging and Range </h5>
            <hr/>


            <table className="striped">
            <tbody>
            <tr>
              <td className="col s5 m5 l4"> Battery Type </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].batType} </p> :  'Battery Type'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Battery Capacity </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].batCap} </p> :  'Battery Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Electric Range EPA </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].electricRangeEPA} </p> :  'Electric Range EPA'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Electric Range WLPT </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].electricRangeWLPT} </p> :  'Electric Range WLPT'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Charge Time </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].chargeTime} </p> :  'Charge Time'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Fast Charge Time </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].fastChargeTime} </p> :  'Fast Charge Time'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> co2 Emission WLTP </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].co2EmissionWLTP} </p> :  'co2 Emission WLTP'  }</td>
            </tr>
            </tbody>
            </table>


            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4">Size Dimension Aerodynamics and Weight </h5>
            <hr/>

            <table className="striped">
            <tbody>
            <tr>
              <td className="col s5 m5 l4"> Body </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].body} </p> :  'Body'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Number of doors </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].numofdoors} </p> :  'Number of doors'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l43"> Wheelbase </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].wheelbase} </p> :  'Wheelbase'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Length </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].length} </p> :  'Length'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Width </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].width} </p> :  'Width'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Height </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].height} </p> :  'Height'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Front Axle </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].frontAxle} </p> :  'Front Axle'  }</td>
            </tr>
            <tr>
              <td className="col s5 m5 l4"> Rear Axle </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].rearAxle} </p> :  'Rear Axle'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Number of Seats </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].numofSeats} </p> :  'Number of Seats'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Front Brakes </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].frontBrakes} </p> :  'Front Brakes'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Rear Breaks </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].rearBreaks} </p> :  'Rear Breaks'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Front Tyres </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].frontTyres} </p> :  'Front Tyres'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Rear Tyres </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].rearTyres} </p> :  'Rear Tyres'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Curb Weight </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].curbWeight} </p> :  'Curb Weight'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Max. Tow Capacity </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].maxTowCap} </p> :  'Max. Tow Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Weight Power </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].weightPower} </p> :  'Weight Power'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Trunk Capacity </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].trunkCap} </p> :  'Trunk Capacity'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Front Suspension </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].frontSus} </p> :  'Front Suspension'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Rear Suspension </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].rearSus} </p> :  'Rear Suspension'  }</td>
            </tr>
            </tbody>
            </table>

            <hr/>
            <h5 className="indigo darken-3 indigo-text text-lighten-4"> Others </h5>
            <hr/>

            <table className="striped">
            <tbody>
            <tr>
              <td className="col s5 m5 l4"> summmary </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].summmary} </p> :  'summmary'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Release Date </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { moment(singleCars[0].releaseDate).fromNow()} </p> :  'Release Date'  }</td>
            </tr>

            <tr>
              <td className="col s5 m5 l4"> Price </td>
              <td className="col s7 m7 l8"> { singleCars.length ? <p> { singleCars[0].price} </p> :  'Price'  }</td>
            </tr>            
          </tbody>
        </table>

        <div className="z-depth-2" >
            <img src={ singleCars[0].selectedFileC} alt="" className="responsive-img materialboxed"/>
          </div>
      </div>
    </section>
  )
}

export default Specs 
