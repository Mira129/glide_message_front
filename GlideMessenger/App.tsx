/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./src/store/store"
import { AuthProvider } from './src/context/AuthContext';
import { AppNavigator } from './src/components/AppNavigation';
import { glideType } from './src/components/pages/GlidesListPage/GlidesListPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store} >
 
          <AppNavigator></AppNavigator>

    </Provider>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  RegistrationPage1: undefined;
  RegistrationPage2: { nickname: string, password: string, fullname: string } | undefined;
  AuthorizationPage: undefined;
  MainPage: | undefined;
  ProfilePage: undefined;
  BlacklistPage: undefined;
  GlidesListPage: undefined;
  ChatsListPage: undefined;
  CompanionProfilePage: {glide: glideType} | undefined;
  TestComponents: undefined;
  NewGlideLetterPage: undefined;
  RecievedGlideLetterPage: {glide: glideType} | undefined;
}
