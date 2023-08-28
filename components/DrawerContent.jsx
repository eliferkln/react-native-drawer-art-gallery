import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const DrawerContent = ({ navigation }) => {
  return (
   
  
      <View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/armin.jpeg')} />
							</View>
							<View style={styles.profileText}>
								<Text style={styles.name}>Hanife Erkalan</Text>
                <Text style={styles.desc}>Frontend Developer</Text>
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.nav}>
                 <Text style={styles.navigation}>Home</Text>
        <AntDesign name="rightcircleo" size={18} color="#AEC3AE" />
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <View style={styles.nav}>
                 <Text style={styles.navigation}>Contact</Text>
        <AntDesign name="rightcircleo" size={18} color="#AEC3AE" />
            </View>
           </TouchableOpacity>
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Menu Tutorial</Text>
					<Text style={styles.version}>v1.2</Text>
				</View>
			</View>
     
  
  );
};

export default DrawerContent;
const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor:"#445069",
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#AEC3AE',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 24,
		paddingBottom: 2,
    color:'#EFEFEF',
		textAlign: 'left',
	},
  desc:{
		fontSize: 14,
		paddingBottom: 5,
    color:'#AEC3AE',
		textAlign: 'left',
  },
  nav:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:20,
  },
  navigation:{
		fontSize: 18,
		paddingBottom: 5,
    color:'#EFEFEF',
		textAlign: 'left',
  },
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	topLinks:{
		height: 150,
	},
	bottomLinks: {
		flex: 1,
    paddingLeft: 20,
    paddingRight:20,
		paddingTop: 20,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: '#AEC3AE',
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
    color:'#AEC3AE',
	}
})