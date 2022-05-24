import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";
import React, { Component, useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Pressable,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ICONS } from '../../../assets/globalStyles';
import { styles } from './ImagePicker/styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ActionTypes, IState } from '../../store/store';
import RNFetchBlob from 'react-native-fetch-blob';


export class TestImagePicker extends Component {

    state = {
      image: "", //null
      uploading: false,
    };
  
    render() {
      let {
        image
      } = this.state;


    if (image == ""){
      console.log("image == str");
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <Pressable onPress={this._pickImage} style={styles.pressable}>
            <Image 
                source={ICONS.imgNoPhotoProfile}
                style={{ width: 20, height: 20 }}
            />
          </Pressable>
        </View>
      );//           {this._maybeRenderImage()}
    } else {
      console.log("image == uri");
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <Pressable onPress={this._pickImage} style={styles.maybeRenderImageContainer}>
            <View style={styles.maybeRenderImageContainer}>
                <Image source={{ uri: image }} style={styles.maybeRenderImage} />
            </View>
          </Pressable>
        </View>
      ); //           {this._maybeRenderImage()}
    }
    }
    
    _maybeRenderImage = () => {
    let {
        image
    } = this.state;

    if (!image) {
        return;
    };
    console.log('in ._maybeRenderImage');
    return(
        <View style={styles.maybeRenderContainer}>
          <View style={styles.maybeRenderImageContainer}>
              <Image source={{ uri: image }} style={styles.maybeRenderImage} />
          </View>

          <Text
              onPress={this._copyToClipboard}
              onLongPress={this._share}
              style={styles.maybeRenderImageText}>
              {image}
          </Text>
        </View>
    );
    };
    
    _share = () => {
    Share.share({
        message: this.state.image,
        title: 'Check out this photo',
        url: this.state.image,
    });
    };
    
    _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    console.log('Copied image URL to clipboard');
    };
    
    _pickImage = async () => {
    const {
        status: cameraRollPerm
    } //= await Permissions.askAsync(Permissions.CAMERA_ROLL);
        = await Camera.requestCameraPermissionsAsync();

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
        console.log("cameraRollPerm === 'granted'");
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        });
        
        this._handleImagePicked(pickerResult);
    }
    };

    _handleImagePicked = (pickerResult: { 
                                    cancelled: any;
                                    base64?: string | undefined;
                                    type?: "image" | "video" | undefined;
                                    duration?: number | undefined; 
                                    height?: number | undefined;
                                    weight?: number | undefined;
                                    uri?: string | Blob  | undefined;
                                    exif?: Record<string, any> | undefined; 
                                }) => {
                                    if (!pickerResult.cancelled) {
                                    this.setState({
                                                image: pickerResult.uri
                                            });
                                    //console.log('going to ._maybeRenderImage');
                                    //this._maybeRenderImage;
                                    //this.dispatch({ type: 'DownloadPhoto', payload: pickerResult.uri });
                                    } else {
                                    console.log('Upload failed, sorry :(');
                                    }
                                }
}
////////////////////////////////////////////////////////////////////////////

export interface MapStateProps {
  avatar: string,
}

function mapStateToProps(state: IState) {
  const avatar = state.avatar;
  // component receives additionally:
  return { avatar }
}

export const ImagePickerRender = () => {
    const dispatch = useDispatch();
    const [avatar, setAvatar]  = React.useState("");
/*
    const UploadImageAsync = (uri:string) =>{
      //const RNFetchBlob = require('react-native-fetch-blob').default;
      RNFetchBlob.fetch('PUT', 'https://glidemess.pw/api/v1/user/update/avatar', {
        Authorization : "Bearer access-token",
        otherHeader : "foo",
        'Content-Type' : 'multipart/form-data',
      }, [
        // part file from storage
        { name : 'avatar', filename : 'avatar.jpg', type:'image/ipg', data: RNFetchBlob.wrap(uri)},
        // elements without property `filename` will be sent as plain text
      ]).then((resp) => {
        //
      }).catch((err) => {
        console.log('error downloading', err);
      })
    }
*/
/*
    async function DownloadImageAsync(uri:string) {
        try {
            // console.log("uploadImageAsync, typeof uri == string");
            console.log("uri", uri);
            let uriParts = uri.split('.'); 
              let fileType = uriParts[uriParts.length - 1];
              console.log("fileType",fileType);
            
            // if ( typeof uri !== "string"){
              
            // 

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
                setAvatar(pickerResult.uri);
                dispatch({ type: ActionTypes.DOWNLOADPHOTO, payload: str });
                //UploadImageAsync(str);
        }
        } else {
          console.log('Upload failed, sorry :(');
        }
    }
  });

  if (avatar == ""){
    console.log("image == str");
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
    );//           {this._maybeRenderImage()}
  } else {
    console.log("image == uri");
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Pressable onPress={pickImage} style={styles.maybeRenderImageContainer}>
          <View style={styles.maybeRenderImageContainer}>
              <Image source={{ uri: avatar }} style={styles.maybeRenderImage} />
          </View>
        </Pressable>
      </View>
    ); //
    };
}

export default connect(mapStateToProps)(ImagePickerRender)

////////////////////////////////////////////////////////////////

export const ImagePickerF: React.FC = () => {
  const dispatch = useDispatch();
  const avatar  = useSelector((state:IState) => state.avatar);

  const pickImage = useCallback(async () => {
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
         // state.avatar = pickerResult.uri;
         // state.setState({avatar: pickerResult.uri});
          return () => dispatch({ type: 'DownloadPhoto', payload: pickerResult.uri });
        } else {
          console.log('Upload failed, sorry :(');
        }
    }
  }, [ dispatch, avatar ]);

  useEffect(() => {
    dispatch({ type: 'DownloadPhoto', payload: avatar });
    console.log('after useEffect avatar', avatar); 
  }, [dispatch, avatar]);

    if (avatar == "" || avatar == undefined){
      console.log("image == str");
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <Pressable onPress={ pickImage } style={styles.pressable}>
            <Image 
                source={ICONS.imgNoPhotoProfile}
                style={{ width: 20, height: 20 }}
            />
          </Pressable>
          <Text>avatar: {avatar}</Text>
        </View>
      );//           {this._maybeRenderImage()}
    } else {
      console.log("image == uri", avatar);
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <Pressable onPress={ pickImage } style={styles.maybeRenderImageContainer}>
            <View style={styles.maybeRenderImageContainer}>
                <Image source={{ uri: avatar}} style={styles.maybeRenderImage} />
            </View>
          </Pressable>
          <Text>avatar: {avatar}</Text>
        </View>
      ); 
    }

};