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

export default class Diabetes extends React.Component {
  render() {
    return (
      <ScrollView>
      
      <View style={styles.container}>
        
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>

            <Image
              source={require('../assets/dia.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{' \nCauses of Type 1 Diabetes :'}</Text>
            <Text>
              {
                ' The exact cause of type 1 diabetes is unknown. Usually, the bodys own immune system — which normally fights harmful bacteria and viruses — mistakenly destroys the insulin-producing (islet, or islets of Langerhans) cells in the pancreas. Other possible causes include:\n(i)Genetics\n(ii)Exposure to viruses and other environmental factors'
              }
            </Text>
            <Text style={styles.description}>{' \nCauses of Type 2 diabetes:'}</Text>
            <Text>
              {
                ' Type 2 diabetes is primarily the result of two interrelated problems:\n(i)Cells in muscle, fat and the liver become resistant to insulin. Because these cells dont interact in a normal way with insulin, they dont take in enough sugar.\n(ii) The pancreas is unable to produce enough insulin to manage blood sugar levels.\n\nExactly why this happens is unknown, but being overweight and inactive are key contributing factors.'
              }
            </Text>




            <Text style={styles.description}>{'\n\n Symptoms of Type 1 Diabetes:'}</Text>
            <Text>{'1)Extreme thirst\n2)Increased hunger (especially after eating)\n3)Dry mouth\n4)Upset stomach and vomiting\n5)Frequent urination\n6)Unexplained weight loss, even though you’re eating and feel hungry\n7)Fatigue\n8)Blurry vision\n8)Heavy, labored breathing (your doctor may call this Kussmaul respiration)\n9)Crankiness or mood changes\n10)Bedwetting in a child who’s been dry at night.'}
            </Text>
        <Text style={styles.description}>{' \nSymptoms of Type 2 Diabetes:'}</Text>
            <Text style={styles.heafda}>{'1) Frequent urination\n2)Increased thirst\n3)Always feeling hungry\n4) Feeling very tired\n5)Blurry vision\n6)Slow healing of cuts and wounds\n7)Tingling and numbness.\n 8) Pain in the hands or feet\n9)Patches of dark skin\n10)Itching and yeast infections.\n\n\n'}
            </Text>



            <Text style={styles.description}>
              {' Home Remedies :'}
            </Text>
            <Text style={styles.head}>
              { " 1) Walking: "}</Text>
                 <Text>{"You dont need a gym membership or expensive exercise equipment to get moving.If you have a supportive pair of shoes and a safe place to walk, you can start today. In fact, you can meet your recommended minimum target for aerobic fitness by going for a brisk 30-minute walk five days a week.\nAccording to a 2014 review, walking can help people with type 2 diabetes lower their blood sugar levels and lose weight.\n\n"
              }
            </Text >
            <Text style={styles.heada}>{'2)Cycling'}</Text>
            <Text>{'Roughly half of people with type 2 diabetes have arthritis. The two conditions have several risk factors in common, including obesity.Diabetic neuropathy, a condition that occurs when the nerves become damaged, can also cause joint pain in people with type 2 diabetes.\nIf you have lower joint pain, consider choosing low-impact exercise. Cycling, for example, can help you meet your fitness goals while minimizing strain on your joints.\n\n'}</Text>


            <Text style={styles.headb}>{'3)Aerobic dance'}</Text>
            <Text>{'Signing up for an aerobic dance or other fitness class might also help you meet your exercise goals. For instance, Zumba is a fitness program that combines dance and aerobic movements for a fast-paced workout.A 2015 study found that women with type 2 diabetes were more motivated to exercise after taking part in Zumba classes for 16 weeks. Participants also improved their aerobic fitness and lost weight.\n\n'}</Text>

            <Text style={styles.headc}>{'4) Pilates'}</Text>
            <Text>{'Pilates is a popular fitness program that’s designed to improve core strength, coordination, and balance. According to a recent study of older women with type 2 diabetes, it may also help improve blood sugar control.\nConsider signing up for a Pilates class at your local gym or Pilates studio. Many instructional videos and books are also available.\n\n'}</Text>

            <Text style={styles.headd}>{'5) Calisthenics'}</Text>
            <Text>{'In calisthenics, you use your own body weight to strengthen your muscles. Common calisthenic exercises include pushups, pullups, squats, lunges, and abdominal crunches.Whether you choose to strengthen your muscles with weights, resistance bands, or your own body weight, try to work out every major muscle group in your body.\nTo give your body time to recover, take a day off from muscle-strengthening activities between each session of strength training, suggests the ADA.\n\n'}</Text>

            <Text style={styles.heade}>{'6) Weightlifting'}</Text>
            <Text>{'Weightlifting and other strengthening activities help build your muscle mass, which can increase the number of calories you burn each day. Strength training may also help improve your blood sugar control, reports the ADA.If you want to incorporate weightlifting into your weekly exercise routine, you can use weight machines, free weights, or even heavy household objects, such as canned goods or water bottles.\nTo learn how to lift weights safely and effectively, consider joining a weightlifting class or asking a professional fitness trainer for guidance.\n\n\n\n'}</Text>
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
  head: { paddingRight: 315, color: 'blue', fontSize: 15 },
  heada: { paddingRight: 330, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 280, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 330, color: 'blue', fontSize: 15 },
  headd: { paddingRight: 295, color: 'blue', fontSize: 15 },
  heade: {paddingRight:295, color: 'blue', fontSize: 15 },
  heafda: { paddingRight: 145, color: 'black', fontSize: 15 },
});