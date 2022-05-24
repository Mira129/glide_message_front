import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { Text, ScrollView, StatusBar, SafeAreaView } from "react-native";
import {styles} from './styles';
import { BackArrow } from "../../atomic/BackArrowButton/BackArrowButton";
import { useNavigation } from "@react-navigation/native";

type ChatsListPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChatsListPage'>

export const ChatsListPage = () => {
    const navigation = useNavigation<ChatsListPageNavigationProp>();
    return(
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <Text style={styles.pageName}>CompanionProfilePage</Text>
                    <BackArrow 
                        onPress={() => navigation.navigate('MainPage')} 
                        style={styles.backArrow}>
                    </BackArrow>
                </ScrollView>
    </SafeAreaView>
)}