import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RQSuperheroes from "./components/RQSuperheroes";
import  {SuperHeroesPage}  from "./components/SuperHeroes";
import ParallelQueries from "./components/ParallelQueries";


function App() {
 
  const queryClient = new QueryClient()
  

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
      <Link style={{margin:'4%'}} to="/">Recipies</Link>
      <Link style={{margin:'4%'}} to="/add">add</Link>
      <Link  style={{margin:'4%'}}to="/myhero">superhero1</Link>
      <Link style={{margin:'4%'}} to="/superhero">superhero_query</Link>
      <Link style={{margin:'4%'}} to="/parallel">Parrallel Quries</Link>
      </div>
      <Routes>
        <Route path="/" element={<RecipeList  />} />
        <Route path="/add" element={<AddRecipeForm  />} />
        <Route path="/superhero" element={<RQSuperheroes  />} />
        <Route path="/myhero" element={<SuperHeroesPage  />} />
        <Route path="/parallel" element={<ParallelQueries  />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails  />}
        />
      </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
