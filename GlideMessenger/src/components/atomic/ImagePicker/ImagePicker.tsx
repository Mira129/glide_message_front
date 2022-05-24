import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";
import React, { Component, useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StatusBar,
  View,
} from 'react-native';
import { ICONS } from '../../../../assets/globalStyles';
import { styles } from './styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ActionTypes, IState } from '../../../store/store';

interface ImagePickerProps {
  avatar?: string;
  onLoad : (uri:string) => void;
}

export const ImagePickerRender : React.FC<ImagePickerProps> = ({avatar, onLoad, ...props}) => {
  console.log("avatar", avatar);
/*
  async function DownloadImageAsync(uri:string) {
      try {
          // console.log("uploadImageAsync, typeof uri == string");
          console.log("uri", uri);
          let uriParts = uri.split('.'); 
            let fileType = uriParts[uriParts.length - 1];
            console.log("fileType",fileType);
          let filename = `image.${fileType}`;
          let formData = new FormData();
          formData.append('image', { uri: uri, name: filename, fileType });
          console.log(formData);

          let apiUrl = 'https://glidemess.pw/api/v1/user/update/avatar';
          let options = {
              method: 'PUT',
              body: formData,
              headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              }
          }
          let response = await fetch(apiUrl, options);
          if (response.ok) {
              console.log('response.ok');
              if (response.status >= 200 && response.status < 300) {
                  console.log('Successfully send');
              }
          }
          else{
                  console.log("problem", response.status, response.statusText);
              }
      }
      catch(error) {
          console.log('error', error);
      };   
  };
*/
  const pickImage = (async () => {
  const {
      status: cameraRollPerm
  } = await Camera.requestCameraPermissionsAsync();
  // only if user allows permission to camera roll
  if (cameraRollPerm === 'granted') {
      console.log("cameraRollPerm === 'granted'");
      let pickerResult: { 
        cancelled: any;
        base64?: string | undefined;
        type?: "image" | "video" | undefined;
        duration?: number | undefined; 
        height?: number | undefined;
        weight?: number | undefined;
        uri?: string | Blob  | undefined;
        exif?: Record<string, any> | undefined; 
      } = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
      });
      
      if (!pickerResult.cancelled) {
          console.log("pickerResult.uri", pickerResult.uri);
           if (typeof pickerResult.uri == "string"){
              const str:string = pickerResult.uri;
              onLoad(str);
              //setAvatar(pickerResult.uri);
              //dispatch({ type: ActionTypes.DOWNLOADPHOTO, payload: str });
      }
      } else {
        console.log('Upload failed, sorry :(');
      }
  }
});

if (avatar == ""){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Pressable onPress={pickImage} style={styles.pressable}>
        <Image 
            source={ICONS.imgNoPhotoProfile}
            style={{ width: 20, height: 20 }}
        />
      </Pressable>
    </View>
  );
} else {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Pressable onPress={pickImage} style={styles.maybeRenderImageContainer}>
        <View style={styles.maybeRenderImageContainer}>
            <Image source={{ uri: avatar }} style={styles.maybeRenderImage} />
        </View>
      </Pressable>
    </View>
  );
  };
}

