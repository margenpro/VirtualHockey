import { Dimensions, StyleSheet } from "react-native";
import commonStyles from '../../assets/styles/commonStyles'
import { colorsPalette } from "../../assets/styles/colorsPalette";
import fontStyle from '../../assets/styles/fontStyles'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  imagenTitulo: {
    flex: 1,
    width: width * .8,
    height: 80,
    resizeMode: 'contain'
  },
  containerImage: {
    marginTop: 10,
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: colorsPalette.colorOne,
    borderWidth: 4,
  },
  username: {
    ...fontStyle.fontFamily,
    fontSize: 35,
    color: '#ffffff',
  },
  usernameYellow: {
    ...fontStyle.fontFamily,
    fontSize: 35,
    color: '#E9D41B',
  },
  usernameAndPosition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  trophyAndRanking: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  explanationMessage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
    marginHorizontal: 30,
  },

  explanationMessageText: {
    color: colorsPalette.colorThree,
    textAlign: 'center'
  },
  explanationMessageYellow: {
    color: colorsPalette.colorFour,
    textAlign: 'center',
  },
});
