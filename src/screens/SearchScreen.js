import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const handleChange = newTerm => {
    setTerm(newTerm);
  };

  const handleSubmit = () => {
    console.log(term, 'was submitted');
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={handleChange}
        onTermSubmit={handleSubmit}
      />
      <Text>Search Screen: {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
