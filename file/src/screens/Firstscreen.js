import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Firstscreen() {
  const navigation = useNavigation(); 

  const handleSkip = () => {
    navigation.navigate('Secondscreen'); 
  };
  
  return (
    <View>
      <View style={styles.maincontainer}>
      <Image source={require('../assets/Doctor.1.jpg')} style={styles.image} />
      <Image source={require('../assets/Doctor.2.jpg')} style={styles.image} />
      </View>
      <View style={styles.image2}>
      <Image source={require('../assets/Doctor3.jpg')} style={styles.image1}/>
      </View>
      <View style={styles.textall}>
        <Text style={styles.text}>AT</Text>
        <View>
            <Text style={styles.texts}>ANYWHERE</Text>
            <Text style={styles.texts}>ANYTIME</Text>
      </View>
      </View>
      <View>
        <Text style={styles.text3}>BOOK your appointment online and connect with a doctor to get medical advice ay your place place with your perferred timings</Text> 
      </View> 
      <View>
        <Text onPress={handleSkip} style={styles.skip1}>Skip</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        justifyContent:'space-around',
        flexDirection:'row'
    },
    image:{
        width:119,
        height:119 ,
        marginTop:'35%',
        borderWidth:8,
        borderColor:'#c4c4c4'
    },
    image1:{
        width:320,
        height:140,
        justifyContent:'center',
        borderWidth:8,
        borderColor:'#c4c4c4'
    },
    image2:{
        marginTop:'10%',
        justifyContent:'center',
        marginHorizontal:'9%',
    },
    textall:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:"12%"
    },
    texts:{
        fontFamily:'Abhaya Libre',
        fontSize:25,
        fontWeight:'400',
        letterSpacing:0,
        lineHeight:45,
        alignContent:'flex-start',
        paddingRight:'20%',
    },
    text:{
        fontFamily: 'Abhaya Libre',
        fontSize: 70,
        fontWeight: '400',
         lineHeight: 94,
        letterSpacing: 0,
    },
    text3:{
        fontFamily: 'Abhaya Libre',
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: 0,
        alignItems:'center',
        marginHorizontal:'5%',
        marginTop:'5%'
    },
    skip1:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:'83%',
      marginTop:'15%',
      fontSize:20
    }
})