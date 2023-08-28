import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Life is short, art is long!</Text>
          <Text style={styles.subtitle}>Uniting Nations through the Power of Art</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Me!</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.privacyText}>
          Contact me for auction{' '}
          <Text style={styles.privacyLink}>Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 4,
    flex: 1,
  },
  innerContainer: {
    marginTop:150,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    width: 300,
    color: 'black',
  },
  button: {
    backgroundColor: '#F86F03',
    borderRadius: 5,
    width: 300,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  privacyText: {
    textAlign: 'center',
  },
  privacyLink: {
    color: '#F86F03',
  },
});

export default ContactScreen;
