import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.rating}>
                {item.rating} Stars, {item.review_count} Reviews
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 125,
    width: 'auto'
  },
  listItem: {
    marginRight: 25,
    marginTop: 10,
    width: 250
  },
  name: {
    fontWeight: 'bold',
    lineHeight: 25
  },
  rating: {
    color: 'gray'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
