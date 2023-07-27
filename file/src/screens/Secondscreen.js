import { View, Text, Image,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Secondscreen() {

    const navigation = useNavigation();

    const handleSkip =() => {
        navigation.navigate('Login');
    };
  return (
    <View style={styles.container}>
      <Image style={styles.imagecontainer} source={require('../assets/Screenshot1.png')}/>
      <View style={styles.textcontainer}>
      <Text style={styles.text1}>Get consulted with experts</Text>
      <Text style={styles.text1}>through VIDEO CALL,</Text>
      <Text style={styles.text1}>CHAT and VISIT</Text>
      </View>
      <View style={styles.textcontainer1}>
      <Text style={styles.text2}> Feeling UNWELL or looking forward to get </Text>
      <Text style={styles.text2}> suggestions with your preference? </Text>
      </View>
      <View>
        <Text onPress={handleSkip} style={styles.skip1}>Skip</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imagecontainer:{
        marginHorizontal:'15%',
        marginTop:'35%',
    },
    container:{
        backgroundColor:'#FFFFFF',
        flex:1
    },
    textcontainer:{
        marginTop:'25%'
    },
    text1:{
        fontFamily: 'Abhaya Libre',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft:'2%'
    },
    textcontainer1:{
        marginTop:'18%'
    },
    text2:{
        fontFamily: 'Abhaya Libre',
        fontSize:20,
        fontWeight:'600',
        lineHeight:25,
        textAlign:'center'
    },
    skip1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'83%',
        marginTop:'15%',
        fontSize:20
       }
})