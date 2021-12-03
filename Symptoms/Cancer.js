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

export default class Cancer extends React.Component {
  render() {
    return (
     <ScrollView>
      
      <View style={styles.container}>
        
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/cancer.png')}
              style={{ width: 395 }}></Image>
            <Text style={styles.description}>{' \nCauses :'}</Text>
            <Text>
              {
                ' Cancer is caused by changes (mutations) to the DNA within cells. The DNA inside a cell is packaged into a large number of individual genes, each of which contains a set of instructions telling the cell what functions to perform, as well as how to grow and divide. Errors in the instructions can cause the cell to stop its normal function and may allow a cell to become cancerous.\n'
              }
            </Text>
            <Text style={styles.description}>{' Symptoms :'}</Text>
            <Text>{'1)Fatigue \n 2)Lump or area of thickening that can be felt under the skin\n3)Weight changes, including unintended loss or gain\n4)Skin changes, such as yellowing, darkening or redness of the skin, sores that wont heal, or changes to existing moles\n5)Changes in bowel or bladder habits\n6)Persistent cough or trouble breathing\n7)Difficulty swallowing\n8)Hoarseness\n9)Persistent indigestion or discomfort after eating\n10)Persistent, unexplained muscle or joint pain\n11)Persistent, unexplained fevers or night sweats\n12)Unexplained bleeding or bruising'}
            </Text>

            <Text style={styles.description}>
              {'\n Home Remedies :'}
            </Text>
                 <Text>{"1)Ginger can help you manage nausea and vomiting from chemotherapy. But it may also thin your blood, so don’t take any before surgery.\n"
              }
            </Text >
              <Text>{"2)Zinc may help prevent taste changes, a side effect of radiation, chemotherapy, and some pain medicines.\n"
              }
            </Text >
              <Text>{"3)Ginseng, in high doses, was found in a Mayo Clinic-led study to reduce cancer-related fatigue.\n"
              }
            </Text >
              <Text>{"4)Guarana, a natural stimulant found in a plant native to the Amazon basin, has also been found to help with chemotherapy-related fatigue, especially in breast cancer patients.\n"
              }
            </Text >
          
            <Text>{'5)Acupuncture.This form of traditional Chinese medicine involves putting very thin needles into your skin to improve your body’s energy flow. Some Westerners believe the needles stimulate your body’s natural pain-killing chemicals. Acupuncture is most often used for pain, but it may also lessen other symptoms associated with cancer treatment, like:\n(i)Nausea and vomiting\n(ii)Dry mouth\n(iii)Anxiety and hot flashes\n'}</Text>


            <Text>{'6)Massage: One study of 1,290 cancer patients found that pain, anxiety, fatigue, and nausea dropped by half among those who got massage.\n'}</Text>

            <Text>{'7)Hypnosis: A trained practitioner will put you into a state of deep concentration that helps you focus on things other than your symptoms. It may ease anxiety, pain, stress, and even nausea.\n\n\n\n'}</Text>
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
  head:{paddingRight:5, color: 'blue', fontSize: 15},
  heafd: {paddingRight:200, color: 'blue', fontSize: 15 },
});