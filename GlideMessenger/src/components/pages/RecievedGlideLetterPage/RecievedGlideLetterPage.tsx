import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, ScrollView, StatusBar, SafeAreaView, View, Image, TextInput, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../../../App";
import { COLORS } from "../../../../assets/colors";
import { COUNTRIES, FLAGS } from "../../../../assets/countriesStyles";
import { ICONS } from "../../../../assets/globalStyles";
import { ActionTypes, IState } from "../../../store/store";
import { AvatarShow } from "../../atomic/AtatarShow/AvatarShow";
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { CountryPicker } from "../../atomic/CountryPicker/CountryPicker";
import { DefaultRoundButton } from "../../atomic/DefultRoundButton/DefultRoundButton";
import { ImagePickerRender } from "../../atomic/ImagePicker/ImagePicker";
import { LanguagePicker } from "../../atomic/LanguagePicker/LanguagePicker";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";
import {styles} from './styles';

type glideType = {
    id: number,
    title: string,
    author: string;
    picture: string;
    message: string;
    created: string,
    country: string,
    author_avatar: string,
    author_fullname: string,
}
type RecievedGlideLetterNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RecievedGlideLetterPage'>

type ParamList = {
    RecievedGlideLetterPage: {
      glide: glideType;
    };
  };
  

export const RecievedGlideLetterPage = () => {
    const route = useRoute<RouteProp<ParamList, 'RecievedGlideLetterPage'>>();
    const glide = route.params.glide
    const navigation = useNavigation<RecievedGlideLetterNavigationProp>();
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    console.log("glide in recieved glide page", glide)
    let cntr = COUNTRIES.find(({country, fl}) => country === glide.country)
    let currentCountry = FLAGS.flagRussia;
    if (cntr !== undefined) {
        currentCountry = cntr.fl;
    }

    const errors = [
        {
            code: '401',
            msg: 'You are not loged in'
        },
        {
            code: '403',
            msg: 'User has not access to this message'
        },
        {
            code: '404',
            msg: 'Message is not found'
        },
        {
            code: '500',
            msg: 'Server error'
        },
    ]

    async function RedirectCompanion() {
        let way = 'https://glidemess.pw/api/v1/glide/'+glide.id+'/redirect'
        try {
            let response = await fetch(way, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log('try to redirect letter');
            if (response.ok) {
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully redirect letter');
                    navigation.goBack();
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
                        onPress={() => navigation.navigate('GlidesListPage')} 
                        style={styles.backArrow}>
                    </BackArrow>
                    <View style={styles.center}>
                        <View style={styles.listContainer}>
                            <View style={styles.topContainer}>
                                <Pressable 
                                    style={styles.containerSmall} 
                                    onPress={() => navigation.navigate('CompanionProfilePage', {glide})}>
                                    <AvatarShow
                                        styleContainer={{
                                            backgroundColor: COLORS.BLUE_BACKGROUND,
                                            height: 80,
                                            width: 80,
                                            borderRadius: 40,
                                        }}
                                        styleImage={{
                                            height: 80,
                                            width: 80,
                                        }}
                                        avatar = {glide.author_avatar}
                                    >
                                    </AvatarShow>
                                </Pressable>
                                <Image 
                                    source={currentCountry}
                                    style={styles.flag}
                                />
                                <Text style={styles.text}>{glide.author_fullname.length <= 10?
                                                             glide.author_fullname : 
                                                             glide.author_fullname.slice(0,7)+"..."}
                                                             </Text>
                            </View>
                            <View style={styles.center}>
                                <TextInput
                                    style={styles.title}
                                    placeholder={glide.title}
                                    placeholderTextColor="black"
                                    multiline={true}
                                    editable={false}
                                /> 
                                <TextInput
                                    style={styles.message}
                                    placeholder={glide.message}
                                    placeholderTextColor="black"
                                    multiline={true}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <DefaultRoundButton 
                            style={{backgroundColor:COLORS.PINK}}
                            onPress={RedirectCompanion}
                            source={ICONS.imgSkipGlideMessage}>
                        </DefaultRoundButton>
                        <ShowError 
                            error={error}
                            errorText={errorText}
                            errorTypes={errors}
                        >
                        </ShowError>
                    </View>
                </ScrollView>
    </SafeAreaView>
    )
}
