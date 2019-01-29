import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  quizResultContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },

  quizText: {
    fontSize: 25,
    color: '#333',
  },

  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  
  boldText: {
    fontWeight: 'bold'
  },

  quizButton: {
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
    width: 160,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },

  quizButtonText: {
    fontSize: 15,
    color: '#333'
  },
});