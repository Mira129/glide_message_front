import React from "react";
import { Pressable, StyleProp, ViewStyle, View, Text } from "react-native";
import { styles } from "./styles";


interface LogInButtonProps {
    style?: StyleProp<ViewStyle>;
    text?: string;
    onPress?: () => void;
}

export const LogInButton : React.FC<LogInButtonProps> = ({style, text, ... props}) => {
    const {onPress} = props;
    const inputText = text;
    return (
        <Pressable onPress={onPress} style={style}>
            <View  style={styles.logInButton}>
                <Text style={styles.text}>{inputText}</Text>
            </View>
        </Pressable>
      );
};