import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        color: 'white',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 15,
        marginBottom: 10,
    },
    backArrow: {
        marginLeft: 34,
        marginTop: 22,
    },
    button: {
        marginTop: 80,
        marginLeft: 240,
    },
    buttonContainer: {
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 10,
    },
    pageName: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 10,
        //marginTop: 42,
        marginBottom: 20,
        textAlign: 'center',
    },
      inputAge: {
        width: 80,
        height: 45,
        marginRight: 55,
        borderRadius: 15,
        padding:10,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputAbout: {
        width: 300,
        height: 100,
        marginBottom: 12,
      },
      aboutContainer: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: 15,
        width: 300,
        height: 100,
        marginTop: 12,
        backgroundColor: COLORS.WHITE,
        padding: 10,
        marginBottom: 35
      },
      pickerCountry: { 
        height: 45,
        width: 150,
        color: COLORS.GREY_TIP,
        fontSize: 8,
    },
    pickerLanguage: { 
      height: 45,
      width: 300,
      color: COLORS.GREY_TIP,
      fontSize: 8,
  },
})