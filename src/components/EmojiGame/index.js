/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props

    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="Game-bg">
          <ul className="unorder-el">
            {emojisList.map(each => (
              <EmojiCard
                emojiName={each.emojiName}
                emojiUrl={each.emojiUrl}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
