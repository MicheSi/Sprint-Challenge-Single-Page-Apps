import React from "react";
// components
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
// dependencies
import {Route, NavLink, Switch} from 'react-router-dom';



export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <div className='nav-links'>
          <NavLink to='/'>Welcome</NavLink>
          <NavLink to='/character-list'>Character List</NavLink>
        </div>
      </nav>
      <div>
        <SearchForm />
      </div>
      <Switch>
      <Route path='/character-list'>
          <CharacterList />
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
