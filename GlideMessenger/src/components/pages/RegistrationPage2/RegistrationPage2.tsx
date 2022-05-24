import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, ScrollView, StatusBar, SafeAreaView, TextInput, View, SectionList } from "react-native";
import { NextButton } from "../../atomic/NextButton/NextButton";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, IState, ITransferData } from "../../../store/store";
import { CountryPicker } from "../../atomic/CountryPicker/CountryPicker";
import { LanguagePicker } from "../../atomic/LanguagePicker/LanguagePicker";
import { ImagePickerRender } from "../../atomic/ImagePicker/ImagePicker";
import { LogInButton } from "../../atomic/LogInButton/LogInButton";
import { MultiSelectExample } from "../../atomic/LanguagePicker/LanguagePicker2";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";

type RegistrationPage2NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegistrationPage2'>

export const RegistrationPage2 = () => {
    const navigation = useNavigation<RegistrationPage2NavigationProp>();
    const password  = useSelector((state:IState) => state.password);
    const nickname  = useSelector((state:IState) => state.nickname);
    const fullname  = useSelector((state:IState) => state.fullname)
    const [age, onChangeAge] = React.useState("");
    const [about, onChangeAbout] = React.useState("");
    const [selectedCountry, setSelectedCountry] = React.useState("russia");
    const [selectedLanguage, setSelectedLanguage] = React.useState("russian");
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    const dispatch = useDispatch();
    const avatarUrl  = useSelector((state:IState) => state.avatar);
    const errors = [
        {
          code: '409',
          msg: 'User has already exist'
        },
        {
          code: '401',
          msg: 'You are not loged in'
        },
        {
            code: "data",
            msg: 'Fields Nickname, Password, Fullname, Age, Country, Languages should be filled in'
        }
    ]

    function onLoad(uri: string){
        dispatch({ type: ActionTypes.DOWNLOADPHOTO, payload: uri });
    }

    async function DownloadImageAsync(uri:string) {
        try {
            // console.log("uploadImageAsync, typeof uri == string");
            console.log("uri", uri); 
            let filename = uri.split('/').pop();

            if (filename !== undefined){
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;

                let formData = new FormData();
                formData.append('avatar', { uri: uri, name: filename, type });
                console.log(formData);

                let apiUrl = 'https://glidemess.pw/api/v1/user/update/avatar';
                let options = {
                    method: 'PUT',
                    body: formData,
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    }
                }
            
                let response = await fetch(apiUrl, options);
                if (response.ok) {
                    console.log('response.ok');
                    if (response.status >= 200 && response.status < 300) {
                        console.log('Successfully send avatar');
                    }
                }
                else{
                        console.log("problem", response.status, response.statusText);
                        onChangeError(true);
                        onChangeErrorText(response.status.toString());
                    }
            } 
            else{
                return
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
            
    };

    const SignUpWithCheck = () => {
        console.log("SignUpWithCheck age", age);
        let numAge: number = +age;
        console.log("SignUpWithCheck numAge", numAge);
        if ((nickname == "" || nickname == undefined) || 
            (password == "" || password == undefined)|| 
            (fullname == "" || fullname == undefined)  ||
            (numAge  == undefined || numAge <= 0) || 
            (selectedLanguage== "" || selectedLanguage == undefined) || 
            (selectedLanguage == "" || selectedLanguage == undefined))
            {
            let user = {
                nickname: nickname,
                fullname: fullname,
                about: about,
                age: numAge,
                country: selectedCountry,
                languages: [selectedLanguage],
                password: password
                };
            console.log("SignUpWithCheck user.age", user.age);
            console.log("registration errors");
            console.log("json",JSON.stringify(user));
            onChangeError(true);
            onChangeErrorText("data");
        } 
        else {
            onChangeError(false);
            onChangeErrorText("");
            SignUp();
        }
    }

    const SignUp = async () => {
        let signedUp = false;
        let numAge: number = +age;
        try {
            let user = {
            nickname: nickname,
            fullname: fullname,
            about: about,
            age: numAge,
            country: selectedCountry,
            languages: [selectedLanguage],
            password: password
            };
            console.log("json",JSON.stringify(user));
            let response = await fetch('https://glidemess.pw/api/v1/user', {
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
                    console.log('Successfully signed up');
                    dispatch({ type: ActionTypes.LOGEDIN, payload: true });
                    signedUp = true;
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
        if (signedUp){
            if (avatarUrl !== ""){
                await DownloadImageAsync(avatarUrl);
            }
            navigation.navigate("MainPage");
        }
    }

    return(
        <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView nestedScrollEnabled={true}>
                    <BackArrow 
                        onPress={() => navigation.navigate('RegistrationPage1')} 
                        style={styles.backArrow}>
                    </BackArrow>
                    <View style={styles.center}>
                        <Text style={styles.pageName}>Sign up2</Text>
                        <ImagePickerRender 
                            avatar={avatarUrl}
                            onLoad={onLoad}
                        >
                        </ImagePickerRender>

                        <View style={styles.flex}>
                            <TextInput
                                style={styles.inputAge}
                                onChangeText={onChangeAge}
                                value={age}
                                placeholder="Age"
                                keyboardType= "numeric"
                            />
                            <CountryPicker
                                style={styles.pickerCountry}
                                selectedCountry={selectedCountry}
                                setSelectedCountry={setSelectedCountry}>
                            </CountryPicker>
                        </View>
                        <LanguagePicker
                            style={styles.pickerLanguage}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}>
                        </LanguagePicker>
                        <View style={styles.aboutContainer}>
                            <TextInput
                                style={styles.inputAbout}
                                onChangeText={onChangeAbout}
                                value={about}
                                placeholder="About"
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <ShowError 
                        error={error}
                        errorText={errorText}
                        errorTypes={errors}
                    >
                    </ShowError>
                    <NextButton
                        style={styles.button}
                        onPress={ SignUpWithCheck }
                        content= "Sign up">
                    </NextButton>   
                </ScrollView>
        </SafeAreaView>
)}
