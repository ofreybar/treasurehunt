import React, { Component } from 'react';
/*must import square component to be rendered in gameboard*/
import Square from './Square.js'

class Board extends Component {
    constructor(props){
        super(props)
        /* establish global game state */
        this.state = {
            /*constructor randomly shuffles these 9 array elements on every reload */
            boardArray: ["neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "lose", "win", "lose", "lose", "win"].sort((a,b) => 0.5 - Math.random()),
            /*keeps track of game turns*/
            clicksRemaining: 10,
            gameOver: ""
        }
    }
    /* checks for win condition insuring game restart when needed. Will be called upon in Square. */
    handleClick = (e) => {
        let { clicksRemaining, gameOver } = this.state
        /*if gameover condition is not met, just ticks down counter*/
        let gameEnd = e.target.title
        let click = clicksRemaining - 1
        this.setState({clicksRemaining: click})
        /*this clause checks if the user's last click is winning or losing - prioritizes win/loss over exhausting clicks*/
        if (clicksRemaining === 1 && (e.target.title !== "win" && e.target.title !== "lose")) {
            this.setState({gameOver: gameEnd})
            /*set timeout allows image to show before alert pops up*/
            // setTimeout(() => {
            //     alert("Walk the plank, landlubber!")
            //     window.location.reload()
            // }, 200)
        } else {
            if (e.target.title === "win") {
                this.setState({gameOver: gameEnd})
                // setTimeout(() => {
                //     alert("Ahoy, ye found the booty!")
                //     window.location.reload()
                // }, 200)
            } else if (e.target.title === "lose") {
                this.setState({gameOver: gameEnd})
                // setTimeout(() => {
                //     alert("FIRE THE CANNONS!")
                //     window.location.reload()
                // }, 200)
            }
        }

    }

    resetGame = () => {
        window.location.reload()
    }

    render(){
        /*more destructuring!*/
        let { boardArray, clicksRemaining, gameOver } = this.state
        let { handleClick } = this
        return(
            <div>
            {/*the square where game displays*/}
                <div id="gameBoard">
                {/*for every item in board array, populates the board with a square. square is passed the value at the map index. also, passes handleclick method as props.*/}
                    { gameOver === "" ? boardArray.map(value =>
                        <Square value={value} handleClick={handleClick}
                        />
                    ) : <div id={gameOver}></div>
                }
                </div>
                <div>
                    {/* Portrays counter */}
                    { gameOver === "" ? <>
                    <h2 class="clicksleft">Clicks remaining:</h2>
                    <h3 class="clicksleft">{clicksRemaining}</h3></> : <button id="resetButton" onClick={this.resetGame}>Play again?</button> }
                </div>
            </div>


        )
    }
}

export default Board
