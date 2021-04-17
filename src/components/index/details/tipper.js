import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Tipper = () => {

  const { id } = useParams();
  const tips = useSelector( (state) => state.tips);

  const singleTips = tips.filter( (tip) => tip._id.toLowerCase() === id.toLowerCase());

  return (
    <div className="container">
      <div className="card-image">
        <img src={singleTips[0].selectedImg} alt="image" className="responsive-img"/>
        <span className="card-title"> {singleTips[0].title}</span>
      </div>
      <div className="card-content">
        <p>{singleTips[0].summary } </p>
      </div>
    </div> 
  )
}

export default Tipper
