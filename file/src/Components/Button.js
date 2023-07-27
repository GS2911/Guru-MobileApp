import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({onPress,text,style}) => {
  return (
    <View>
        <TouchableOpacity style={style} onPress={onPress}>
          <Text style={styles.continueText}>{text}</Text>
        </TouchableOpacity>
    </View>
    
  )
};

const styles = StyleSheet.create({
    continueText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
})

export default Button