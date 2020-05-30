import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet
} from 'react-native';
import yelp from '../api/yelp';

const { width } = Dimensions.get('window');

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [scaledHeight, setScaledHeight] = useState(0);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  const resizeImage = item => {
    Image.getSize(item, (w, h) => {
      const scaledHeight = (width / w) * h;
      setScaledHeight(scaledHeight);
    });
  };

  useEffect(() => {
    getResult(id);
  }, []);

  useEffect(() => {
    if (result) {
      resizeImage(result.photos[0]);
    }
  }, [result]);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={{
                ...styles.image,
                height: scaledHeight
              }}
              source={{ uri: item }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 25
  },
  image: {
    borderRadius: 4,
    marginBottom: 5,
    width: width
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  }
});

export default ResultsShowScreen;
