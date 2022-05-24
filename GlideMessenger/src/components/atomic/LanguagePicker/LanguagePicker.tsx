import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface LanguagePickerProps {
    style: StyleProp<ViewStyle>;
    selectedLanguage?: string;
    setSelectedLanguage: (itemValue:string) => void;
}

export const LanguagePicker : React.FC<LanguagePickerProps> = ({style, selectedLanguage, ... props}) => {
    const {setSelectedLanguage} = props;
    return(
        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedLanguage}
                                style={style}
                                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                            >                            
                                <Picker.Item label='Сhinese' value= 'chinese' />
                                <Picker.Item label='English' value= 'english' />
                                <Picker.Item label='Spanish' value= 'spanish' />
                                <Picker.Item label='Arabian' value= 'arabian' />
                                <Picker.Item label='Russian' value= 'russian' />
                                <Picker.Item label='Portuguese' value= 'portuguese' />
                                <Picker.Item label='French' value= 'french' />
                                <Picker.Item label='German' value= 'german' />
                                <Picker.Item label='Hindi' value= 'hindi' />
                                <Picker.Item label='Bengali' value= 'bengali' />
                                <Picker.Item label='Japanese' value= 'japanese' />
                                <Picker.Item label='Italian' value= 'italian' />
                                <Picker.Item label='Belarusian' value= 'belarusian' />
                                <Picker.Item label='Ukrainian' value= 'ukrainian' />
                                <Picker.Item label= 'Vietnamese' value= 'vietnamese' />
                                <Picker.Item label='Armenian' value= 'armenian' />
                                <Picker.Item label='Turkish' value= 'turkish' />
                                <Picker.Item label='Albanian' value= 'albanian' />
                            </Picker>
        </View>
    )
}