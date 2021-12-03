import * as React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import AppHeader from '../component/AppHeader';

export default class SoreThroat extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/soret.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{'\n Causes :'}</Text>
            <Text style={styles.head}>
              {
                'Sore throat causes can be attributed to a variety of factors. Common causes include:'
              }
            </Text>
            <Text>
              {
                ' 1) Viruses, such as those that cause the common cold, influenza, measles, chickenpox and mumps.'
              }
            </Text>
            <Text>
              {
                '2)Bacterial infections, including group. A Streptococcus bacteria also known as strep throat.\n\n'
              }
            </Text>

            <Text style={styles.description}>{' Symptoms :'}</Text>
            <Text style={styles.head}>
              {
                'Sore throat symptoms can vary based on their causes. These include:'
              }
            </Text>
            <Text style={styles.heafda}>
              {'1) Scratchy and burning sensations.'}
            </Text>
            <Text style={styles.heafdb}>
              {'2)Increased pain when swallowing or talking.'}
            </Text>
            <Text style={styles.heafdc}>{'3)Dry and tender throat.'}</Text>
            <Text style={styles.heafdd}>
              {'4)Throat or tonsils appearing red.\n\n'}
            </Text>

            <Text style={styles.description}>{' Home Remedies :'}</Text>
            <Text style={styles.heada}>{' 1) Drink water : '}</Text>
            <Text>
              {
                ' It is important to remain hydrated when you are   under the weather by drinking plenty of water. Staying hydrated can help ease congestion, thin mucus secretions and keep the throat moist.\n'
              }
            </Text>
            <Text style={styles.headb}>{'2) Warm liquids :'}</Text>
            <Text>
              {
                'Drink warm liquids that are soothing to the throat, such as hot tea with honey, hot soups, warm water with lemon or herbal teas.\n'
              }
            </Text>

            <Text style={styles.headc}>{'3)Salt water :'}</Text>
            <Text>
              {
                'Did you know that gargling warm salt water may also help to reduce some of the swelling? Add half a teaspoon of salt to a full glass (240ml) and gargle up to 3 times a day.\n'
              }
            </Text>

            <Text style={styles.headd}>{'4)Peppermint essential oil :'}</Text>
            <Text>
              {
                'Make some peppermint tea, add some peppermint oil to a diffuser or rub some on the chest to soothe a sore throat and ease a dry cough.\n\n\n\n'
              }
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#151E3D',
    alignItems: 'center',
    marginLeft: 60,
  },
  container: { flex: 1 },

  titleBar: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  description: {
    paddingLeft: 5,
    color: '#008000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  head: { paddingRight: 5, color: 'blue', fontSize: 15 },
  heada: { paddingRight: 290, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 280, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 310, color: 'blue', fontSize: 15 },
  headd: { paddingRight: 205, color: 'blue', fontSize: 15 },
  heafda: { paddingRight: 135, color: 'black', fontSize: 15 },
  heafdb: { paddingRight: 70, color: 'black', fontSize: 15 },
  heafdc: { paddingRight: 230, color: 'black', fontSize: 15 },
  heafdd: { paddingRight: 160, color: 'black', fontSize: 15 },
});
