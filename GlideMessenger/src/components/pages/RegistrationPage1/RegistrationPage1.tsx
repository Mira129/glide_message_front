import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, ScrollView, StatusBar, SafeAreaView, TextInput } from "react-native";
import { NextButton } from "../../atomic/NextButton/NextButton";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";

type RegistrationPage1NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegistrationPage1'>

export const RegistrationPage1 = () => {
    const navigation = useNavigation<RegistrationPage1NavigationProp>();
    const [password, onChangePassword] = React.useState("");
    const [nikname, onChangeNikname] = React.useState("");
    const [fullname, onChangeFullname] = React.useState("");
    return(
        <SafeAreaView style={styles.container} >
                <StatusBar backgroundColor="#759FC9"/>
                    <ScrollView>
                        <BackArrow 
                            onPress={() => navigation.navigate('AuthorizationPage')} 
                            style={styles.backArrow}>
                        </BackArrow>
                        <Text style={styles.pageName}>Log In</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNikname}
                            value={nikname}
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
                            onPress={() => navigation.navigate('RegistrationPage2')}
                            content= "Next">
                        </NextButton>
                    </ScrollView>
        </SafeAreaView>
    )
}