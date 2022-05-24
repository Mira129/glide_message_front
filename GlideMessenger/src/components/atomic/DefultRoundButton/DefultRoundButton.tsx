import React from "react";
import { Pressable, Image, StyleProp, ViewStyle } from "react-native";
import { ICONS } from "../../../../assets/globalStyles";
import { styles } from "./styles";

interface DefaultRoundButtonProps {
    style: StyleProp<ViewStyle>;
    source: ICONS;
    onPress?: () => void;
}

export const DefaultRoundButton : React.FC<DefaultRoundButtonProps> = ({style, source, ... props}) => {
    const {onPress} = props;
    return (
        <Pressable onPress={onPress} style={[style, styles.defaultButton]}>
            <Image 
                source={source}
                style={{ width: 30, height: 30 }}
            />
        </Pressable>
      );
};