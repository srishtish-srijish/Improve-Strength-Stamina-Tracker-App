import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground, 
  Image
} from 'react-native';
import AppHeader from '../component/AppHeaderCopy';

export default class HomeScreen extends React.Component {
  goToBackPainScreen = (buzzercolor) => {
    this.props.navigation.navigate('BackPain', { color: buzzercolor });
  };
    goToCancerScreen = (buzzercolor) => {
    this.props.navigation.navigate('Cancer', { color: buzzercolor });
  };
     goToDiabetesScreen = (buzzercolor) => {
    this.props.navigation.navigate('Diabetes', { color: buzzercolor });
  };
     goToHeartDiseasesScreen = (buzzercolor) => {
    this.props.navigation.navigate('HeartDiseases', { color: buzzercolor });
  };

  render() {
    return (
      <View>
          <ImageBackground
        
          style={styles.backgroundImage}>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
         this.goToBackPainScreen('white');
          }}>
          <Text style={styles.buttonText}>Back Pain</Text>
          <Image
              source={require('../assets/PAIN.jpg')}
              style={styles.iconImagePain}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
        this.goToCancerScreen('white');
          }}>
          <Text style={styles.buttonText}>Cancer</Text>
      <Image
              source={require('../assets/CANCER.jpg')}
              style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
           this.goToDiabetesScreen('white');
          }}>
          <Text style={styles.buttonText}>Diabetes</Text>
           <Image
              source={require('../assets/DIABETES.jpg')}
              style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
           this.goToHeartDiseasesScreen('white');
          }}>
          <Text style={styles.buttonText}>Heart Disease</Text>
            <Image
              source={require('../assets/HEART.jpg')}
              style={styles.iconImageOne}></Image>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 85,

    width: 200,
    height: 40,
  },
  buttonText: {

    fontSize: 20,
    fontWeight: 'bold',
    color: '#151E3D',
    alignItems: 'center',
    marginLeft: 10,
  
  },
  backgroundImage:{
    backgroundColor:"white",
  },
   iconImage: {
    position: 'absolute',
    height: 200,
    width: 100,
    resizeMode: 'contain',
    left:140,
    top: -85,
  },
     iconImageOne: {
    position: 'absolute',
    height: 200,
    width: 95,
    resizeMode: 'contain',
    left:150,
    top: -85,
  },
       iconImagePain: {
    position: 'absolute',
    height: 200,
    width: 85,
    resizeMode: 'contain',
    left:150,
    top: -65,
  },
});
