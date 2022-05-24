import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface CountryPickerProps {
    style: StyleProp<ViewStyle>;
    selectedCountry?: string;
    setSelectedCountry: (itemValue:string) => void;
}

export const CountryPicker : React.FC<CountryPickerProps> = ({style, selectedCountry, ... props}) => {
    const {setSelectedCountry} = props;
    return(
        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedCountry}
                                style={style}
                                onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
                            >
                                <Picker.Item label="Albania" value="albania" />
                                <Picker.Item label="Armenia" value="armenia" />
                                <Picker.Item label="Australia" value="australia" />
                                <Picker.Item label="Belarus" value="belarus" />
                                <Picker.Item label="Canada" value="canada" />
                                <Picker.Item label="France" value="france" />
                                <Picker.Item label="Germany" value="germany" />
                                <Picker.Item label="Italy" value="italy" />
                                <Picker.Item label="Russia" value="russia" />
                                <Picker.Item label="UK" value="uk" />
                                <Picker.Item label="USA" value="usa" />
                            </Picker>
        </View>
    )
}