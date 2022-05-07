import { StyleSheet} from "react-native";
import { COLORS } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    signUpButton: {
        width: 300,
        height: 45,
        borderRadius: 15,
        backgroundColor: COLORS.PINK,
        color: COLORS.TEXT_IN_PINK,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color: COLORS.TEXT_IN_PINK,
    },
})