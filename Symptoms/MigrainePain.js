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

export default class MigrainePain extends React.Component {
  render() {
    return (
      <ScrollView>
      
      <View style={styles.container}>
        
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
           
            <Image
              source={require('../assets/migrainp.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{'\n Causes :'}</Text>
            <Text>
              {
                ' 1) Stress at work or home can cause migraines\n2)A change of weather or barometric pressure can prompt a migraine\n3)Aged cheeses and salty and processed foods might trigger migraines. So might skipping meals'
              }
            </Text>
            <Text>
              {
                '4)Missing sleep or getting too much sleep can trigger migraines in some people\n 5)Drinks. These include alcohol, especially wine, and too much caffeine, such as coffee'
              }
            </Text>
            <Text style={styles.description}>{' \nSymptoms :'}</Text>
            <Text>{'1)Intense throbbing or dull aching pain on one side of your head or both sides.\n2)Feeling cold or sweaty.\n3)Tender scalp.\n4)Stiff or tender neck.\n5)Being bothered by light, noise, or odors.'}
            </Text>

            <Text style={styles.description}>
              {'\n Home Remedies :'}
            </Text>
            <Text style={styles.heada}>
              { " 1)Apply lavender oil: "}</Text>
                 <Text>{"Inhaling lavender essential oil may ease migraine pain. According to 2012 research, people who inhaled lavender oil during a migraine attack for 15 minutes experienced faster relief than those who inhaled a placebo. Lavender oil may be inhaled directly or applied diluted to the temples.\n\n"
              }
            </Text >
            <Text style={styles.headb}>{'2)Try acupressure'}</Text>
            <Text>{'Acupressure is the practice of applying pressure with the fingers and hands to specific points on the body to relieve pain and other symptoms. According to a 2014 systematic reviewTrusted Source, acupressure is a credible alternative therapy for people in pain from chronic headaches and other conditions. A separate study found acupressure may help relieve migraine-associated nausea.\n\n'}</Text>


            <Text style={styles.headc}>{'3)Go for ginger'}</Text>
            <Text>{'Ginger is known to ease nausea caused by many conditions, including migraines. It may also have other migraine benefits. According to researchTrusted Source, ginger powder decreased migraine severity and duration as well as the prescription drug sumatriptan, and with fewer side effects.\n\n'}</Text>

            <Text style={styles.headd}>{'4)Sign up for yoga'}</Text>
            <Text>{'Yoga uses breathing, meditation, and body postures to promote health and well-being. ResearchTrusted Source shows yoga may relieve the frequency, duration, and intensity of migraines. It’s thought to improve anxiety, release tension in migraine-trigger areas, and improve vascular health.\nAlthough researchers conclude it’s too soon to recommend yoga as a primary treatment for migraines, they believe yoga supports overall health and may be beneficial as a complementary therapy.\n\n\n\n'}</Text>
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
  headd: {paddingRight:270, color: 'blue', fontSize: 15 },
  heada: { paddingRight: 250, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 270, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 290, color: 'blue', fontSize: 15 },
  heafda: { paddingRight:280, color: 'black', fontSize: 15 },
});