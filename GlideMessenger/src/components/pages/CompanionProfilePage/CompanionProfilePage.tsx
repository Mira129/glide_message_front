import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import React, { useEffect } from "react";
import { Text, ScrollView, StatusBar, SafeAreaView, View, TextInput } from "react-native";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { glideType } from "../GlidesListPage/GlidesListPage";
import { COLORS } from "../../../../assets/colors";
import { AvatarShow } from "../../atomic/AtatarShow/AvatarShow";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";

type CompanionPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CompanionProfilePage'>
type ParamList = {
    CompanionProfilePage: {
      glide: glideType;
    };
  };
type compInfo = {
    nickname: string,
    fullname: string,
    about: string,
    age: number,
    avatar: string,
    country: string,
    languages: [],
}
  
export const CompanionProfilePage = () => {
    const navigation = useNavigation<CompanionPageNavigationProp>();
    const route = useRoute<RouteProp<ParamList, 'CompanionProfilePage'>>();
    const glide = route.params.glide;
    const [companion, onChangeCompanion] = React.useState({
        nickname: "",
        fullname: "",
        about: "",
        age: 0,
        avatar: "",
        country: "",
        languages: ["french"],
    });
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    const [focus, onChangeFocus] = React.useState(true);
    let defaultLang = "russian";

    const errors = [
        {
            code: '404',
            msg: 'Can not find user with this id'
        },
        {
            code: '502',
            msg: 'Request error'
        },
    ]

    useEffect (() =>{
        if (focus){
            GetCompanion();
        }
        onChangeFocus(false);
    })

     async function GetCompanion() {
        let way = 'https://glidemess.pw/api/v1/user/'+glide.author+'/profile'
        try {
            let response = await fetch(way, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log('try to get companion');
            if (response.ok) {
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully got companion');
                    let json = await response.json();
                    console.log(json);
                    onChangeCompanion(json);
                    if ((companion.languages !== undefined) && (companion.languages !== null)){
                        if (companion.languages.length > 0){
                            defaultLang = companion.languages[companion.languages.length - 1];
                        }
                    };
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
    };
    return(
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <BackArrow 
                        onPress={() => navigation.goBack()} 
                        style={styles.backArrow}>
                    </BackArrow>
                    <View style={styles.center}>
                        <Text style={styles.pageName}>{companion.fullname}</Text>
                        <AvatarShow
                            styleContainer={{
                                backgroundColor: COLORS.BLUE_BACKGROUND,
                                height: 200,
                                width: 200,
                                borderRadius: 100,
                                marginRight: 30,
                                marginBottom: 20,
                                marginTop: 30,
                            }}
                            styleImage={{
                                height: 200,
                                width: 200,
                            }}
                            avatar = {glide.author_avatar}
                        >
                        </AvatarShow>
                        <View style={styles.flex}>
                            <TextInput
                                style={styles.inputAge}
                                placeholder={companion.age.toString()}
                                placeholderTextColor="black"
                                editable={false} 
                            />
                            <TextInput
                                style={styles.pickerCountry}
                                placeholder={
                                    companion.country.length < 20? companion.country : companion.country.slice(0,16)+"..."
                                }
                                placeholderTextColor="black"
                                editable={false}
                            /> 
                        </View>
                        <TextInput
                            style={styles.pickerLanguage}
                            placeholder={
                                companion.languages.length < 30? companion.country : companion.country.slice(0,26)+"..."
                            }
                            placeholderTextColor="black"
                            editable={false}
                        />
                        <View style={styles.aboutContainer}>
                            <TextInput
                                style={styles.inputAbout}
                                placeholder={companion.about}
                                placeholderTextColor="black"
                                multiline={true}
                            />
                        </View>
                            <ShowError 
                                error={error}
                                errorText={errorText}
                                errorTypes={errors}
                            >
                            </ShowError>
                    </View>
                </ScrollView>
    </SafeAreaView>
)}
