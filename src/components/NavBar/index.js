// Write your code here.
import './index.css'

const NavBar = props => {
  const {gameScore, gameTopScore, winGame, loseGame} = props

  const scoreContainer = !(winGame || loseGame)

  return (
    <nav className="nav-elem">
      <div className="logo-cont">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {scoreContainer && (
        <div className="score-cont">
          <p className="logo-text">Score: {gameScore}</p>
          <p className="logo-text">Top Score: {gameTopScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
