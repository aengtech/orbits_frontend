import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


const CarTips = () => {

  const tips = useSelector(state => state.tips);
  console.log(tips);

  const [pageNumber, setPageNumber ] = useState(0);
  const tipPerPage = 15
  const pagesVisited = pageNumber * tipPerPage
  const pageCount = Math.ceil(tips.length / tipPerPage );
  const changePage = ({selected}) => {setPageNumber(selected)}

  const displayTips = tips
    .slice(pagesVisited, pagesVisited + tipPerPage)
    .map( tip => {
      return (
        <li className="card z-depth-2 col s6 m4 l3 indigo lighten-5"  key={tip._id}>
            <div className="card-image">
              <img src={tip.selectedImg} alt="image" className="responsive-img"/>
              <span className="card-title"> {tip.title}</span>
            </div>
            <div className="card-content">
             <p>{tip.summary } </p>
            </div>
            <div className="card-action">
              <Link to={`/tips/${tip._id}`}>Read More...</Link>
            </div>
        </li>
      )
    })
  return (
      <section className="section grey lighten-2 row">
        <div className="">
        <h4 className="center-align grey darken-3 grey-text text-lighten-1">Tips</h4> 

        <ul className="">
          
          { displayTips }
          
        </ul>
        <div><br/></div>  <div><br/></div>

        <div className="paginate center-align s12 l12 m12 container">
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
      </section>
  )
}

export default CarTips
