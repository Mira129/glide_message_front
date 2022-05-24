import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      flex: 1,
      justifyContent: 'flex-start',
      paddingBottom: 15,
    },
    maybeRenderUploading: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
    },
    maybeRenderContainer: {
      borderRadius: 3,
      backgroundColor: "white",
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
      height: 150,
      width: 150,
      borderRadius: 75,
      backgroundColor: "white",
      borderColor: "black",
      overflow: 'hidden',
    },
    maybeRenderImage: {
      height: 150,
      width: 150,
    },
    maybeRenderImageText: {
      backgroundColor: "white",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    pressable: {
      height: 150,
      width: 150,
      borderRadius: 100,
      backgroundColor: COLORS.WHITE,
      opacity: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });