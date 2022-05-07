import React from "react";
import {styles} from './styles';
import { SafeAreaView, Text, Button,  ScrollView, StatusBar, View } from "react-native";
import { useNavigation  } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

type MainPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainPage'>

export const MainPage = () => {
    const navigation = useNavigation<MainPageNavigationProp>();
    return(
        <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView >
                    <Text style={styles.pageName}>MainPage</Text>
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
                                title="TestComponents"
                                onPress={() => navigation.navigate('TestComponents')}
                            />
                        </View>
                    </View>
                </ScrollView> 
        </SafeAreaView>
)}

