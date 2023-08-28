import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Cards = () => {
  const urls = [
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692905827/Art/pexels-curioso-photography-288100_sezlvs.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692905835/Art/pexels-anni-roenkae-4175054_rkylc4.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692905842/Art/pexels-alexander-ant-7031674_a3epp4.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692906676/Art/pexels-anni-roenkae-2983141_grtusf.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692906679/Art/pexels-lisa-fotios-2099528_d5gmhy.jpg',
    },
    {
      url: 'https://res.cloudinary.com/duotxzytv/image/upload/v1692906687/Art/pexels-steve-johnson-1812960_vg30ma.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {urls.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { transform: [{ scale: 1 }] }]}
          >
            <Image source={{ uri: item.url }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Artist Name</Text>
            <Text style={styles.cardPrice}>$500</Text>
            <TouchableOpacity style={styles.startAuctionButton}>
              <Text style={styles.buttonText}>Start Auction</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    padding: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  startAuctionButton: {
    backgroundColor: '#F86F03',
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cards;
