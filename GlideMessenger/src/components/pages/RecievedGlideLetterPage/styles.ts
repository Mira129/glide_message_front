import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        color: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        backgroundColor: COLORS.WHITE,
        width: Dimensions.get('window').width - 100,
        minHeight: Dimensions.get('window').height - 200,
        color: 'white',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 50
        //justifyContent: 'center',
    },
    backArrow: {
        marginLeft: 34,
        marginTop: 22,
    },
    topContainer:{
        width: Dimensions.get('window').width  -90,
        marginTop:20,
        height:100,
        color: "black",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerSmall:{
        height: 80,
        width: 80,
        color: "black",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text:{
        color: "black",
        fontSize: 18,
        marginLeft: 12,
    },
    flag: {
        width: 22,
        height: 17,
        marginLeft: 55,
    },
    message: {
        width: Dimensions.get('window').width -160,
        minHeight: 50,
        marginBottom: 12,
        backgroundColor: COLORS.WHITE,
        fontSize:14,

    },
    title: {
        width: Dimensions.get('window').width -160,
        minHeight: 50,
        marginBottom: 12,
        backgroundColor: COLORS.WHITE,
        fontSize:18,
    },
    
})