import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const handleChange = newTerm => {
    setTerm(newTerm);
  };

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    // <View style={{ flex: 1 }}>
    <>
      <SearchBar
        term={term}
        onTermChange={handleChange}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>Something went wrong!</Text>}
      {/* <Text>We have found {results.length} results.</Text> */}
      <ScrollView>
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <View style={styles.divider} />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <View style={styles.divider} />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$$')}
          title="Big Spender!"
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    // height: 10,
    marginBottom: 5
  }
});

export default SearchScreen;
