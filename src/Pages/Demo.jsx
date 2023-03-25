import React, { Component } from 'react';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: "Default Data Content"
    }
  }
 
  saveDataContent = () => {
      this.setState({ comments: "Good Luck Your Product Data Updated Content!"});
  }
 
  render() {
    return (
      <div>
        <div className="h1 bg-suceess text-white text-center p-2">
          { this.state.comments }
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.saveDataContent}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
 
export default App;