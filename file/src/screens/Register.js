import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Inputfield from '../Components/Inputfield';
import Button from '../Components/Button';

export default function Register() {

    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handlelogin =() => {
        navigation.navigate('Login')
    }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <ImageBackground source={require('../assets/guru.png')} style={styles.image}>
        <ScrollView>
        <Icon name="arrow-left" size={25} color="#FFFFFF" onPress={handleBackButton} style={styles.backIcon} />
        <View style={styles.maincontainer}>
            <Text style={styles.text1}>Register</Text>
            <Text style={styles.text2}>create your Account!</Text>
        </View>
        <View style={styles.inputContainer}>
            <Inputfield 
               style={styles.input}
               placeholder='Username'
               placeholderTextColor='#fff'
               
            />
        </View>
        <View style={styles.inputContainer}>
            <Inputfield
               style={styles.input}
               placeholder='Email'
               placeholderTextColor='#fff'
               
            />
        </View>
        <View style={styles.inputContainer}>
            <Inputfield
               style={styles.input}
               placeholder='Mobile Number'
               keyboardType='phone-pad'
               placeholderTextColor='#fff'
            />
        </View>
        <View style={styles.inputContainer}>
            <Inputfield
               style={styles.input}
               placeholder='NIRC Number'
               keyboardType='phone-pad'
               placeholderTextColor='#fff'
            />
        </View>
        <View style={styles.inputContainer}>
            <Inputfield
               style={styles.input}
               placeholder='Password'
               secureTextEntry={!passwordVisible}
               placeholderTextColor='#fff'
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                <Icon name={passwordVisible?'eye-slash':'eye'} size={20} color='#000' />
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
            <Inputfield
               style={styles.input}
               placeholder='Confirm Password'
               secureTextEntry={!confirmPasswordVisible}
               placeholderTextColor='#fff'
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
                <Icon name={confirmPasswordVisible? 'eye-slash':'eye'} size={20} color='#000' />
            </TouchableOpacity>
        </View>
        <View>

        <Button
        style={styles.continueButton}
        text={'Continue'} 
        onPress={handlelogin}
        />
        
        </View>
        </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
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
        marginTop: '28%',
        paddingHorizontal: '5%',
        justifyContent:'center'
    },
    inputContainer: {
        alignItems: 'flex-start',
        marginTop: '7%',
        backgroundColor: '#C4C4C4',
        padding: 10,
        borderRadius: 20,
        marginHorizontal:'6%',
        paddingHorizontal:'10%',
        opacity:0.4
    },
    eyeIcon: {
        position: 'absolute',
        right: 25,
        top: '35%', 
    },
    continueButton: {
        backgroundColor: '#0A9EF1',
        marginTop: 60,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal:'6%'
    },
    continueText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    backIcon: {
        position: 'absolute',
        top: 60,
        left: 25,
    },  
    input: {
        fontSize: 18,
        textAlignVertical:'top',
    },    
})