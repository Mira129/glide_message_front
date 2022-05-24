import React, { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { Text, ScrollView, StatusBar, SafeAreaView, View, FlatList, ListRenderItemInfo } from "react-native";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { useNavigation } from "@react-navigation/native";
import { ShowError } from "../../atomic/ShowErrorText/ShowErrorText";
import { ListElement } from "../../atomic/ListElement/ListElement";
import { DefaultRoundButton } from "../../atomic/DefultRoundButton/DefultRoundButton";
import { COLORS } from "../../../../assets/colors";
import { ICONS } from "../../../../assets/globalStyles";

type GlidesListPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GlidesListPage'>
export type glideType = {
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

export const GlidesListPage = () => {
    const navigation = useNavigation<GlidesListPageNavigationProp>();
    const [glides, setGlides] = React.useState();
    const [error, onChangeError] = React.useState(false);
    const [errorText, onChangeErrorText] = React.useState("");
    const [focus, onChangeFocus] = React.useState(true);
    

    const errors = [
        {
            code: '401',
            msg: 'You are not loged in'
        },
        {
            code: '502',
            msg: 'Request error'
        },
    ]

    useEffect (() =>{
        if (focus){
            GetGlides();
        }
        onChangeFocus(false);
    })
    
     async function GetGlides() {
        try {
            let response = await fetch('https://glidemess.pw/api/v1/glide/gotten', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log('try to get glides');
            if (response.ok) {
                console.log('response.ok');
                if (response.status >= 200 && response.status < 300) {
                    console.log('Successfully got glides');
                    let json = await response.json();
                    console.log(json);
                    setGlides(json);
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

    const renderItem = ({item}: {item: glideType}) => (
        <ListElement 
            glide={item} 
            onPress={() => navigation.navigate('RecievedGlideLetterPage', {glide:item})} />
    );

    return(
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                    <BackArrow 
                        onPress={() => navigation.navigate('MainPage')} 
                        style={styles.backArrow}>
                    </BackArrow>
                    <Text style={styles.pageName}>Gliding</Text>
                    <View style={styles.listContainer}>
                        {glides === undefined? (
                            <Text style={[styles.titleFont, { textAlign: 'center', marginTop: 30 }]}>
                                No Glide letters ...
                            </Text>
                        ): <FlatList
                            data={glides}
                            renderItem={renderItem}
                            keyExtractor={(item)=> item.id.toString()}
                        />
                        }
                        <DefaultRoundButton 
                                style={{backgroundColor:COLORS.BLUE_BACKGROUND}}
                                onPress={() => navigation.navigate('NewGlideLetterPage')}
                                source={ICONS.imgAddGlideMessage}>
                        </DefaultRoundButton>
                        <ShowError 
                            error={error}
                            errorText={errorText}
                            errorTypes={errors}
                        >
                        </ShowError>
                    </View>
    </SafeAreaView>
)}

{/* <ListElement glide={{
                            id:1,
                            title:"Salamander",
                            author:"Salamander",
                            picture:"https://glidemess.pw/api/v1/media/image/2022/May/22/23535427ae4b-342b-4538-85c9-6f07b95fa39f.webp",
                            message:"Hello",
                            created:"2022-05-23T19:46:558658476547654",
                            country:"Russia",
                            avatar:"https://glidemess.pw/api/v1/media/image/2022/May/22/23535427ae4b-342b-4538-85c9-6f07b95fa39f.webp",
                        }}
                         ></ListElement> */}