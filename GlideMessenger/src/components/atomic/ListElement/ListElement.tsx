import React from "react";
import { Pressable, StyleProp, ViewStyle, View, Text, Image } from "react-native";
import { COLORS } from "../../../../assets/colors";
import { COUNTRIES, FLAGS } from "../../../../assets/countriesStyles";
import { AvatarShow } from "../AtatarShow/AvatarShow";
import { styles } from "./styles";


interface ListElementProps {
    style?: StyleProp<ViewStyle>;
    glide: {
        id: number,
        title: string,
        author: string;
        picture: string;
        message: string;
        created: string,
        country: string,
        author_avatar: string,
        author_fullname: string,
    }
    onPress?: () => void;
}

export const ListElement : React.FC<ListElementProps> = ({
                                                            style,
                                                            glide,
                                                            ... props
                                                        }) => {
    const {onPress} = props;
    let cntr = COUNTRIES.find(({country, fl}) => country === glide.country)
    let currentCountry = FLAGS.flagRussia;
    if (cntr !== undefined) {
        currentCountry = cntr.fl;
    }
    let time = glide.created.slice(11,16);
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <View  style={styles.container}>
                <View style={styles.containerSmall}>
                    <AvatarShow
                        styleContainer={{
                                backgroundColor: COLORS.BLUE_BACKGROUND,
                                height: 70,
                                width: 70,
                                borderRadius: 35,
                            }}
                        styleImage={{
                            height: 70,
                            width: 70,
                        }}
                        avatar = {glide.author_avatar}
                    >
                    </AvatarShow>
                </View>
                <Image 
                    source={currentCountry}
                    style={styles.flag}
                />
                <Text style={styles.text}>{glide.author_fullname}</Text>   
            </View>
            <View style={{marginRight:12}}>
            <Text style={styles.textSmall}>{time}</Text>
            </View>
        </Pressable>
      );
};
