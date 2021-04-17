import React, { useState }  from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createTip } from '../../actions/tip';

const TipUpload = () => {

  const [tipData, setTipData] = useState({
    title: '', summary: '', details: '', selectedImg: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTip(tipData));
    console.log(tipData);
  }

  return (
    <div>
      <section className="section container">
        <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" id="title" value={tipData.title} onChange={(e) => setTipData({ ...tipData, title: e.target.value })}/>
          <label htmlFor="title"> title </label>
        </div>
        <div className="input-field">
          <input type="text" id="summary" value={tipData.summary} onChange={(e) => setTipData({ ...tipData, summary: e.target.value })}/>
          <label htmlFor="summary"> summary </label>
        </div>
        <div className="input-field">
          <input type="text" id="details" value={tipData.details} onChange={(e) => setTipData({ ...tipData, details: e.target.value })}/>
          <label htmlFor="details"> details </label>
        </div>
        
        <FileBase type="file" multiple={false} onDone={(base64) => setTipData({ ...tipData, selectedFile: base64})} />

        <button className="btn" type="submit"> Upload </button>
        </form>
      </section>
    </div>
  )
}

export default TipUpload;