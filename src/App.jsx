

import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import recipes from './utils/dummyData'


function App() {
 

  return (
    <Router>
    
     

      <Link  to="/">Recipies</Link>

      <Routes>

        <Route path='/'element={<RecipeList recipes={recipes} />} />
        <Route path='/recipe/:id' element={<RecipeDetails recipes={recipes}/>}/>
      </Routes>


    </Router>
  )
}

export default App
