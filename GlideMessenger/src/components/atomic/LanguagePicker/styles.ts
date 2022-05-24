import { StyleSheet } from "react-native";
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
    picker: { 
        height: 45,
        width: 300,
        color: COLORS.GREY_TIP,
        fontSize: 8,
    },
    pickerContainer: { 
        backgroundColor:'white',
        borderRadius: 15,
        height: 45,
        width: 300,
        fontSize: 8,
        justifyContent: "center",
        marginBottom: 15,
    },
})