import React, { useEffect, useState } from 'react';
import ContextState from './context_state_config';
import Recipe from './Recipe';


//import './App.css';

function App () {
  const APP_ID = '8a37ebc0';
  const APP_KEY = 'af0043c0a96cde5acc67165092e07c9b';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="container-fluid">
      <ContextState />
      <nav class="navbar navbar-light bg-light mb-3 ">
        <h3 class="alert alert-success">Enter Ingredient</h3>
        <form onSubmit={getSearch} className='form-inline'>
          <input onChange={updateSearch}
            className='form-control mr-sm-2'
            type='search'
            placeholder="Search"
            value={search} />

          <button className='btn btn-outline-success my-2 my-sm-0'
            type='submit'>
            Search
        </button>
        </form>
      </nav>
      <div className='col-12'>
        <div className='row'>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            >

            </Recipe>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;





