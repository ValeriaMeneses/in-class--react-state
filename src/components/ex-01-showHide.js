import React, { Component } from 'react';

class ReadMore extends Component {
  constructor() {
    super();

    this.state = {
      extended: false
    }
  }

  _toggleMenu = () => {
    if (this.state.extended === true) {
      this.setState({
        extended: false
      })
    } else {
      this.setState({
        extended: true
      })
    }
  }

  render() {
    let styleObj = {
      display: 'none',
      color: 'yellow',
      backgroundColor: 'black'
    }

    if (this.state.extended === true) {
      styleObj.display = 'block'
    }

    return (
      <article>
        <h3>My Opinion...</h3>
        <button onClick={this._toggleMenu}>+ Read More</button>
        <p style={styleObj}>I hope you consider picking up a book some day. It will be good for you.</p>
      </article>
    );
  }
}

// <button onClick={ () => { this._printInConsole() } }>+ Read More</button>
// <button onClick={this._printInConsole.bind(this)}>+ Read More</button>

// document
//   .querySelector('button')
//   .addEventListener('click', function() {
//     if (document.querySelector('p').style.display === 'none')
//      document.querySelector('p').style.display = block;
//     else
//      docu.......display = none;
//   })

export default ReadMore;
