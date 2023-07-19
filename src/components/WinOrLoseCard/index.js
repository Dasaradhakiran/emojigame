// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gameScore, winGame, length, playFunction} = props

  let winOrLossContainer
  if (winGame === true) {
    winOrLossContainer = (
      <div className="card-cont">
        <div className="card-text-cont">
          <h1 className="card-head">You Won</h1>
          <p className="card-score-text">Best Score</p>
          <p className="card-score">
            {gameScore}/{length}
          </p>
          <button type="button" onClick={playFunction} className="card-btn">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="card-img"
        />
      </div>
    )
  } else {
    winOrLossContainer = (
      <div className="card-cont">
        <div className="card-text-cont">
          <h1 className="card-head">You Lose</h1>
          <p className="card-score-text">Score</p>
          <p className="card-score">
            {gameScore}/{length}
          </p>
          <button type="button" onClick={playFunction} className="card-btn">
            Play Again
          </button>
        </div>
        <img
          className="card-img"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }

  return winOrLossContainer
}

export default WinOrLoseCard
