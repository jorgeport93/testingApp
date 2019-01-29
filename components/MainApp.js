import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import QuizPage from './QuizPage';

export class MainApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      quizStarted : false
    }
  }

  startQuiz = () => {
    this.setState({quizStarted: true});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.quizStarted && 
          <QuizPage />
        }
        {!this.state.quizStarted && 
          <TouchableOpacity onPress={this.startQuiz} style = {styles.quizButton}><Text style={styles.quizButtonText}>Start Quiz</Text></TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  quizButton: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#ccc',
    width: 150,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  
  quizButtonText: {
    fontSize: 15
  }
});