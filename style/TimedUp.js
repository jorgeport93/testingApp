import {StyleSheet } from 'react-native';
import {responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    width: responsiveWidth(110),
    height: responsiveHeight(100),
    position: 'absolute',
    top: 0,
    left: -8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999
  },

  alertDialog: {
    width: 300,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  warning: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#d33',
    marginBottom: 40
  },

  quizButton: {
    borderRadius: 5,
    backgroundColor: '#3D85C6',
    width: 160,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },

  quizButtonText: {
    fontSize: 15,
    color: '#fff'
  },
});