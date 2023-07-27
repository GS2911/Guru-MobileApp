import { View, Text, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input'
import Button from '../Components/Button';

export default function Login() {
  const[value,setValue] = useState();

  const navigation = useNavigation();

  const handleRegister =() =>{
    navigation.navigate('Register')
  }

  const handleContinue =() =>{
    navigation.navigate('Verification')
  }

  return (
    <ImageBackground source={require('../assets/guru.png')} style={styles.image}>
      <View style={styles.maincontainer}>
        <Text style={styles.text1}>Welcome back</Text>
        <Text style={styles.text2}>Login to your own Account!</Text>
        
        {/* <View style={styles.inputContainer}>
          <Image source={require('../assets/indianflag.jpg')} style={styles.flag} />
          <Text style={styles.phoneCode}>+91</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View> */}

        <View style={styles.phonenumber}>
        <PhoneInput
            placeholder="Phone Number"
            value={value}
            onChange={setValue}
            textContainerStyle={styles.phoneInputTextContainer}
            flagButtonStyle={styles.flagButtonStyle}
            codeTextStyle={{ color: '#000' }} 
          />
        </View> 

        <Button
        style={styles.continueButton}
        text={'Continue'}
        onPress={handleContinue}
        />

        <View style={styles.textinput}>
          <Text style={styles.text3}>We'll send OTP for Verification</Text>
        </View>

        <View style={styles.iconrow}>

        <TouchableOpacity style={styles.continue}>
          <Icon name="facebook" size={20} color="#fff" />
          <Text style={styles.social}>Log in with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continue1}>
          <Image source={require('../assets/Google.png')} style={styles.google}/> 
          <Text style={styles.social1}>Log in with Google</Text>
        </TouchableOpacity>

        <Button
        style={styles.continue2}
        text={'Register'}
        onPress={handleRegister}
        />
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  text1: {
    color: '#ffffff',
    fontSize: 35,
  },
  text2: {
    color: "#ffffff",
    fontSize: 25,
  },
  maincontainer: {
    marginTop: '25%',
    paddingHorizontal: '5%',
    justifyContent:'center'
  },

  /*inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 20,
  },*/

  phonenumber:{
    marginTop: '20%',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:20,
  },
  phoneInputTextContainer:{
    opacity:0.5
  },

  /*flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  phoneCode: {
    fontSize: 18,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
  },*/

  continueButton: {
    backgroundColor: '#0A9EF1',
    marginTop: 35,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    opacity:0.5
  },

  text3:{
    color: '#ffffff',
    fontSize: 20,
  },
  textinput:{
    marginTop:'5%',
    alignItems:'center'
  },
  iconrow:{
    justifyContent:'center',
    marginTop:25
  },
  continue: {
    backgroundColor: '#3369DB',
    marginTop: 25,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  social: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  continue1: {
    backgroundColor: '#FFFFFF',
    marginTop: 35,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  social1:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000000',
    marginRight:10,
  },
  continue2: {
    backgroundColor: '#0A9EF1',
    marginTop: 60,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center',
  },
  social2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  /* flagButtonStyle:{
    opacity:0.5
   }*/
  google:{
    height:'78%',
    width:'6%',
    marginRight:25
  } 
});

