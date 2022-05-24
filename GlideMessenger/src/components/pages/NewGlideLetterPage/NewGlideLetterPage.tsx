import React, { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { Text, ScrollView, StatusBar, SafeAreaView, View, TextInput } from "react-native";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { useNavigation } from "@react-navigation/native";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";
import { DefaultRoundButton } from "../../atomic/DefultRoundButton/DefultRoundButton";
import { COLORS } from "../../../../assets/colors";
import { ICONS } from "../../../../assets/globalStyles";
import { CountryPicker } from "../../atomic/CountryPicker/CountryPicker";
import { LanguagePicker } from "../../atomic/LanguagePicker/LanguagePicker";

type NewGlideLetterPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewGlideLetterPage'>

export const NewGlideLetterPage = () => {
    const navigation = useNavigation<NewGlideLetterPageNavigationProp>();
    const [age, onChangeAge] = React.useState("");
    const [message, onChangeMessage] = React.useState("");
    const [title, onChangeTitle] = React.useState("");
    const [selectedCountry, setSelectedCountry] = React.useState("russia");
    const [selectedLanguage, setSelectedLanguage] = React.useState("russian");
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    const errors = [
        {
          code: '500',
          msg: 'Server error'
        },
        {
          code: '401',
          msg: 'You are not loged in'
        },
        {
            code: "data",
            msg: 'Fields Age, Country, Languages should be filled in'
        }
    ]

    const CheckLetter = () => {
        let numAge: number = +age;
        if ((numAge  == undefined || numAge <= 0) || 
            (selectedLanguage== "" || selectedLanguage == undefined) || 
            (selectedLanguage == "" || selectedLanguage == undefined))
            {
            let content = {
                age: numAge,
                country: selectedCountry,
                languages: [selectedLanguage],
                title: title,
                message: message,
                };
            console.log("new glige letter errors");
            console.log("json",JSON.stringify(content));
            onChangeError(true);
            onChangeErrorText("data");
        } 
        else {
            onChangeError(false);
            onChangeErrorText("");
            SendGlideLetter();
        }
    }

    const SendGlideLetter = async () => {
        let send = false;
        try {
            let content = {
                title: title,
                message: message,
                };
            console.log("json",JSON.stringify(content));
            let way = 'https://glidemess.pw/api/v1/glide/create?languages='+selectedLanguage+
                        '&countries='+selectedCountry+"&age="+age;
            let response = await fetch( way, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            });
            console.log('try to fetch');
            if (response.ok) {
                console.log('response.ok');
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully send');
                    send = true;
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
        if (send){
            navigation.navigate("GlidesListPage");
        }
    }

 return(
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <BackArrow 
                        onPress={() => navigation.navigate('GlidesListPage')} 
                        style={styles.backArrow}>
                    </BackArrow>
                    <View style={styles.center}>
                        <Text style={styles.pageName}>NewGligeLetter</Text>
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
                        <View style={styles.listContainer}>
                            <TextInput
                                style={styles.title}
                                onChangeText={onChangeTitle}
                                value={title}
                                placeholder="Title"
                                keyboardType= "default"
                            /> 
                            <TextInput
                                style={styles.message}
                                onChangeText={onChangeMessage}
                                value={message}
                                placeholder="Message"
                                keyboardType= "default"
                                multiline={true}
                            />
                        </View>
                    </View>
                    <ShowError 
                            error={error}
                            errorText={errorText}
                            errorTypes={errors}
                    ></ShowError>
                    <View style={styles.buttonContainer}>
                        <DefaultRoundButton 
                                style={{backgroundColor:COLORS.WHITE}}
                                onPress={CheckLetter}
                                source={ICONS.imgSendGlideMessage}>
                        </DefaultRoundButton>
                    </View>
                </ScrollView>
    </SafeAreaView>
)}