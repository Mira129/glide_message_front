import React from "react";
import { Pressable, StyleProp, ViewStyle, View, Text } from "react-native";
import { styles } from "./styles";


interface NextButtonProps {
    content: string,
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export const NextButton : React.FC<NextButtonProps> = ({style, content, ... props}) => {
    const {onPress} = props;
    return (
        <Pressable onPress={onPress} style={style}>
            <View  style={styles.nextButton}>
                <Text style={styles.text}>{content}</Text>
            </View>
        </Pressable>
      );
};
