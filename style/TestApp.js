import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
    paddingHorizontal: 20,
    textAlign: 'center'
  },

  desc: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    lineHeight: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
    textAlign: 'center'
  },

  quizButton: {
    backgroundColor: '#3D85C6',
    width: 160,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  
  quizButtonText: {
    fontSize: 20,
    color: '#fff'
  }
});