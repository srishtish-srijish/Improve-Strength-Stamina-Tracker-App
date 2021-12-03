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

export default class BackPain extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/heart.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>
              {' \nCauses Of Different Heart Diseases:'}
            </Text>
            <Text style={styles.heada}>{' 1) High blood pressure:'}</Text>
            <Text>
              {
                'High blood pressure (hypertension) is one of the most important risk factors for CVD. If your blood pressure is too high, it can damage your blood vessels.'
              }
            </Text>
            <Text style={styles.headb}>{' 2)Smoking:'}</Text>
            <Text>
              {
                ' Smoking and other tobacco use is also a significant risk factor for CVD. The harmful substances in tobacco can damage and narrow your blood vessels.'
              }
            </Text>
            <Text style={styles.headc}>{'3)High cholesterol:'}</Text>
            <Text>
              {
                ' Cholestrol is a fatty substance found in the blood. If you have high cholesterol, it can cause your blood vessels to narrow and increase your risk of developing a blood clot.'
              }
            </Text>
            <Text style={styles.headd}>{'4)Inactivity:'}</Text>
            <Text>
              {
                'If you dont exercise regularly, it is more likely that you wll have high blood pressure, high cholesterol levels and be overweight. All of these are risk factors for CVD.\nExercising regularly will help keep your heart healthy. When combined with a healthy diet, exercise can also help you maintain a healthy weight.'
              }
            </Text>

            <Text style={styles.description}>{' \n\nSymptoms :'}</Text>
            <Text>
              {
                '1)Shortness of breath\n2) Chest discomfort\n3) Left shoulder pain\n4) Irregular heartbeat \n5) Heartburn, stomach pain or back pain\n6)Swollen feet\n7) Lack of stamina\n8)Feeling dizzy or lightheaded\n9)Sleep apnea\n10) Constant fatigue\n\n\n'
              }
            </Text>

            <Text style={styles.description}>{' Home Remedies :'}</Text>
            <Text style={styles.heafa}>{' 1)Aerobic Exercise: '}</Text>
            <Text>
              {
                'What it does: Aerobic exercise improves circulation, which results in lowered blood pressure and heart rate, Stewart says. In addition, it increases your overall aerobic fitness, as measured by a treadmill test, for example, and it helps your cardiac output (how well your heart pumps). Aerobic exercise also reduces the risk of type 2 diabetes and, if you already live with diabetes, helps you control your blood glucose.\n\nHow much: Ideally, at least 30 minutes a day, at least five days a week.\n\nExamples: Brisk walking, running, swimming, cycling, playing tennis and jumping rope. Heart-pumping aerobic exercise is the kind that doctors have in mind when they recommend at least 150 minutes per week of moderate activity.\n\n'
              }
            </Text>
            <Text style={styles.heafb}>
              {'2)Resistance Training (Strength Work)'}
            </Text>
            <Text>
              {
                'What it does: Resistance training has a more specific effect on body composition, Stewart says. For people who are carrying a lot of body fat (including a big belly, which is a risk factor for heart disease), it can help reduce fat and create leaner muscle mass. Research shows that a combination of aerobic exercise and resistance work may help raise HDL (good) cholesterol and lower LDL (bad) cholesterol.\n\nHow much: At least two nonconsecutive days per week of resistance training is a good rule of thumb, according to the American College of Sports Medicine.\n\nExamples: Working out with free weights (such as hand weights, dumbbells or barbells), on weight machines, with resistance bands or through body-resistance exercises, such as push-ups, squats and chin-ups.\n\n'
              }
            </Text>

            <Text style={styles.heafc}>
              {'3)Stretching, Flexibility and Balance'}
            </Text>
            <Text>
              {
                'What they do: Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart.\n\n“If you have a good musculoskeletal foundation, that enables you to do the exercises that help your heart,” he says. As a bonus, flexibility and balance exercises help maintain stability and prevent falls, which can cause injuries that limit other kinds of exercise.\n\nHow much: Every day and before and after other exercise.\n\nExamples: Your doctor can recommend basic stretches you can do at home, or you can find DVDs or YouTube videos to follow (though check with your doctor if you’re concerned about the intensity of the exercise). Tai chi and yoga also improve these skills, and classes are available in many communities.\n\n\n\n'
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

  heada: { paddingRight: 230, color: 'blue', fontSize: 15 },
  headb: { paddingRight: 320, color: 'blue', fontSize: 15 },
  headc: { paddingRight: 265, color: 'blue', fontSize: 15 },
  headd: { paddingRight: 315, color: 'blue', fontSize: 15 },
   heafa: { paddingRight: 260, color: 'blue', fontSize: 15 },
  heafb: { paddingRight: 110, color: 'blue', fontSize: 15 },
  heafc: { paddingRight:135, color: 'blue', fontSize: 15 },
 
});
