import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results)
      setCharacter(res.data.results)
    })
    .catch(err => {
      console.log('No data to display', err);
    })
  }, []);

  return (
    <section className="character-list">
      {character.map((char, index) => {
        return <CharacterCard
          key={index}
          name={char.name}
          image={char.image}
          species={char.species}
          gender={char.gender}
          />
      })}
    </section>
  );
}

