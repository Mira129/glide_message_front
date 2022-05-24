import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        color: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    pageName: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 10,
        textAlign: 'center',
    },
    backArrow: {
        marginLeft: 34,
        marginTop: 22,
    },
    input: {
        width: 300,
        height: 45,
        margin: 12,
        borderRadius: 15,
        backgroundColor: COLORS.WHITE,
        padding: 10,
    },
    flex: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 15,
        marginBottom: 10,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 30,
        backgroundColor: COLORS.WHITE,
        padding: 10,
    },
    pickerCountry: { 
        width: 150,
        height: 45,
        borderRadius: 15,
        marginLeft: 10,
        padding:10,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerLanguage: { 
        width: 300,
        height: 45,
        borderRadius: 15,
        padding:10,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
})