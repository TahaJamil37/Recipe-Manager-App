import React ,{useState,useRef,useMemo}from 'react'

import RecipeItem from "./RecipeItem";
import { RecipeContext } from "./RecipeContext";

export default function RecipeList() {

  const { allrecipes } = React.useContext(RecipeContext);

 
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {

    console.log("rerender")
    setSearchQuery(e.target.value); // Update search query
  };
  const filteredRecipes = useMemo(() => {
    return allrecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allrecipes]); 

React.useEffect(() => {
  inputRef.current.focus();
 
 
},[]);

  return (
   <>
     <h2 className="">Recipes </h2>

     <input
     ref={inputRef}
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleChange}
      />
     {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeItem
            key={recipe?.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))
      ) : (
        <p>No recipes found!</p>
      )}
   </>
  )
}
