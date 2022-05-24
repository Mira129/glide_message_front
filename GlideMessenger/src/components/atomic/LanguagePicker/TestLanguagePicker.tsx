// import component
import React, { Component } from 'react';
import CustomMultiPicker from 'react-native-multiple-select-list';
 
const userList = {
  "1":"Сhinese",
  "2":"English",
  "3":"Russian",
  "4":"Mary",
  "5":"Ann"
}

export const LanguageMultiPicker = () => {
    return(
        <CustomMultiPicker
        options={userList}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'black'}
        returnValue={"label"} // label or value
        callback={(res: [])=>{ console.log(res) }} // callback, array of selected items
        rowBackgroundColor={'white'}
        rowHeight={45}
        rowRadius={5}
        iconColor={"#00a2dd"}
        iconSize={30}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={155}
        selected={[1,2]} // list of options which are selected by default
        />
    )
}