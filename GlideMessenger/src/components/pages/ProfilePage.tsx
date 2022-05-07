import React from "react";
import { Text, ScrollView, StatusBar, SafeAreaView } from "react-native";
import {styles} from './styles';

export const ProfilePage = () => (
    <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor="#759FC9"/>
                <ScrollView>
                    <Text style={styles.pageName}>ProfilePage</Text>
                </ScrollView>
    </SafeAreaView>
)
