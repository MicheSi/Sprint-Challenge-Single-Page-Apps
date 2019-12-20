import React, { useState, useEffect } from "react";
import Axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
 const [searchTerm, setSearchTerm] = useState('');
 const [searchResults, setSearchResults] = useState([]);

 useEffect(() => {
  Axios.get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    console.log(res.data.results)
    const characters = res.data.results.filter(char =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
      setSearchResults(characters);
  })
  .catch(err => {
    console.log('No data to display', err);
  })
}, [searchTerm]);
 
 
 const handleChange = e => {
   console.log(e.target.value)
   setSearchTerm(e.target.value);
 };

  return (
    <section className="search-form">
     <form>
       <label htmlFor='name'>Search for Character: </label>
       <input
        id='name'
        type='text'
        name='textfield'
        value={searchTerm}
        placeholder='Enter character name'
        onChange={handleChange}
       />
     </form>
     <div className='search-results'>
      <ul>
       {searchResults.map((char, index) => {
         return <CharacterCard
         key={index}
         name={char.name}
         image={char.image}
         species={char.species}
         gender={char.gender}
         />
       })}
      </ul>
      </div>
    </section>
  );
}
