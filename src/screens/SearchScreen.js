import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = newTerm => {
    setTerm(newTerm);
  };

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
    searchApi('continental');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={handleChange}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>Something went wrong!</Text>}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
