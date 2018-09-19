import React from 'react';
import { View, Text, Button } from 'react-native';

const InfoScreen = ({ navigation }) => (
  <View>
    <Text>Some information about ...</Text>
    <Button
      title="Back to Habit"
      onPress={() => navigation.navigate('Habit')}
    />
  </View>
);

export default InfoScreen;
