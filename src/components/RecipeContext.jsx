import React, {createContext} from 'react';
import recipes from "../utils/dummyData";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [allrecipes, setRecipes] = React.useState([]);


    const fetchRecipes = async () => {
        setRecipes(recipes);
      };
      React.useEffect(() => {
        fetchRecipes();
      }, []);

    return (
        <RecipeContext.Provider value={{allrecipes,setRecipes}}>
            {children}
        </RecipeContext.Provider>
    )}

