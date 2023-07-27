import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firstscreen from '../screens/Firstscreen';
import Secondscreen from '../screens/Secondscreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import Verification2 from '../screens/Verification2';

const Stack = createStackNavigator();

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Firstscreen' component={Firstscreen}/>
            <Stack.Screen name='Secondscreen' component={Secondscreen}/>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Verification' component={Verification} />
            <Stack.Screen name='Verification2' component={Verification2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}