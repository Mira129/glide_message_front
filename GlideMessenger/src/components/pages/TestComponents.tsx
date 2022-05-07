import React from "react";
import { Text, ScrollView, StatusBar, SafeAreaView, Button, TextInput, View} from "react-native";
import { useNavigation  } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import { RootStackParamList } from "../../../App";
import { BackArrow } from "../atomic/BackArrowButton/BackArrowButton";
import { NextButton } from "../atomic/NextButton/NextButton";
import { LogInButton } from "../atomic/LogInButton/LogInButton";
import { SignUpButton } from "../atomic/SignUpButton/SignUpButton";

type TestPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TestComponents'>

export const TestComponents = () => {
    const navigation = useNavigation<TestPageNavigationProp>();
    const [text, onChangeText] = React.useState("");
    const [selectedCountry, setSelectedCountry] = React.useState("russia");
    return(
        <SafeAreaView style={styles.container} >
                <StatusBar backgroundColor="#759FC9"/>
                    <ScrollView>
                        <BackArrow 
                            onPress={() => navigation.navigate('MainPage')} 
                            style={styles.backArrow}>
                        </BackArrow>
                        <Text style={styles.pageName}>TestComponents</Text>
                        <Button
                                title="RegistrationPage1"
                                onPress={() => navigation.navigate('RegistrationPage1')}
                            /> 
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
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedCountry}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
                            >
                                <Picker.Item label="Russia" value="russia" />
                                <Picker.Item label="USA" value="usa" />
                            </Picker>
                        </View>
                    </ScrollView>
        </SafeAreaView>
    )
}
