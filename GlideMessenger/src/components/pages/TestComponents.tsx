import React from "react";
import { Text, ScrollView, StatusBar, SafeAreaView, Button, TextInput, View, Image} from "react-native";
import { useNavigation  } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import { RootStackParamList } from "../../../App";
import { BackArrow } from "../atomic/BackArrowButton/BackArrowButton";
import { NextButton } from "../atomic/NextButton/NextButton";
import { LogInButton } from "../atomic/LogInButton/LogInButton";
import { SignUpButton } from "../atomic/SignUpButton/SignUpButton";
//import TestImagePicker from "../atomic/ImagePicker/ImagePicker";
import { useSelector } from "react-redux";
import { IState } from "../../store/store";
import { ImagePickerRender } from "../atomic/ImagePicker/ImagePicker";
import { LanguageMultiPicker } from "../atomic/LanguagePicker/TestLanguagePicker";
import { MultiSelectExample } from "../atomic/LanguagePicker/LanguagePicker2";

type TestPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TestComponents'>

export const TestComponents: React.FC = () => {
    const navigation = useNavigation<TestPageNavigationProp>();
    const [text, onChangeText] = React.useState("");
    const [selectedCountry, setSelectedCountry] = React.useState("russia");
    const avatarUrl  = useSelector((state:IState) => state.avatar);
    return(
        <SafeAreaView style={styles.container} >

                <StatusBar backgroundColor="#759FC9"/>
                    <ScrollView>
                        <BackArrow 
                            onPress={() => navigation.navigate('MainPage')} 
                            style={styles.backArrow}>
                        </BackArrow>
                        <Text style={styles.pageName}>TestComponents</Text>
                        <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                        <Button
                            title="RegistrationPage1"
                            onPress={() => navigation.navigate('RegistrationPage1')}
                        />
                        </View>
                        <View style={styles.button}>
                        <Button
                            title="RegistrationPage2"
                            onPress={() => navigation.navigate('RegistrationPage2')}
                        />
                        </View>
                        <View style={styles.button}>
                        <Button
                            title="AuthorizationPage"
                            onPress={() => navigation.navigate('AuthorizationPage')}
                        />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="ProfilePage"
                                onPress={() => navigation.navigate('ProfilePage')}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="CompanionProfilePage"
                                onPress={() => navigation.navigate('CompanionProfilePage')}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="MainPage"
                                onPress={() => navigation.navigate('MainPage')}
                            />
                        </View>
                    </View> 
                        <NextButton
                            style={styles.backArrow}
                            onPress={() => navigation.navigate('RegistrationPage2')}
                            content= "Next">
                        </NextButton>
                        <LogInButton
                            style={styles.LogInButton}
                            onPress={() => navigation.navigate('MainPage')}>
                        </LogInButton>
                        <SignUpButton
                            style={styles.LogInButton}
                            onPress={() => navigation.navigate('MainPage')}>
                        </SignUpButton>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="password"
                            keyboardType="default"
                        />
                        
                        <LanguageMultiPicker></LanguageMultiPicker>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedCountry}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
                            >
                                <Picker.Item label="Albania" value="albania" />
                                <Picker.Item label="Armenia" value="armenia" />
                                <Picker.Item label="Australia" value="australia" />
                                <Picker.Item label="Belarus" value="belarus" />
                                <Picker.Item label="Canada" value="canada" />
                                <Picker.Item label="France" value="france" />
                                <Picker.Item label="Germany" value="germany" />
                                <Picker.Item label="Canada" value="canada" />
                                <Picker.Item label="Russia" value="russia" />
                                <Picker.Item label="UK" value="uk" />
                                <Picker.Item label="USA" value="usa" />
                            </Picker>
                        </View>
                        
                        <Text style={{marginTop: 40}}>Choose your photo here!</Text>
                        <Text>avatarUrl:{avatarUrl}</Text>

                        <View style={{marginTop: 40}}></View>
                    </ScrollView>
        </SafeAreaView>
    )
}
