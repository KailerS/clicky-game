import React, { Component } from 'react';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ImageDiv from "./components/ImageDiv";
import data from "./data.json"
// import Footer from "./components/Footer";


class App extends Component {
  state = {
    data,
    currentScore: 0,
    topScore: 0
  }
  
  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }
  
  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };
  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };
  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };
  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };
  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };


  render() {
    return (
      <>
        <NavBar 
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Header />
        <main className="container">
          {this.state.data.map(character => (
            <ImageDiv
              key={character.id}
              id={character.id}
              handleClick={this.handleItemClick}
              image={character.image}
            />
          ))}
        </main>
        {/* <Footer /> */}
      
      
      </>
    )

  };
}

export default App;
