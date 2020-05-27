import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text numberOfLines={1} style={styles.name}>
        {result.name}
      </Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
    width: 250
  },
  listItem: {
    marginLeft: 15,
    marginRight: 25,
    // marginTop: 10,
    width: 250
  },
  name: {
    fontWeight: 'bold'
    // lineHeight: 25
  },
  rating: {
    color: 'gray'
  }
});

export default ResultsDetail;
