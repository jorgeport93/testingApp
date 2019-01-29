import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  quizNo : {
    fontSize: 25,
    marginBottom: 20,
  },

  quizText: {
    fontSize: 18,
    marginBottom: 20,
    width: 300,
    alignSelf: 'center'
  },

  quizTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20
  },

  quizTime: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  answerItem: {
    width: 300,
    display: 'flex',
    paddingVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  answerSelected: {
    borderWidth: 2,
    borderColor: '#555'
  },

  answerDesc: {
    color: '#333',
    fontSize: 16,
  },
  
  quizbuttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
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

  finishedButton: {
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
  },

  quizButtonText: {
    fontSize: 15,
    color: '#fff'
  },

  finishedButtonText: {
    color: '#333'
  }
});