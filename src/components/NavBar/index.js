// Write your code here.

import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bg">
        <div className="content-bg">
          <div className="name-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
            </div>
            <p>Emoji Game</p>
          </div>
          <div className="score-container">
            <p className="score">Score: 0</p>
            <p>Top Score: 0</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
