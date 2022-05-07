import React from "react";
import { Text, ScrollView, StatusBar, SafeAreaView } from "react-native";
import {styles} from './styles';

export const CompanionProfilePage = () => (
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <Text style={styles.pageName}>CompanionProfilePage</Text>
                </ScrollView>
    </SafeAreaView>
)