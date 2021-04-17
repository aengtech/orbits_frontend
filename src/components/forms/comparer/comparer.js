import React, { useState} from 'react';

import Search from './search';
import Results from './results';

const Comparer = () => {

  const [ currentId, setCurrentId ] = useState(null);
  const [ currentIdd, setCurrentIdd ] = useState(null);

  return (
    <section className="section">
      <h6 className="indigo-text text-lighten-3"> Compare the specs of any two given cars of your choice. </h6>
      <div className="container search-bar row">
        <div className="col s2 m2 l2">

        </div>
        <div className="container col s5 m5 l5">
          <Search setCurrentId={setCurrentId}/>
        </div>
        <div className="container col s5 m5 l5">
          <Search setCurrentId={setCurrentIdd}/>
        </div>
      </div>  

      <div className="container results">
        <Results currentId={currentId} currentIdd={currentIdd}/> 
      </div>
    </section>
  )
}

export default Comparer;
