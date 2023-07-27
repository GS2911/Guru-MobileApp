import { View, Text, TextInput ,StyleSheet} from 'react-native'
import React from 'react'

const Inputfield = ({placeholder,placeholderTextColor,keyboardType,style,secureTextEntry}) => {
  return (
    <View>
        <TextInput 
           placeholder={placeholder}
           placeholderTextColor={placeholderTextColor}
           keyboardType={keyboardType}
           style={style}
           secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
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
    input: {
        fontSize: 18,
        textAlignVertical:'top',
    },
})

export default Inputfield