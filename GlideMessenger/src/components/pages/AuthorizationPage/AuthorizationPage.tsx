import React, { useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView,StatusBar, Text, TextInput } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { LogInButton } from '../../atomic/LogInButton/LogInButton';
import { SignUpButton } from '../../atomic/SignUpButton/SignUpButton';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store/store';
import { ShowError } from '../../atomic/ShowErrorText/ShowErrorText';

type AuthorizationPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AuthorizationPage'>

export const AuthorizationPage: React.FC = () => {
    const navigation = useNavigation<AuthorizationPageNavigationProp>();
    const [password, onChangePassword] = React.useState("");
    const [nikname, onChangeNikname] = React.useState("");
    const dispatch = useDispatch();
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    const errors = [
        {
          code: '418',
          msg: 'User has already loged in or again login out done'
        },
        {
          code: '401',
          msg: 'Uncorrect nickname or password'
        },
        {
          code: '502',
          msg: 'Request error'
        }
    ]

    const login = useCallback(async () => {
        let isLogedIn = false;
        try {
            let user = {
            login: nikname,
            password: password
            };
            console.log(JSON.stringify(user));
            let response = await fetch('https://glidemess.pw/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            console.log('try to fetch');
            if (response.ok) {
                console.log('response.ok');
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully loged in');
                    dispatch({ type: ActionTypes.LOGEDIN, payload: true });
                    isLogedIn = true;
                }
            }
            else{
                console.log("problem", response.status, response.statusText);
                onChangeError(true);
                onChangeErrorText(response.status.toString());
                }
        } 
        catch(error) {
            console.log('error', error);
            onChangeError(true);
            if (error instanceof Error){
                onChangeErrorText(error.message);
            }
            else {
                onChangeErrorText("undefined");
            }
        };
        if (isLogedIn){
            try{
                let response = await fetch('https://glidemess.pw/api/v1/user', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                });
                if (response.ok) {
                    if (response.status >= 200 && response.status < 300) {
                        console.log('Successfully get user');
                        let json = await response.json();
                        if (json.avatar !== ""){
                            json.avatar = 'https://glidemess.pw/api/v1/'+json.avatar;  ///
                        }
                        console.log(json);
                        dispatch({ type: ActionTypes.GETUSER, payload: json });
                    }
                }
                else{
                    console.log("problem", response.status, response.statusText, response);
                    onChangeError(true);
                    onChangeErrorText(response.status.toString());
                    }
            } 
            catch(error) {
                console.log('error', error);
                onChangeError(true);
                if (error instanceof Error){
                    onChangeErrorText(error.message);
                }
                else {
                    onChangeErrorText("undefined");
                }
            };  
            navigation.navigate("MainPage");
        }

    }, [nikname, password, dispatch])
    /*async function logIn() {
        try {
            let user = {
                nikname: nikname,
                password: password,
            };
            let response = await fetch('http://glidemess.pw/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                let data = await response.json();
                if (response.status >= 200 && response.status < 300) {
                    () => navigation.navigate('MainPage');
                }
                return data;
            };
            // else {
            //     console.log(response.statusText);
            // };
        } 
        catch(error) {
            console.log(error);
        }
    }; */

    async function logOut() {
        let response = await fetch('https://glidemess.pw/api/v1/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            console.log('Successfully loged out');
        } else {
            console.log('error', response.status);
            onChangeError(true);
            onChangeErrorText(response.status.toString());
        }
    };

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
                            text= "Log Out"
                            onPress={() => logOut()}>
                        </LogInButton>
                        <LogInButton
                            style={styles.buttonContainer}
                            text= "Log In"
                            onPress={ login }>
                        </LogInButton>
                        <SignUpButton
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('RegistrationPage1')}>
                        </SignUpButton>
                        <ShowError 
                        error={error}
                        errorText={errorText}
                        errorTypes={errors}
                        >
                        </ShowError>
                    </ScrollView>
        </SafeAreaView>
    )
};

export default AuthorizationPage;