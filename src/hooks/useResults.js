import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'atlanta'
        }
      });
      setErrorMessage(false);
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err.message);
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    searchApi('seafood');
  }, []);

  return [searchApi, results, errorMessage];
};
