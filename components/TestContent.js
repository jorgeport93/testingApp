import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { fetchTestData } from '../actions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { styles } from '../style/TestContent';
import LoadingScreen from './LoadingScreen';
import TimedUp from './TimedUp';
import TestFinished from './TestFinished';
import ProblemContent from './ProblemContent'

class TestContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: [],
      selectedAnswer : -1,
      quizNo: 0,
      quiz_results: [],
      quiz_finished: false,
      quiz_mark: 0,
      quiz_total_time: 0,
      quiz_timeinsecond: 0,
    }
  }

  componentDidMount() {
    this.props.fetchTestItems();
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.isLoading && nextProps.data.length > 0){
      let answers = nextProps.data[0].incorrect_answers;
      let correct_answer_index = Math.floor(Math.random() * (answers.length + 1));
      answers.splice(correct_answer_index, 0, nextProps.data[0].correct_answer);
      this.setState({answers});

      this.interval = setInterval(
        () => this.setState({ quiz_timeinsecond: this.state.quiz_timeinsecond + 1 }),
        1000
      );

    }
  }

  gotonextProblem = () => {
    let quiz_timeinsecond = this.state.quiz_timeinsecond;
    let quiz_total_time = this.state.quiz_total_time;
    quiz_total_time += quiz_timeinsecond;
    this.setState({quiz_total_time});
    clearInterval(this.interval);
    this.setState({quiz_timeinsecond: 0});
    
    this.setState({quizNo: this.state.quizNo + 1});

    let quiz_results = this.state.quiz_results;
    if(quiz_results.length <= this.state.quizNo){
      if(this.props.data[this.state.quizNo].correct_answer === this.state.answers[this.state.selectedAnswer]){
        quiz_results.push(true);
      }else{
        quiz_results.push(false);
      }
    }else{
      if(this.props.data[this.state.quizNo].correct_answer === this.state.answers[this.state.selectedAnswer])
        quiz_results[this.state.quizNo] = true;
      else
        quiz_results[this.state.quizNo] = false;
    }

    let answers = this.props.data[this.state.quizNo + 1].incorrect_answers;
    if(this.state.quiz_results.length <= this.state.quizNo + 1){
      let correct_answer_index = Math.floor(Math.random() * (answers.length + 1));
      answers.splice(correct_answer_index, 0, this.props.data[this.state.quizNo + 1].correct_answer);
    }
    this.setState({answers});
    this.setState({quiz_results});
    this.interval = setInterval(
      () => this.setState({ quiz_timeinsecond: this.state.quiz_timeinsecond + 1 }),
      1000
    );

    this.setState({selectedAnswer: -1});
  }

  selectAnswer = (value) => {
    this.setState({selectedAnswer: value});
  }

  startquizagain = () => {
    this.setState({quizNo : 0});
    this.setState({quiz_finished: false});
    clearInterval(this.interval);
    this.setState({quiz_timeinsecond: 0});
    this.setState({quiz_total_time: 0});
    this.interval = setInterval(
      () => this.setState({ quiz_timeinsecond: this.state.quiz_timeinsecond + 1 }),
      1000
    );

    let answers = this.props.data[0].incorrect_answers;
    this.setState({answers});
  }

  submitResult = () => {
    let quiz_timeinsecond = this.state.quiz_timeinsecond;
    let quiz_total_time = this.state.quiz_total_time;
    quiz_total_time += quiz_timeinsecond;
    this.setState({quiz_total_time});

    let quiz_results = this.state.quiz_results;
    if(this.props.data[this.state.quizNo].correct_answer === this.state.answers[this.state.selectedAnswer]){
      quiz_results.push(true);
    }else{
      quiz_results.push(false);
    }

    this.setState({quiz_results});
    const correct_answer_array = this.state.quiz_results.filter(value => value === true);
    const quiz_mark = correct_answer_array.length / 2;
    this.setState({quiz_finished: true});
    this.setState({quiz_mark});
  }

  selectAnswerItem = (index) => {
    this.setState({selectedAnswer: index});
  }

  timedUp() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.props.data);
    return (
      <View style={styles.container}>
        {
          this.props.isLoading &&
            <LoadingScreen />
        }
        {
          this.props.errored &&
            <Text>There is an error while fetching data</Text>
        }
        {
          this.state.quiz_timeinsecond === 120 && !this.state.quiz_finished &&
            <TimedUp onLayout={this.timedUp()} quizNo = {this.state.quizNo} submitResult = {this.submitResult} gotonextProblem = {this.gotonextProblem} />
        }
        {
          this.props.isLoading === false && !this.state.quiz_finished &&
            <ProblemContent data = {this.props.data} quizNo = {this.state.quizNo} answers = {this.state.answers} selectAnswer = {this.props.selectAnswer} gotonextProblem = {this.gotonextProblem} selectedAnswer = {this.state.selectedAnswer} quiz_timeinsecond = {this.state.quiz_timeinsecond} selectAnswerItem = {this.selectAnswerItem} submitResult = {this.submitResult} />
        }
        {
          this.state.quiz_finished && 
            <TestFinished quiz_mark = {this.state.quiz_mark} quiz_total_time = {this.state.quiz_total_time} startquizagain = {this.startquizagain} />
        }
      </View>
    );
  }
}

TestContent.propTypes = {
  fetchTestItems: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {
    data: state.data,
    errored: state.errored,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTestItems: () => dispatch(fetchTestData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContent)