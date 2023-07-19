import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    win: false,
    lose: false,
    gameEmojiList: [],
  }

  onClickEmoji = (idNum, num) => {
    const {gameEmojiList, score} = this.state
    const checkList = gameEmojiList.filter(eachId => eachId === idNum)
    switch (true) {
      case checkList.length !== 0:
        this.setState({lose: true})
        break
      case num - 1 === score:
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({win: true})
        break
      default:
        this.setState(prevState => ({
          gameEmojiList: [...prevState.gameEmojiList, idNum],
          score: prevState.score + 1,
        }))
    }
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({score: 0, win: false, lose: false, gameEmojiList: []})
  }

  render() {
    const {score, topScore, win, lose, gameEmojiList} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const randomEmojiList = shuffledEmojisList()
    const listLength = randomEmojiList.length
    console.log(gameEmojiList)

    let gameEmojiContainer
    if (win === true || lose === true) {
      gameEmojiContainer = (
        <WinOrLoseCard
          gameScore={score}
          winGame={win}
          length={listLength}
          playFunction={this.onPlayAgain}
        />
      )
    } else {
      gameEmojiContainer = (
        <ul className="ul-cont">
          {randomEmojiList.map(eachItem => (
            <EmojiCard
              emojiDetails={eachItem}
              key={eachItem.id}
              length={listLength}
              emojiFunction={this.onClickEmoji}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="app-cont">
        <NavBar
          gameScore={score}
          gameTopScore={topScore}
          winGame={win}
          loseGame={lose}
        />
        <div className="app-sub-cont">{gameEmojiContainer}</div>
      </div>
    )
  }
}

export default EmojiGame
