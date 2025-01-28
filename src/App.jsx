import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary } from 'react-error-boundary'

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RQSuperheroes from "./components/RQSuperheroes";
import  {SuperHeroesPage}  from "./components/SuperHeroes";
import ParallelQueries from "./components/ParallelQueries";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/iceCreamView";
import UserView from "./features/user/userView";






function App() {
 
  const queryClient = new QueryClient()

  function MyFallbackComponent({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
       
      </div>
    )
  }
  function logErrorToService(error, info) {
    // Use your preferred error logging service
    console.error("Caught an error:", error, info);
  }

  return (
    <QueryClientProvider client={queryClient}>


  {/* <CakeView/>
  <IceCreamView/>
  <UserView/> */}
   
    <Router>
      <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
      <Link style={{margin:'4%'}} to="/">Recipies</Link>
      <Link style={{margin:'4%'}} to="/add">add</Link>
      <Link  style={{margin:'4%'}}to="/myhero">superhero1</Link>
      <Link style={{margin:'4%'}} to="/superhero">superhero_query</Link>
      <Link style={{margin:'4%'}} to="/parallel">Parrallel Quries</Link>
      </div>
      <Routes>

  
     
      <Route path="/"  element={
      <ErrorBoundary FallbackComponent={MyFallbackComponent} onError={logErrorToService} 
       onReset={() => console.log("i am working")}>
        {/* /// reset the state of your app here */}
        <RecipeList />
      </ErrorBoundary>
    } />
   
       



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
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
