import { useState, useEffect } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/superheroes');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroes();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.length > 0 ? (
        data.map(hero => (
          <div key={hero.id}>{hero.name}</div> // Added a `key` prop for proper list rendering.
        ))
      ) : (
        <p>No heroes found!</p>
      )}
    </>
  );
};
