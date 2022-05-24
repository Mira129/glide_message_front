import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, ScrollView, StatusBar, SafeAreaView, View, Image, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../../../App";
import { ICONS } from "../../../../assets/globalStyles";
import { ActionTypes, IState } from "../../../store/store";
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { CountryPicker } from "../../atomic/CountryPicker/CountryPicker";
import { DefaultRoundButton } from "../../atomic/DefultRoundButton/DefultRoundButton";
import { ImagePickerRender } from "../../atomic/ImagePicker/ImagePicker";
import { LanguagePicker } from "../../atomic/LanguagePicker/LanguagePicker";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";
import {styles} from './styles';

type ProfilePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfilePage'>

export const ProfilePage = () => {
    const navigation = useNavigation<ProfilePageNavigationProp>();
    const dispatch = useDispatch();
    const state  = useSelector((state:IState) => state);
    const langs  = useSelector((state:IState) => state.languages);
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    let defaultLang = "russian";
    if ((langs !== undefined) && (langs !== null)){
        if (langs.length > 0){
            defaultLang = langs[langs.length - 1];
        }
    };
    const [fullname, onChangeFullname] = React.useState(state.fullname);
    const [age, onChangeAge] = React.useState(state.age.toString());
    const [about, onChangeAbout] = React.useState(state.about);
    if (about == undefined){
        onChangeAbout("");
    }
    const [selectedCountry, setSelectedCountry] = React.useState(state.country);
    const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLang);
    const [avatarUrl, onChangeAvatar] = React.useState(state.avatar);

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
            code: '502',
            msg: 'Request error'
        },
        {
            code: "data",
            msg: 'Fields Fullname, Age, Country, Languages should be filled in'
        }
    ]

    function onLoad(uri: string){
        onChangeAvatar(uri);
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

    const UpdateWithCheck = () => {
        let numAge: number = +age;
        if (
            (fullname == "" || fullname == undefined)  ||
            (numAge  == undefined || numAge <= 0) || 
            (selectedLanguage== "" || selectedLanguage == undefined) || 
            (selectedLanguage == "" || selectedLanguage == undefined))
            {
            let user = {
                fullname: fullname,
                about: about,
                age: numAge,
                country: selectedCountry,
                languages: [selectedLanguage],
                };
            console.log("update errors");
            console.log("json",JSON.stringify(user));
            onChangeError(true);
            onChangeErrorText("data");
        } 
        else {
            onChangeError(false);
            onChangeErrorText("");
            Update();
        }
    }

    const Update = useCallback(async () => {
        let updated = false;
        let numAge: number = +age;
        console.log("Upload age", age);
        console.log("Upload numAge", numAge);
        try {
            let user = {
            fullname: fullname,
            about: about,
            age: numAge,
            country: selectedCountry,
            languages: [selectedLanguage],
            };
            console.log("json",JSON.stringify(user));
            let response = await fetch('https://glidemess.pw/api/v1/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            console.log('try to fetch');
            if (response.ok) {
                console.log('response.ok');
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully updated');
                    updated = true;
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
        if (updated){
            console.log("updating avatarUrl", avatarUrl);
            if (avatarUrl !== ""){
                await DownloadImageAsync(avatarUrl);
            }
            try{
                let response = await fetch('https://glidemess.pw/api/v1/user', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                });
                console.log('try to get user');
                if (response.ok) {
                    if (response.status >= 200 && response.status < 300) {
                        console.log('Successfully get user');
                        let json = await response.json();
                        json.avatar = 'https://glidemess.pw/api/v1/'+json.avatar;  ///
                        console.log(json);
                        dispatch({ type: ActionTypes.GETUSER, payload: json });
                        onChangeAvatar(json.avatar);
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
    }, [dispatch, avatarUrl])

    return(
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <BackArrow 
                        onPress={() => navigation.navigate('MainPage')} 
                        style={styles.backArrow}>
                    </BackArrow>
                    <View style={styles.center}>
                        <Text style={styles.pageName}>Profile</Text>
                        <ImagePickerRender 
                            avatar={avatarUrl}
                            onLoad={onLoad}
                        ></ImagePickerRender>
                        <TextInput
                            style={styles.input}
                            placeholder={
                                state.nickname.length < 30? state.nickname : state.nickname.slice(0,26)+"..."
                            }
                            placeholderTextColor="black"
                            editable={false}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeFullname}
                            value={fullname}
                            placeholder={
                                state.fullname.length < 30? state.fullname : state.fullname.slice(0,26)+"..."
                            }
                            keyboardType="default"
                        />
                        <View style={styles.flex}>
                            <TextInput
                                style={styles.inputAge}
                                onChangeText={onChangeAge}
                                value={age}
                                placeholder={age}
                                keyboardType="numeric"
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
                                placeholder={about}
                                multiline={true}
                                keyboardType="default"
                            />
                        </View>
                        <ShowError 
                            error={error}
                            errorText={errorText}
                            errorTypes={errors}
                        >
                        </ShowError>
                        <DefaultRoundButton 
                            style={{backgroundColor:"white"}}
                            onPress={UpdateWithCheck}
                            source={ICONS.imgSaveChanges}>
                        </DefaultRoundButton>
                    </View>
                </ScrollView>
    </SafeAreaView>
    )
}
