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
  ScrollView
} from 'react-native';

export default class HeadAche extends React.Component {
  render() {
    return (
   <ScrollView>
      
      <View style={styles.container}>
        
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/heada.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{' \n Causes :'}</Text>
            <Text>
              {
                ' 1) Inflammation or irritation of structures that surround the brain.\n2)Infection or dehydration.\n3)Changes in circulation and blood flow.'
              }
            </Text>
            <Text >
              {
                '4)Medication reactions, drug abuse and drug withdrawal.'
              }
            </Text>
             <Text style={styles.heafda}>
              {
                ' 5)Certain foods.\n 6)Stress.'
              }
            </Text>
            <Text style={styles.description}>{' \nSymptoms :'}</Text>
            <Text>{'1)Tension headaches appear as pain that begins in the back of the head and upper neck, often described as a band-like tightness or pressure. It is not associated with nausea and vomiting. \n\n 2)Cluster headaches occur periodically with pain-free periods of months or years in between. The pain is usually excruciating and located around or behind one eye. This type of headache affects men more often.'}
            </Text>

            <Text style={styles.description}>
              {'\n Home Remedies :'}
            </Text>
            <Text style={styles.head}>
              { " 1)Rest and hydration : "}</Text>
                 <Text>{" Getting enough rest and staying hydrated is one of the first steps to treating a headache. Most patients with migraine headaches get much relief after resting in a dark room and falling asleep.\n\n"
              }
            </Text >
            <Text style={styles.heada}>{'2)Massage: '}</Text>
            <Text>{'A gentle massage may also help to relieve some of the tension in your temples or neck. Maintain pressure for 7 – 15 seconds, then repeat.\n\n'}</Text>


            <Text style={styles.headb}>{'3)Coffee or tea: '}</Text>
            <Text>{'Beverages containing caffeine, such as coffee or tea, may provide headache relief. Caffeine improves mood, increases alertness and constricts blood vessels. These actions help relieve headache symptoms.\n\n'}</Text>

            <Text style={styles.headc}>{'4)Soothe Pain with a Cold Compress: '}</Text>
            <Text>{'Wrap an ice pack in a cloth and apply it to the neck or head area. This helps decrease inflammation, slows nerve conduction, and constricts blood vessels, all of which contribute to relieving the headache.\n\n\n\n'}</Text>
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
    flex: 0.20,
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
  head:{paddingRight:240, color: 'blue', fontSize: 15},
  heada: { paddingRight: 320, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 295, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 130, color: 'blue', fontSize: 15 },
  heafda: { paddingRight:280, color: 'black', fontSize: 15 },

});