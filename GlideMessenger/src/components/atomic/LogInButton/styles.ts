import { StyleSheet} from "react-native";
import { COLORS } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    logInButton: {
        width: 300,
        height: 45,
        borderRadius: 15,
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLUE_ICON,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color: COLORS.BLUE_ICON,
    },
})