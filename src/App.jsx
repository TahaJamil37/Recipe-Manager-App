import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";


function App() {
 

  

  return (
    <Router>
      <Link to="/">Recipies</Link>
      <Link to="/add">add</Link>

      <Routes>
        <Route path="/" element={<RecipeList  />} />
        <Route path="/add" element={<AddRecipeForm  />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
