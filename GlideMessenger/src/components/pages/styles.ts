import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        color: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    pageName: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 10,
        textAlign: 'center',
    },
    button: {
        paddingBottom: 10,
        width: Dimensions.get('window').width / 2,
    },
    backArrow: {
        marginLeft: 34,
        marginTop: 22,
    },
    LogInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    LogInButtonText:{
        width: 200,
        height: 45,
        borderRadius: 15,
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLUE_ICON,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    SignUpButton: {
        width: 200,
        height: 45,
        borderRadius: 15,
        backgroundColor: COLORS.PINK,
        color: COLORS.TEXT_IN_PINK,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 300,
        height: 45,
        margin: 12,
        borderRadius: 15,
        backgroundColor: COLORS.WHITE,
        padding: 10,
    },
    picker: { 
        height: 45,
        width: 150,
        color: COLORS.GREY_TIP,
        fontSize: 8,
    },
    pickerContainer: { 
        backgroundColor:'white',
        borderRadius: 15,
        height: 45,
        width: 150,
        fontSize: 8,
        justifyContent: "center",
        marginLeft: 10,
    },
})