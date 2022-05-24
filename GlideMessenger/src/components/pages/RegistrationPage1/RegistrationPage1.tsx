import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, ScrollView, StatusBar, SafeAreaView, TextInput, View } from "react-native";
import { NextButton } from "../../atomic/NextButton/NextButton";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../../store/store";

type RegistrationPage1NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegistrationPage1'>

export const RegistrationPage1 = () => {
    const navigation = useNavigation<RegistrationPage1NavigationProp>();
    const [password, onChangePassword] = React.useState("");
    const [nickname, onChangeNikname] = React.useState("");
    const [fullname, onChangeFullname] = React.useState("");
    const dispatch = useDispatch();
    console.log("RegistrationPage1 nick", nickname, "lalala");
    async function TransferData() {
        console.log(nickname);
        dispatch({ type: ActionTypes.TRANSFERDATA, payload: {
            nickname: nickname,
            password: password,
            fullname: fullname
        }});
        navigation.navigate('RegistrationPage2', {
            nickname: nickname,
            password: password,
            fullname: fullname
        }
        )
    };
    return(
        <SafeAreaView style={styles.container} >
                <StatusBar backgroundColor="#759FC9"/>
                    <ScrollView>
                        <BackArrow 
                            onPress={() => navigation.navigate('AuthorizationPage')} 
                            style={styles.backArrow}>
                        </BackArrow>
                        <View style={styles.center}>
                            <Text style={styles.pageName}>Sign up1</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNikname}
                                value={nickname}
                                placeholder="Nikname"
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePassword}
                                value={password}
                                placeholder="Password"
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeFullname}
                                value={fullname}
                                placeholder="Fullname"
                                keyboardType="default"
                            />
                            <NextButton
                                style={styles.button}
                                onPress={() => TransferData()}
                                content= "Next">
                            </NextButton>
                        </View>
                    </ScrollView>
        </SafeAreaView>
    )
}