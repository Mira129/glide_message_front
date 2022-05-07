import React from "react";
import { Text, ScrollView, StatusBar, SafeAreaView } from "react-native";
import {styles} from './styles';

export const RegistrationPage2 = () => (
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <Text style={styles.pageName}>RegistrationPage2</Text>
                </ScrollView>
    </SafeAreaView>
)