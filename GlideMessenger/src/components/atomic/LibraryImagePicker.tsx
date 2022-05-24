import * as Contacts from 'expo-contacts';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera";
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type pickerResultType = {
    cancelled: any,
    base64?: string | undefined,
    type?: "image" | "video" | undefined,
    duration?: number | undefined,
    height?: number | undefined,
    weight?: number | undefined,
    uri?: any,
    exif?: Record<string, any> | undefined, 
}


// export default class TestImagePicker extends Component {
// //export const TestComponents = () => {
//     state = {
//       image: "" , //null
//       uploading: false,
//     };
  
//     render() {
//       let {
//         image:string
//       } = this.state;
  
//       return (
//         <View style={styles.container}>
//           <StatusBar barStyle="default" />
  
//           <Text
//             style={styles.exampleText}>
//             Example: Upload ImagePicker result
//           </Text>
  
//           <Button
//             onPress={this._pickImage}
//             title="Pick an image from camera roll"
//           />
  
//           {this._maybeRenderImage()}
//           {this._maybeRenderUploadingOverlay()}
//         </View>
//       );
//     }

//     // <Button onPress={this._takePhoto} title="Take a photo" />
//     _maybeRenderUploadingOverlay = () => {
//         if (this.state.uploading) {
//           return (
//             <View
//               style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
//               <ActivityIndicator color="#fff" size="large" />
//             </View>
//           );
//         }
//       };
    
//       _maybeRenderImage = () => {
//         let {
//           image
//         } = this.state;
    
//         if (!image) {
//           return;
//         }
    
//         return (
//           <View
//             style={styles.maybeRenderContainer}>
//             <View
//               style={styles.maybeRenderImageContainer}>
//               <Image source={{ uri: image }} style={styles.maybeRenderImage} />
//             </View>
    
//             <Text
//               onPress={this._copyToClipboard}
//               onLongPress={this._share}
//               style={styles.maybeRenderImageText}>
//               {image}
//             </Text>
//           </View>
//         );
//       };
    
//       _share = () => {
//         Share.share({
//           message: this.state.image,
//           title: 'Check out this photo',
//           url: this.state.image,
//         });
//       };
    
//       _copyToClipboard = () => {
//         Clipboard.setString(this.state.image);
//         console.log('Copied image URL to clipboard');
//       };
//       /*
//       _takePhoto = async () => {
//         const {
//           status: cameraPerm
//         } = await Permissions.askAsync(Permissions.CAMERA);
    
//         const {
//           status: cameraRollPerm
//         } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
//         // only if user allows permission to camera AND camera roll
//         if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
//           let pickerResult:pickerResultType = await ImagePicker.launchCameraAsync({
//             allowsEditing: true,
//             aspect: [4, 3],
//           });
    
//           this._handleImagePicked(pickerResult);
//         }
//       };*/
//       _pickImage = async () => {
//         const {
//           status: cameraRollPerm
//         } //= await Permissions.askAsync(Permissions.CAMERA_ROLL);
//           = await Camera.requestCameraPermissionsAsync();
    
//         // only if user allows permission to camera roll
//         if (cameraRollPerm === 'granted') {
//           console.log("cameraRollPerm === 'granted'");
//           let pickerResult = await ImagePicker.launchImageLibraryAsync({
//             allowsEditing: true,
//             aspect: [4, 3],
//           });
          
//           this._handleImagePicked(pickerResult);
//         }
//       };

//       _handleImagePicked = (pickerResult: { 
//                                       cancelled: any;
//                                       base64?: string | undefined;
//                                       type?: "image" | "video" | undefined;
//                                       duration?: number | undefined; 
//                                       height?: number | undefined;
//                                       weight?: number | undefined;
//                                       uri?: string | Blob  | undefined;
//                                       exif?: Record<string, any> | undefined; 
//                                     }) => {
//                                       if (!pickerResult.cancelled) {
//                                         this.setState({
//                                                  image: pickerResult.uri
//                                               });
//                                         this._maybeRenderImage;
//                                       } else {
//                                         console.log('Upload failed, sorry :(');
//                                       }

//       // _handleImagePicked = async (pickerResult: { 
//       //                               cancelled: any;
//       //                               base64?: string | undefined;
//       //                               type?: "image" | "video" | undefined;
//       //                               duration?: number | undefined; 
//       //                               height?: number | undefined;
//       //                               weight?: number | undefined;
//       //                               uri?: string | Blob  | undefined;
//       //                               exif?: Record<string, any> | undefined; 
//       //                             }) => {
//       //   let uploadResponse, uploadResult;
    
//       //   try {
//       //     this.setState({
//       //       uploading: true
//       //     });
    
//       //     if (!pickerResult.cancelled) {
//       //       uploadResponse = await uploadImageAsync(pickerResult.uri);
//       //       console.log( "uploadResponse", uploadResponse?.body );//
//       //       if (typeof uploadResponse !== "undefined"){
//       //         uploadResult = await uploadResponse.json();
//       //         console.log( "uploadResult.location", uploadResult );//
//       //       this.setState({
//       //         image: uploadResult.location
//       //       });
//       //     }
//       //     }
//       //   } catch (e) {
//       //     console.log({ uploadResponse });
//       //     console.log({ uploadResult });
//       //     console.log({ e });
//       //     console.log('Upload failed, sorry :(');
//       //   } finally {
//       //     this.setState({
//       //       uploading: false
//       //     });
//       //   }
//       // };
//   }
// /*
// async function uploadImageAsync(uri:string| Blob | undefined) {
//     let apiUrl = 'https://file-upload-example-backend-dkhqoilqqn.now.sh/upload';
    
//     let fileType: string;
//     if (typeof uri == "undefined"){
//       console.log("error, uploadImageAsync, typeof uri == undefined");
//       return undefined;
//     } else{
//       if (typeof uri == "string"){
//         console.log("uploadImageAsync, typeof uri == string");
//         console.log("uri", uri);
//         let uriParts = uri.split('.'); 
//         fileType = uriParts[uriParts.length - 1];
//         //uriBl = new Blob([uri], {type: 'image/png'});
//       }
//       else {
//           console.log("uploadImageAsync, typeof uri == Blob");
//           let uriString = uri.toString();
//           let uriParts = uriString.split('.');
//           fileType = uriParts[uriParts.length - 1];
//           //uriBl = uri;
//       }
//     }
//     console.log("fileType",fileType);
//     console.log("uriString",uri);

//     // let uriBl = new Blob(
//     //   [uri],  // uri
//     //   {type: `image/${fileType}`},
//     // );
//     // console.log("Blob", uriBl);
//     // let newUriFromBlob = URL.createObjectURL(uriBl);
//     // console.log("newUriFromBlob", newUriFromBlob);
    
//     let formData = new FormData();
//     formData.append('photo',
//                     uri,
//                     `photo.${fileType}`,
//                   );
//     //let uriParts = uri.split('.');
//     //let fileType = uriParts[uriParts.length - 1];
  
//     // let formData = new FormData();
//     // formData.append('photo', {
//     //   uri,
//     //   name: `photo.${fileType}`,
//     //   type: `image/${fileType}`,
//     // });
//     console.log(formData);
  
//     let options = {
//       method: 'POST',
//       body: formData,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//       },
//     };
  
//     return fetch(apiUrl, options);*/
// }

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    exampleText: {
      fontSize: 20,
      marginBottom: 20,
      marginHorizontal: 15,
      textAlign: 'center',
    },
    maybeRenderUploading: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
    },
    maybeRenderContainer: {
      borderRadius: 3,
      elevation: 2,
      marginTop: 30,
      shadowColor: 'rgba(0,0,0,1)',
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 4,
        width: 4,
      },
      shadowRadius: 5,
      width: 250,
    },
    maybeRenderImageContainer: {
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      overflow: 'hidden',
    },
    maybeRenderImage: {
      height: 250,
      width: 250,
    },
    maybeRenderImageText: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    }
  });