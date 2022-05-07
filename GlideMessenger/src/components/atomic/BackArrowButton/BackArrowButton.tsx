import React from "react";
import { Pressable, StyleProp, ViewStyle, Image } from "react-native";
import { ICONS } from "../../../../assets/globalStyles";

interface BackArrowProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export const BackArrow : React.FC<BackArrowProps> = ({style, ... props}) => {
    const {onPress} = props;
    return (
        <Pressable onPress={onPress} style={style}>
            <Image 
                source={ICONS.imgBackArrow}
                style={{ width: 14, height: 22 }}
            />
        </Pressable>
      );
};