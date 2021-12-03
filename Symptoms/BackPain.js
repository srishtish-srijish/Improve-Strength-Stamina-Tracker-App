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

export default class BackPain extends React.Component {
  render() {
    return (
      <ScrollView>
      
      <View style={styles.container}>
        
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>

            <Image
              source={require('../assets/back_pain.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{' \nCauses :'}</Text>
            <Text>
              {
                ' 1) Muscle or ligament strain: Repeated heavy lifting or a sudden awkward movement can strain back muscles and spinal ligaments. If you are in poor physical condition, constant strain on your back can cause painful muscle spasms.\n2)Lack of exercise: Weak, unused muscles in your back and abdomen might lead to back pain\n3)Excess weight: Excess body weight puts extra stress on your back.'
              }
            </Text>
            <Text>
              {
                '4)Age. Back pain is more common as you get older, starting around age 30 or 40.\n'
              }
            </Text>
            <Text style={styles.description}>{' \nSymptoms :'}</Text>
            <Text>{'1)Spreads down one or both legs, especially if the pain extends below the knee. \n2)Causes weakness, numbness or tingling in one or both legs\n3)Is accompanied by a fever'}
            </Text>

            <Text style={styles.description}>
              {'\n Home Remedies :'}
            </Text>
            <Text style={styles.heada}>
              { " 1)Exercise to get muscles moving: "}</Text>
                 <Text>{"It can be challenging to get up and move when back pain strikes. However, a short walk, yoga, water exercise, or another low-impact activity can often help alleviate back pain.Exercise may loosen tense muscles and release endorphins, which are the brain’s natural painkillers.A person can also consider starting a daily exercise program, including strength training and stretching, to help keep muscles flexible and strong.\nRegular exercise may prevent future episodes of back pain that are due to tight muscles.\n\n"
              }
            </Text >
            <Text style={styles.headb}>{'2)Stretch'}</Text>
            <Text>{'Touching the toes: In addition to stretching the hamstrings, bending forward to reach your toes will help loosen the muscles in the lower back.\n\nCobra Pose: Lying on your stomach, with your hands face down beside the shoulders, gently lift your chest up so that the top of your head points toward the ceiling.\n\nCat-Cow Pose: Beginning on your hands and knees, slowly alternate between arching your back toward the ceiling and dipping it toward the floor.\n\nChild’s Pose: Sitting on the heels with your knees hip-width apart, lean forward to place your head on the floor, stretching your arms out in front of your head.\n\n'}</Text>


            <Text style={styles.headc}>{'3)Try Arnica'}</Text>
            <Text>{'Arnica is a homeopathic remedy that people can apply directly to the skin to treat muscle pain, swelling, bruising, and minor injuries.\nMany pharmacies sell Arnica creams and gels. It is also available online.\nWhile there is little scientific research to prove that Arnica is effective, it has a low risk of side effects and some people may find it helpful.\nOne case report found that arnica helped relieve chronic osteoarthritis pain when combined with acupuncture and massage.\n\n'}</Text>

            <Text style={styles.headd}>{'4)Switch shoes'}</Text>
            <Text>{'Wearing shoes that do not fit or that offer no support could cause muscle strains in the back, legs, and even neck.\nHigh heels, for example, can throw off the body’s alignment, leading to lower back pain. One study found a link between wearing high heels for long periods and having back pain.\nWearing shoes that are very flat can also put added strain on the feet and back.\nIf a person experiences recurrent back pain, they should consider switching to shoes that fit correctly and support the feet. A podiatrist or foot specialist can help a person find proper footwear if necessary.\n\n\n\n'}</Text>
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


    headd: {paddingRight:280, color: 'blue', fontSize: 15 },
  heada: { paddingRight: 150, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 330, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 310, color: 'blue', fontSize: 15 },
});