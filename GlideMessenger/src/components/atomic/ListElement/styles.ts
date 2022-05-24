import { Dimensions, StyleSheet} from "react-native";
import { COLORS } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    pressable: {
        width: Dimensions.get('window').width,
        height: 90,
        backgroundColor: COLORS.WHITE,
        color: "black",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomColor: COLORS.GREY_TIP,
        borderBottomWidth: 1,
    },
    container:{
        width: Dimensions.get('window').width  -60,
        height: 90,
        color: "black",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerSmall:{
        height: 85,
        color: "black",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerTime:{
        height: 85,
        color: "black",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    text:{
        color: "black",
        fontSize: 18,
        marginLeft: 12,
    },
    textSmall:{
        color: "black",
        fontSize: 12,
    },
    flag: {
        width: 22,
        height: 17,
        marginLeft: 100,
    },
    flagContainer: {
        width: 22,
        height: 17,
        overflow: 'hidden',
        marginRight: 10,
    }
})