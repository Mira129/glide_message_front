import { StyleSheet} from "react-native";
import { COLORS } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    nextButton: {
        width: 100,
        height: 45,
        borderRadius: 15,
        backgroundColor: COLORS.YELLOW,
        color: COLORS.TEXT_IN_YELLOW,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color: COLORS.TEXT_IN_YELLOW,
    },
})