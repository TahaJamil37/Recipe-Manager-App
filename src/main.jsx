import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RecipeProvider } from './components/RecipeContext.jsx'; // Import the context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeProvider> 
      <App />
    </RecipeProvider>
  </StrictMode>
);
