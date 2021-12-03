import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
      <Text style={styles.text}>my name</Text>
          <Image
              source={require('../assets/med.jpg')}
              style={styles.iconImage}></Image>
        
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'white',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
     iconImage: {
    position: 'absolute',
    height: 250,
    width: 400,
    resizeMode: 'contain',
    right: 10,
    top: -5,
  },
});

export default AppHeader;