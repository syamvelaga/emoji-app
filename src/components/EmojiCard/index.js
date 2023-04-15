import './index.css'

function EmojiCard(props) {
  const {emojiUrl, emojiName} = props

  return (
    <li className="card">
      <button type="button" className="button">
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
