import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DrawerContent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default DrawerContent;
