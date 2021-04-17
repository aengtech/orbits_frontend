import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchResult from './searchResults';

const Search = () => {

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

  return (
    <section className="section container">
      <div className="input-field container">
        <input type="text" name="search" id="search" value={q} onInput={inputEvent} onChange={searchEvent} />
        <label htmlFor="search">Search Car Model: </label>
      </div>
      <SearchResult  isOpen={isOpen} items={foundWords} />
    </section>
  )
}

export default Search;
