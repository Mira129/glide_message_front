import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
})