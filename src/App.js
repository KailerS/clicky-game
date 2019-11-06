import React, { Component } from 'react';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";


class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0
  }

  render() {
    return (
      <>
        <NavBar 
          {...this.state}
        />
        <Header />
        <MainContent />
        {/* <Footer /> */}
      
      
      </>
    )

  };
}

export default App;
