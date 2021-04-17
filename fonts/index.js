import { useFonts } from 'expo-font';

const [loaded] = useFonts({
    comfortaa: require('../assets/fonts/Comfortaa-YJnL.ttf'),
    comfortaaBold: require('../assets/fonts/ComfortaaBold-rmEK.ttf'),
    comfortaaLight: require('../assets/fonts/ComfortaaLight-MJ0v.ttf'),
})


export function getFont() {
    return loaded
}