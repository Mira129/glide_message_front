import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { IState } from '../store/store';
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { AuthorizationPage } from './pages/AuthorizationPage/AuthorizationPage';
import { RegistrationPage1 } from './pages/RegistrationPage1/RegistrationPage1';
import { RegistrationPage2 } from './pages/RegistrationPage2/RegistrationPage2';
import { CompanionProfilePage } from './pages/CompanionProfilePage/CompanionProfilePage';
import { TestComponents } from './pages/TestComponents';
import { BlacklistPage } from './pages/BlacklistPage/BlacklistPage';
import { GlidesListPage } from './pages/GlidesListPage/GlidesListPage';
import { ChatsListPage } from './pages/ChatsListPage/ChatsListPage';
import { NewGlideLetterPage } from './pages/NewGlideLetterPage/NewGlideLetterPage';
import { RecievedGlideLetterPage } from './pages/RecievedGlideLetterPage/RecievedGlideLetterPage';

const Stack = createNativeStackNavigator();

export const AppNavigator : React.FC = () => {
    let isLogedIn  = useSelector((state:IState) => state.isLogedIn);
    return (
        <NavigationContainer >
          <Stack.Navigator initialRouteName="MainPage" screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="AuthorizationPage" component={AuthorizationPage} />
            <Stack.Screen name="RegistrationPage1" component={RegistrationPage1} />
            <Stack.Screen name="RegistrationPage2" component={RegistrationPage2} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="BlacklistPage" component={BlacklistPage} />
            <Stack.Screen name="GlidesListPage" component={GlidesListPage} />
            <Stack.Screen name="ChatsListPage" component={ChatsListPage} />
            <Stack.Screen name="CompanionProfilePage" component={CompanionProfilePage} />
            <Stack.Screen name="NewGlideLetterPage" component={NewGlideLetterPage} />
            <Stack.Screen name="RecievedGlideLetterPage" component={RecievedGlideLetterPage} />
            <Stack.Screen name="TestComponents" component={TestComponents} />
          </Stack.Navigator> 
        </NavigationContainer>
    )
}

function useTypedSelestor(arg0: (state: any) => any) {
    throw new Error('Function not implemented.');
}
function useSelestor(arg0: (state: any) => any) {
    throw new Error('Function not implemented.');
}

