import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
// import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    };
  }

  // Lifecycle method, fires every time component is re-rendered
  componentWillMount() {
    this.setState( {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    } );
  }

  render() {
    return (
      // Only one element is permitted at top-level
      <div className="App">
        <AddProject />
        { /*<Projects test="Hello World" />*/ }
        <Projects projects={ this.state.projects } />
      </div>
    );
  }
}

export default App;
