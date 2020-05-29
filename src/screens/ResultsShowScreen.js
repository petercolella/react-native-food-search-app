import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <View>
      <Text>Results Show Screen {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
