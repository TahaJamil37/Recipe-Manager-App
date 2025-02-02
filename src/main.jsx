import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import {Provider} from 'react-redux'
import './index.css';
import App from './App.jsx';
//import store from './app/store.js';
import { RecipeProvider } from './components/RecipeContext.jsx'; // Import the context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RecipeProvider>
      <App /> 
    </RecipeProvider>


    {/* <Provider store={store}> 
      <App />
    </Provider> */}
  </StrictMode>
);
