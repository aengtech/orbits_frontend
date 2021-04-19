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
        <div className="card z-depth-2 col s4 m4 l3 indigo lighten-5"  key={tip._id}>
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
        </div>
      )
    })
  return (
      <section className="section grey lighten-2 row">
        <h4 className="center-align grey darken-3 grey-text text-lighten-1"> <i className="material-icons">storage</i></h4> 

        <div className="container s12 l12 m12">
        <div className=" row">
          
          { displayTips }
          
        </div>

        <div className="paginate s12 l12 m12 container">
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
