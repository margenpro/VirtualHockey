import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

export async function getFont() {
    await Font.loadAsync({
        comfortaa: require('../assets/fonts/Comfortaa-YJnL.ttf'),
        comfortaaBold: require('../assets/fonts/ComfortaaBold-rmEK.ttf'),
        comfortaaLight: require('../assets/fonts/ComfortaaLight-MJ0v.ttf'),
    })
}