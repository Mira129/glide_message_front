import React from 'react';
import { StatusBar, View, Text} from 'react-native';
import { styles } from './styles';

interface ShowErrorProps {
  error: boolean;
  errorText: string;
  errorTypes: {
    code: string,
    msg: string
  }[];
}

export const ShowError : React.FC<ShowErrorProps> = ({error, errorText, errorTypes, ... props }) => {
  //const state  = useSelector((state:IState) => state);
  //const [errorLoc, onChangeError] = React.useState(error);
  //const [errorTextLoc, onChangeErrorText] = React.useState(errorText);
  console.log("showerror errors", error);
  if (error){
    console.log("showerror errors");
    let currentErrorText= "Unexpected Error";
    let err = errorTypes.find(({code, msg}) => code === errorText)
    if (err !== undefined) {
      currentErrorText = err.msg;
    }
      return (
      <View style={styles.container}>
          <StatusBar barStyle="default" />
          <Text style={styles.text}>{currentErrorText}</Text>
        </View>
      )
    } 
   else{
      console.log("showerror no errors");
    return (<></>);
  }
}

