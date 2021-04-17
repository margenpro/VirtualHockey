import { useFonts } from 'expo-font';

export function getFont() {
    let comfortaa
    try {
        comfortaa = useFonts({
            comfortaa: require('../assets/fonts/Comfortaa-YJnL.ttf'),
            comfortaaBold: require('../assets/fonts/ComfortaaBold-rmEK.ttf'),
            comfortaaLight: require('../assets/fonts/ComfortaaLight-MJ0v.ttf'),
        })
    } catch (e) {
        console.log(e)
    }
    return comfortaa
}