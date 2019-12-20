import React, { useState, useEffect } from "react";
import Axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
 const [data, setData] = useState('');
 const [query, setQuery] = useState([]);

 useEffect(() => {
  Axios.get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    console.log(res.data.results)
    const characters = res.data.results.filter(char =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );
      setData(characters);
  })
  .catch(err => {
    console.log('No data to display', err);
  })
}, [query]);
 
 
 const handleChange = e => {
   console.log(e.target.value)
   setQuery(e.target.value);
 };

  return (
    <section className="search-form">
     <form>
       <label htmlFor='name'>Search for Character: </label>
       <input
        id='name'
        type='text'
        name='textfield'
        value={query}
        placeholder='Enter character name'
        onChange={handleChange}
       />
     </form>
     <div className='search-results'>
      <ul>
       {query.map(char => (
         <li key={char}>{char}</li>
       ))}
      </ul>
      </div>
    </section>
  );
}
