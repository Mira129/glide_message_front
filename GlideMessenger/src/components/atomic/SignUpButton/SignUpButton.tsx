import React from "react";
import { Pressable, StyleProp, ViewStyle, View, Text } from "react-native";
import { styles } from "./styles";


interface SignUpButtonProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export const SignUpButton : React.FC<SignUpButtonProps> = ({style, ... props}) => {
    const {onPress} = props;
    return (
        <Pressable onPress={onPress} style={style}>
            <View  style={styles.signUpButton}>
                <Text style={styles.text}>Sign up</Text>
            </View>
        </Pressable>
      );
};