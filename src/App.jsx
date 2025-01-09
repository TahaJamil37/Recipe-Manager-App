import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

import React from "react";


function App() {
 

  

  return (
    <Router>
      <Link to="/">Recipies</Link>

      <Routes>
        <Route path="/" element={<RecipeList  />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
