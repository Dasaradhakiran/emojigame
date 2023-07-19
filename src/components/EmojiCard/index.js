// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, length, emojiFunction} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const emojiClick = () => {
    emojiFunction(id, length)
  }

  return (
    <li onClick={emojiClick} className="li-cont">
      <button type="button" className="li-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
