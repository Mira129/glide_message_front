import React, { useEffect } from "react";
import {styles} from './styles';
import { SafeAreaView, Text, ScrollView, StatusBar, View } from "react-native";
import { useIsFocused, useNavigation  } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, IState } from "../../../store/store";
import { DefaultRoundButton } from "../../atomic/DefultRoundButton/DefultRoundButton";
import { ICONS } from "../../../../assets/globalStyles";
import { AvatarShow } from "../../atomic/AtatarShow/AvatarShow";
import { LogInButton } from "../../atomic/LogInButton/LogInButton";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";

type MainPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainPage'>

export const MainPage = () => {
    const navigation = useNavigation<MainPageNavigationProp>();
    const dispatch = useDispatch();
    const state  = useSelector((state:IState) => state);
    const [fullname] = React.useState(state.fullname);
    const [avatar, setAvatar] = React.useState(state.avatar);
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
    
    function onLoad(uri: string){
        setAvatar(uri);
    }
    
    //let isFocused = navigation.isFocused();
    //console.log('isFocused', isFocused);
/*
    if(isFocused){ async () => {
         
        try{
            let response = await fetch('https://glidemess.pw/api/v1/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
            });
            console.log('try to get user in Main');
            if (response.ok) {
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully get user');
                    dispatch({ type: ActionTypes.GETUSER, payload: response.json });
                }
            }
            else{
                console.log("problem", response.status, response.statusText, response);
                }
        } 
        catch(error) {
            console.log('error', error);
        };  
    }, []}
  */
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
                <ScrollView >
                    <Text style={styles.hello}>
                        Hello, {fullname.length < 10? fullname: fullname.slice(0,9)+"..."} !
                    </Text>
                    <View style={styles.flex}>
                        <DefaultRoundButton 
                            style={{backgroundColor:"white"}}
                            onPress={() => navigation.navigate('GlidesListPage')}
                            source={ICONS.imgGlideMessage}>
                        </DefaultRoundButton>
                        <DefaultRoundButton 
                            style={{backgroundColor:"white"}}
                            onPress={() => navigation.navigate('ProfilePage')}
                            source={ICONS.imgSettings}>
                        </DefaultRoundButton>
                    </View>
                    <LogInButton
                            style={styles.buttonContainer}
                            text= "Log Out"
                            onPress={() => logOut()}>
                    </LogInButton>
                    <ShowError 
                        error={error}
                        errorText={errorText}
                        errorTypes={errors}
                        >
                        </ShowError>
                </ScrollView> 
        </SafeAreaView>
)}


