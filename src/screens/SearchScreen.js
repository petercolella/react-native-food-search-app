import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const handleChange = newTerm => {
    setTerm(newTerm);
  };

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
