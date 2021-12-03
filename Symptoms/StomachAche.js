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

export default class StomachAche extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/stoma.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{' \nCauses :'}</Text>
            <Text style={styles.head}>
              {'Common causes of pain in the abdominal area include:'}
            </Text >
            <Text style={styles.heafda}>
              {' 1) Gas in the stomach.'}
            </Text>
            <Text style={styles.heafdd}>
              {'2)Indigestion.\n 3)Constipation'}
            </Text>
            <Text style={styles.heafdb}>
              {
                '4)Diarrhoea or food poisoning.'
              }
            </Text>
             <Text style={styles.heafdc}>
              {
                '5)Menstruation.\n 6)Appendicitis.\n7)Gallstones.'
              }
            </Text>
            <Text style={styles.description}>{' \nSymptoms :'}</Text>
            <Text style={styles.head}>
              {
                'Symptoms of a stomach ache vary according to the cause of the pain. They may include:'
              }
            </Text>
            <Text>
              {'1)Feeling bloated and increased flatulence due to trapped gas.'}
            </Text>
            <Text style={styles.headc}>{'2)Difficulty in passing stools.'}</Text>
            <Text>
              {
                '3)Pain in the lower right-hand side of the stomach due to appendicitis.'
              }
            </Text>
            <Text>
              {'4)Severe pain in the centre of your tummy due to gallstones.'}
            </Text>

            <Text style={styles.description}>{'\n Home Remedies :'}</Text>
            <Text style={styles.heade}>{' 1) Ginger : '}</Text>
            <Text>
              {
                ' Many individuals swear by eating ginger biscuits, taking ginger supplements or sipping ginger tea when they feel queasy.\nThe digestive benefit of ginger is no myth – a natural anti-inflammatory, ginger has been shown by many studies to be effective in relieving certain types of stomach ills.\n'
              }
            </Text>
            <Text style={styles.heada}>{'2)Mint:'}</Text>
            <Text>
              {
                'Mint has been used as a traditional treatment for indigestion, gas and diarrhoea in countries such as Iran, Pakistan and India. Traditionally, it is boiled with cardamom to make tea. The menthol in mint may help with preventing vomiting and diarrhoea, reducing muscle spasms in the intestines and relieving pain.\n'
              }
            </Text>

            <Text style={styles.headb}>{'3)Cinnamon:'}</Text>
            <Text>
              {
                'Cinnamon contains several antioxidants that may help ease digestion and reduce the risk of irritation and damage to the digestive tract. Adding 1 teaspoon of good-quality cinnamon powder to your meals or mixing it with boiling water to make a tea may help relieve indigestion. You may do this 2 – 3 times daily.\n'
              }
            </Text>

            <Text style={styles.headd}>{'4)BRAT diet:'}</Text>
            <Text>
              {
                'The BRAT diet may help people with diarrhoea. It stands for bananas, rice, applesauce and toast. These foods can help bind foods together to make stools firmer. They are also rich in nutrients such as potassium and magnesium and can replace those lost through diarrhoea and vomiting.\n\n\n\n'
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
  heafd: { paddingRight: 200, color: 'blue', fontSize: 15 },
   heade: { paddingRight:325, color: 'blue', fontSize: 15 },
  heada: { paddingRight: 350, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 310, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 195, color: 'black', fontSize: 15 },
  headd: { paddingRight: 310, color: 'blue', fontSize: 15 },
  heafda: { paddingRight: 235, color: 'black', fontSize: 15 },
  heafdb: { paddingRight: 175, color: 'black', fontSize: 15 },
  heafdc: { paddingRight: 290, color: 'black', fontSize: 15 },
  heafdd: { paddingRight: 295, color: 'black', fontSize: 15 },
});
