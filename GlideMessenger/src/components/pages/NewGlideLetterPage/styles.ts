import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE_BACKGROUND,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        color: 'white',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    backArrow: {
        marginLeft: 34,
        marginTop: 22,
    },
    pageName: {
        color: 'white',
        fontSize: 32,
        paddingBottom: 10,
        //marginTop: 42,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputAge: {
        width: 80,
        height: 45,
        marginRight: 55,
        borderRadius: 15,
        padding:10,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerCountry: { 
        height: 45,
        width: 150,
        color: COLORS.GREY_TIP,
        fontSize: 8,
    },
    pickerLanguage: { 
      height: 45,
      width: 300,
      color: COLORS.GREY_TIP,
      fontSize: 8,
    },
    flex: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 15,
        marginBottom: 10,
    },
    listContainer: {
        width: 300,
        minHeight: 200,
        backgroundColor: COLORS.WHITE,
        color: "black",
        fontSize: 12,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
    },
    message: {
        width: 280,
        minHeight: 50,
        marginBottom: 12,
        backgroundColor: COLORS.WHITE,
        borderBottomColor: COLORS.GREY_TIP,
    },
    title: {
        width: 280,
        height: 50,
        marginBottom: 12,
        backgroundColor: COLORS.WHITE,
        borderBottomColor: COLORS.GREY_TIP,
        borderBottomWidth: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 30,
        marginTop: 30,
    }
})