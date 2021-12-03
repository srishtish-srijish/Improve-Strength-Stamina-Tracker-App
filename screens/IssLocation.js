import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native';
import AppHeader from '../component/AppHeader';

export default class HomeScreen extends React.Component {
  goToSore = (buzzercolor) => {
    this.props.navigation.navigate('soreThroat', { color: buzzercolor });
  };
    goToHeadScreen = (buzzercolor) => {
    this.props.navigation.navigate('HeadAche', { color: buzzercolor });
  };
     goToStomachScreen = (buzzercolor) => {
    this.props.navigation.navigate('StomachAche', { color: buzzercolor });
  };
     goToMigraineScreen = (buzzercolor) => {
    this.props.navigation.navigate('MigrainePain', { color: buzzercolor });
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
         this.goToSore('white');
          }}>
          <Text style={styles.buttonText}>Sore Throat</Text>
          <Image
              source={require('../assets/sore.png')}
              style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
        this.goToStomachScreen('white');
          }}>
          <Text style={styles.buttonText}>Stomach Ache</Text>
          <Image
              source={require('../assets/stomach.png')}
              style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
           this.goToHeadScreen('white');
          }}>
          <Text style={styles.buttonText}>Headache</Text>
          
            <Image
              source={require('../assets/head.png')}
              style={styles.iconImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
           this.goToMigraineScreen('white');
          }}>
          <Text style={styles.buttonText}>Migrain Pain</Text>
            <Image
              source={require('../assets/migrain.png')}
              style={styles.iconImage}></Image>
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
    width: 90,
    resizeMode: 'contain',
    left:140,
    top: -70,
  },
});
