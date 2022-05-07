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
    backArrow: {
        marginLeft: 34,
        marginTop: 22,
    },
    button: {
        marginTop: 100,
        marginLeft: 210,
    },
    pageName: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 10,
        marginTop: 42,
        marginBottom: 100,
        textAlign: 'center',
    },
    input: {
        width: 300,
        height: 45,
        margin: 12,
        borderRadius: 15,
        backgroundColor: COLORS.WHITE,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
})