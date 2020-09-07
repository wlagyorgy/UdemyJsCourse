/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

class Player {
    constructor(name, roundScore, globalScore, active){
        this.name = name
        this.roundScore = roundScore
        this.globalScore = globalScore
        this.active = active
    }

    setActive() {
        this.active = true
        this.roundScore = 0
    }
    
    setInactive() {
        this.active = false
    }

    rollDice() {
        let tempScore = Math.floor( Math.random() * 6 ) + 1
        if ( tempScore > 1 ) {
            this.roundScore += tempScore
        }
        else {
            this.setInactive()
        }
    }

    holdScore() {
        this.score += this.roundScore
        this.checkWinner()
    }

    checkWinner () {
        if (this.globalScore >= 100) {
            console.log(this.name + " won!")
        }
    }
}

player1 = new Player("Player1", 0, 0, false)
player2 = new Player("Player2", 0, 0, false)


document.querySelector('.btn-roll').addEventListener('click', function(){
    console.log('lofasz')
})
