import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';


function HomeScreen() {
  const slides = [
    {
      url: require('../assets/img/slider1.jpg'),
    },
    {
      url: require('../assets/img/slider2.jpg'),
    },
    {
      url: require('../assets/img/slider3.jpg'),
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
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image source={slides[currentIndex].url} style={styles.slideImage} />
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
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    alignItems: 'center',
  },
  sliderContainer: {
    width: '90%',
    height: '60%',
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