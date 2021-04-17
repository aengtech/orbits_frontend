import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import moment from 'moment';

const NewRelease = () => {

  const cars = useSelector(state => state.cars);

  const [pageNumber, setPageNumber ] = useState(0);
  const carPerPage = 5
  const pagesVisited = pageNumber * carPerPage
  const pageCount = Math.ceil(cars.length / carPerPage );
  const changePage = ({selected}) => {setPageNumber(selected)}

  const displayCars = cars
    .sort( (a, b) => a.releaseDate - b.releaseDate)
    .slice(pagesVisited, pagesVisited + carPerPage)
    .map(car => {
      return (
        <div className=" row center-align" key={car._id}>
          <Link to={`/cars/${car._id}`} className=" grey-text text-darken-4">
          <div className="col s12 m5 l5 container">
            <div className="hide-on-med-and-up"><br/></div>
            <div className="hide-on-med-and-up"><br/></div>
            <h4 className="indigo-text text-darken-4">{ car.brand } </h4>
            <img src={ car.selectedFileA } alt="carImg" className="responsive-img z-depth-2 materialboxed"/>
            </div>
          <div className="details col s12 m7 l7 center-align z-depth-1  lime lighten-5">
            <div className=""><br/></div>
            <div className=""><br/></div>
            <div className="hide-on-small-only"><br/></div>
            <div className="hide-on-small-only"><br/></div>
              <table className="centered striped brown-text text-darken-4 ">
                <tbody>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Model: </th>
                    <th className="col s7 m7 l8"> { car.model } { car.version }</th>
                  </tr>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Top Speed: </th>
                    <th className="col s7 m7 l8"> { car.topSpeed } </th>
                  </tr>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Max Power: </th>
                    <th className="col s7 m7 l8"> { car.maxPower } </th>
                  </tr>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Max Torque; </th>
                    <th className="col s7 m7 l8"> { car.maxTorque } </th>
                  </tr>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Acceleration: </th>
                    <th className="col s7 m7 l8"> { car.acceleration } </th>
                  </tr>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Date Launched: </th>
                    <th className="col s7 m7 l8"> { moment(car.releaseDate).format('YYYY') } </th>
                  </tr>
                  <tr>
                    <th className="col s5 m5 l4 grey-text text-darken-3"> Price: </th>
                    <th className="col s7 m7 l8"> { car.price } </th>
                  </tr>
                </tbody>
              </table>
              <div className=""><br/></div>
              <div className="hide-on-small-only"><br/></div>
              <div className="hide-on-small-only"><br/></div>
            </div>
            <hr className="container grey-text text-lighten-3"/>
            </Link>
          </div>
        );
      }
    );
  return (
    <div>
      <h3 className=" container indigo lighten-3 center-align  indigo-text text-darken-4 z-depth-1"> New In </h3>
      <div className="container">
        {displayCars}  
      </div>

      <div className="paginate center-align center container">
        <ReactPaginate 
          previousLabel = {"Previous"}
          nextLabel = {"Next"}
          pageCount = {pageCount}
          onPageChange = {changePage}
          containerClassName = {"paginationBttns"}
          previousLinkClassName = {"previousBttns"}
          nextLinkClassName = {"nextBttns"}
          disableClassName = {"pagination"}
          activeClassName = {"paginationActive"}
        />
      </div>
    </div>
  )
}

export default NewRelease;
