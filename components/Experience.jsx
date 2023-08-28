import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Experience = () => {
  const imageUrl = 'https://res.cloudinary.com/duotxzytv/image/upload/v1692904349/Art/pexels-tiana-2956376_ojlvy4.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Living the art experience</Text>
          <Text style={styles.subtitle}>We connect with an audience sensitive to the changes taking place in the art world and in the world in general.</Text>
          <Text style={styles.description}>
            Our goal has always been to promote contemporary art within a line that goes from modern figuration to the purest abstract art.
          </Text>
          <View style={styles.imagecontainer}>
             <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
         
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Latest Art News & Stories</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  innerContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'center',
  },
  image: {
    width: 340,
    height: 200,
    marginVertical: 8,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  imagecontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    color: '#F86F03',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  description: {
    fontSize: 16,
    paddingTop: 8,
  },
  button: {
    backgroundColor: 'black',
    borderColor: '#F86F03',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 12,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#F86F03',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Experience;
