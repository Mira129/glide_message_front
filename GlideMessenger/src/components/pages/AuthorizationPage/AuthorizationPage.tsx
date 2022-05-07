import React from 'react';
import { SafeAreaView, ScrollView,StatusBar, Text, TextInput } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { LogInButton } from '../../atomic/LogInButton/LogInButton';
import { SignUpButton } from '../../atomic/SignUpButton/SignUpButton';

type AuthorizationPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AuthorizationPage'>

export const AuthorizationPage = () => {
    const navigation = useNavigation<AuthorizationPageNavigationProp>();
    const [password, onChangePassword] = React.useState("");
    const [nikname, onChangeNikname] = React.useState("");
    return(
        <SafeAreaView style={styles.container} >
                <StatusBar backgroundColor="#759FC9"/>
                    <ScrollView>
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
                        <LogInButton
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('RegistrationPage1')}>
                        </LogInButton>
                        <SignUpButton
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('RegistrationPage1')}>
                        </SignUpButton>
                    </ScrollView>
        </SafeAreaView>
    )
}