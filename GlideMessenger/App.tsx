/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainPage } from './src/components/pages/MainPage/MainPage';
import { ProfilePage } from './src/components/pages/ProfilePage';
import { AuthorizationPage } from './src/components/pages/AuthorizationPage/AuthorizationPage';
import { RegistrationPage1 } from './src/components/pages/RegistrationPage1/RegistrationPage1';
import { RegistrationPage2 } from './src/components/pages/RegistrationPage2/RegistrationPage2';
import { CompanionProfilePage } from './src/components/pages/CompanionProfilePage';
import { TestComponents } from './src/components/pages/TestComponents';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="MainPage" screenOptions={{headerShown: false}}> 
        <Stack.Screen name="RegistrationPage1" component={RegistrationPage1} />
        <Stack.Screen name="RegistrationPage2" component={RegistrationPage2} />
        <Stack.Screen name="AuthorizationPage" component={AuthorizationPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="CompanionProfilePage" component={CompanionProfilePage} />
        <Stack.Screen name="TestComponents" component={TestComponents} />
      </Stack.Navigator> 
    </NavigationContainer>
        
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  RegistrationPage1: undefined;
  RegistrationPage2: undefined;
  AuthorizationPage: undefined;
  MainPage: undefined;
  ProfilePage: undefined;
  CompanionProfilePage: undefined;
  TestComponents: undefined;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });