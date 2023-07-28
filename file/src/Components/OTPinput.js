import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const OTPinput = ({onChangeText,keyboardType,maxLength,refcallback}) => {
  return (
    <View style={styles.otpBox}>
    <TextInput 
       style={styles.otpText}
       keyboardType={keyboardType}
       maxLength={maxLength}
       onChangeText={onChangeText}
       ref={refcallback}
    />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default OTPinput