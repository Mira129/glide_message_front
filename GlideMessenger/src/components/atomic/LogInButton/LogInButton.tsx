import React from "react";
import { Pressable, StyleProp, ViewStyle, View, Text } from "react-native";
import { styles } from "./styles";


interface LogInButtonProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export const LogInButton : React.FC<LogInButtonProps> = ({style, ... props}) => {
    const {onPress} = props;
    return (
        <Pressable onPress={onPress} style={style}>
            <View  style={styles.logInButton}>
                <Text style={styles.text}>Log in</Text>
            </View>
        </Pressable>
      );
};