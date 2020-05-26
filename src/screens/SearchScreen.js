import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const handleChange = newTerm => {
    setTerm(newTerm);
  };

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
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
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
