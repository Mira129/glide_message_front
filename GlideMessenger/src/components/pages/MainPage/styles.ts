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
    hello: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 10,
        marginTop: 42,
        marginBottom: 100,
        textAlign: 'center',
    },
    flex: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 15,
        marginBottom: 10,
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