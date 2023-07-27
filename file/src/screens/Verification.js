import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, {useRef, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../Components/Button';

export default function Verification() {

  const navigation = useNavigation();

  const handleBackButton =()=>{
    navigation.goBack();
  }

  const [enterOTP,setenterOTP] = useState('');
  const commonOTP ='1234';

  const handleSubmit =()=>{
    if (enterOTP === commonOTP){
      navigation.navigate('Verification2')
    } else{
      alert('Incorrect OTP. place try again.')
    }
  }

  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()

  return (
    <ImageBackground style={styles.image} source={require('../assets/guru.png')}>
      <Icon name="arrow-left" size={25} color="#FFFFFF" onPress={handleBackButton} style={styles.backIcon} />
        <View style={styles.maincontainer}>
          <Text style={styles.text1}>Verification</Text>
          <Text style={styles.text2}>Enter the OTP code form the phone we just sent you.</Text>
        </View>
        <View style={styles.otpcontainer}>
          <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setenterOTP(text);
                text && secondInput.current.focus()
              }}
            />
          </View >
          <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setenterOTP(enterOTP + text);
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setenterOTP(enterOTP + text);
                text ? fourthInput.current.focus() : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput style={styles.otpText}
              keyboardType='number-pad'
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setenterOTP(enterOTP + text);
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Dindn't receive OTP Code! Resend</Text>
        </View>

        <View>
          <Button 
          style={styles.continueButton}
          text={'Sumbit'}
          onPress={handleSubmit}
          />
        </View>
        
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 60,
    left: 25,
  }, 
  image:{
    width:'100%',
    height:'100%'
  },
  text1: {
    color: '#ffffff',
    fontSize: 34,
  },
  text2: {
    color: "#ffffff",
    fontSize: 20,
  },
  maincontainer: {
    marginTop: '28%',
    paddingHorizontal: '8%',
    justifyContent:'center'
  },
  otpcontainer:{
    marginHorizontal:1,
    marginBottom:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
    marginTop:25
  },
  otpBox:{
    borderRadius:5,
    backgroundColor:'#C4C4C4',
    borderWidth:0.5
  },
  otpText:{
    fontSize:25,
    padding:0,
    textAlign:'center',
    paddingHorizontal:14,
    paddingVertical:8
  },   
  text:{
    alignItems:'center',
    color:'#fff',
    marginHorizontal:45,
    marginTop:10,
    fontSize:17
  },
  continueButton: {
    backgroundColor: '#0A9EF1',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal:'10%',
    opacity:0.5
  },
  continueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
})