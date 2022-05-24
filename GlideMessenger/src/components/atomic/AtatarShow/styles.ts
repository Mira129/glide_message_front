import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'flex-start',
      marginLeft: 35,
    },
    maybeRenderImageContainer: {
      //height: 70,
     // width: 70,
      //borderRadius: 35,
      //backgroundColor: "white",
      borderColor: "black",
      overflow: 'hidden',
    },
    maybeRenderImage: {
      //height: 70,
      //width: 70,
    },
    pressable: {
      //height: 70,
      //width: 70,
     // borderRadius: 35,
      //backgroundColor: COLORS.WHITE,
      opacity: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });