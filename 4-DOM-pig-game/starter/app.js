/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying, prevDice, winnigScore

initGame()
//document.getElementById('current-0').textContent = dice
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//var x = document.querySelector('div')
//console.log(x)
// change the style of the DOM element
//document.querySelector('.dice').style.display = 'none'


//rol the dice
document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gamePlaying) {
        dice1 = Math.floor( Math.random() * 6 ) + 1
        let diceDOM1 = document.getElementById('dice_1')
        let diceDOM2 = document.getElementById('dice_2')
        diceDOM1.style.display ='block'
        diceDOM2.style.display ='block'
        let activePlayerDOM = document.querySelector('#current-' + activePlayer)
        diceDOM1.src = 'dice-' + dice1 + '.png'
        dice2 = Math.floor( Math.random() * 6 ) + 1
        diceDOM2.src = 'dice-' + dice2 + '.png'
        // Original Rule
        /* if (dice > 1) {
            roundScore += dice
            activePlayerDOM.textContent = roundScore
        }
        else {
            nextPlayer()
        } */

        //1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
        /* if ( dice == 6 && prevDice == 6){
            scores[activePlayer] = 0
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            nextPlayer()
        }
        else {
            roundScore += dice
            activePlayerDOM.textContent = roundScore
            prevDice = dice
        } */

        //3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
        if (dice1 == 1 || dice2 == 1) {
            roundScore = 0
            activePlayerDOM.textContent = roundScore
        }
        else {
            roundScore += dice1 + dice2
            activePlayerDOM.textContent = roundScore
        }

    }
})


//hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
    //Add currentscore to global score
    scores[activePlayer] += roundScore
    //update DOM
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    if (scores[activePlayer] < winnigScore) {
        nextPlayer()
    }
    else {
        document.querySelector('#name-' + activePlayer).textContent ='Winner'
        console.log('Player ' + (activePlayer + 1) + ' won the game!')
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        gamePlaying = false
    
    }
}
})


document.querySelector('.btn-new').addEventListener('click', initGame)


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    prevDice = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.getElementById('dice_1').style.display ='none'
    document.getElementById('dice_2').style.display ='none'
}

function initGame(){
    scores = [0,0]
    roundScore = activePlayer = 0
    gamePlaying = true
    prevDice = 0

    document.getElementById('dice_1').style.display ='none'
    document.getElementById('dice_2').style.display ='none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')

    //2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
    winnigScore = document.querySelector('.inpt-winningscore').value ? document.querySelector('.inpt-winningscore').value : 100
}




/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/