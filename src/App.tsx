/// App.tsx

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { RootState } from './redux/reducer/rootReducer';
import { increment, decrement } from './redux/reducer/voteSlice';

type MyProps = {
  catCount: number;
  dogCount: number;
  increment: any;
  decrement: any;
};

class App extends React.Component<MyProps> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            cat: {this.props.catCount}      <br />
            dog: {this.props.dogCount}
          </p>
          <button onClick={() => this.props.increment('cat')}>Vote Cat</button>
          <button onClick={() => this.props.increment('dog')}>Vote Dog</button>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state:RootState) => ({
  catCount: state.vote.catCount,
  dogCount: state.vote.dogCount,
})
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);