import React from 'react';
import { Image, ImageStyle, StatusBar, StyleProp, View, ViewStyle } from 'react-native';
import { ICONS } from '../../../../assets/globalStyles';
import { styles } from './styles';

interface AvatarShowProps {
    styleContainer: StyleProp<ViewStyle>;
    styleImage: StyleProp<ImageStyle>;
    avatar: string;
    onLoad? : (uri:string) => void;
}

export const AvatarShow : React.FC<AvatarShowProps> = ({styleContainer, avatar, styleImage, onLoad, ...props}) => {
  console.log("avatar in AvatarShow", avatar);
  const st=styleImage;
  //let uri = "";
//   if (avatar !== undefined){
//     uri = avatar;
//   }
  
if ((avatar == "") || (avatar == undefined)){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
        <View style={[styleContainer, styles.pressable]}>
            <Image 
                source={ICONS.imgNoPhotoProfile}
                style={{ width: 20, height: 20 }}
            />
        </View>
    </View>
  );
} else {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={[styleContainer, styles.maybeRenderImageContainer]}>
            <Image source={{ uri: 'https://glidemess.pw/api/v1/'+avatar }} style={styleImage} />
        </View>
    </View>
  );
  };
}