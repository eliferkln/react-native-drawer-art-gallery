import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import Experience from '../components/Experience';


function HomeScreen() {
  const imageUrl = 'https://res.cloudinary.com/duotxzytv/image/upload/v1692904349/Art/pexels-tiana-2956376_ojlvy4.jpg';
  const slides = [
    {
        url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902621/Art/pexels-steve-johnson-1843716_cngdmu.jpg',
      },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902596/Art/pexels-anni-roenkae-3109807_2_jeumay.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902621/Art/pexels-steve-johnson-1843716_cngdmu.jpg',
    },

    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902621/Art/pexels-steve-johnson-1843716_cngdmu.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902651/Art/pexels-steve-johnson-1585323_buftdm.jpg',
    },
    {
        url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692903659/Art/pexels-steve-johnson-1266808_mrbyat.jpg',
      },
    {
        url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692902684/Art/pexels-steve-johnson-2007088_ue2huj.jpg',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <ScrollView style={styles.wrapper}>
  <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image  source={{ uri: slides[currentIndex].url }} style={styles.slideImage} />
        <TouchableOpacity
          style={[styles.arrowButton, styles.leftArrow]}
          onPress={prevSlide}
        >
          <AntDesign name="leftcircleo" size={24} color="#d9dbde" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.arrowButton, styles.rightArrow]}
          onPress={nextSlide}
        >
          <AntDesign name="rightcircleo" size={24} color="#d9dbde" />
        </TouchableOpacity>
      </View>
      <View style={styles.dotContainer}>
        {slides.map((slide, slideIndex) => (
          <TouchableOpacity
            key={slideIndex}
            onPress={() => goToSlide(slideIndex)}
            style={styles.dot}
          >
            <Octicons
              name="dot-fill"
              size={24}
              color={slideIndex === currentIndex ? 'black' : 'gray'}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Experience/>
    </View>
    </ScrollView>
  
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop:40,
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  sliderContainer: {
    width: '90%',
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    paddingHorizontal: 5,
  },
});