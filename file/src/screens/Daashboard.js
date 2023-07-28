import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Daashboard() {
  return (
    <View>
      <Text style={styles.title}>Daashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
       marginTop:50,
       paddingHorizontal:150,
       paddingVertical:350
    }
})