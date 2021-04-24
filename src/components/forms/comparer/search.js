import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchResult from './searchResults';

const Search = ({setCurrentId}) => {

  const cars = useSelector(state => state.cars);

  const [ q, setQ ] = useState("");
  const [ isOpen, setIsOpen ] = useState(false);
  const [ foundWords, setFoundWords ] = useState("");

  const searchWord = (keyword) => {
    keyword = RegExp.escape(keyword.toLowerCase());
    const pattern = `[A-Za-z.\s]*${keyword}[A-Za-z.\s]*`;
    const matchRegex = new RegExp(pattern);

    const foundWords = cars.filter((item) => matchRegex.test(item.model.toLowerCase()))
    setFoundWords(foundWords);
  }

  const searchEvent = (e) => {
    const keyword = e.target.value;
    searchWord(keyword);  
  }

  const inputEvent = (e) => {
    const data = e.target.value;
    setQ(data);

    if(data !== ""){
      showResults();
    } else {
      hideResults();
    }
  }

  const showResults = () => {
    setIsOpen(true);
  }

  const hideResults = () => {
    setIsOpen(false);
  }

  const clear = () => {
    setCurrentId(null);
    setQ("");
  }

  return (
    <section className="section container row">
      <div className="input-field container col s9 l9 m9">
        <input type="text" name="search" id="search" value={q} onInput={inputEvent} onChange={searchEvent} />
        <label htmlFor="search"> Model: </label>
      </div>
      <div className="icons col s3 m3 l3">
        <br/>
        <br/> 
        <i className=" material-icons brown-text text-darken-1 waves-effect waves-light" onClick={clear}>
          backspace
        </i>
      </div>
      <SearchResult  isOpen={isOpen} items={foundWords} setCurrentId={setCurrentId} setIsOpen={setIsOpen}/>
    </section>
  )
}

export default Search;
