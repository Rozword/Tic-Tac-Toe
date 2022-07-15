let gameboard = (() => {
    let spot1 = document.querySelector('#spot1')
    let spot2 = document.querySelector('#spot2')
    let spot3 = document.querySelector('#spot3')
    let spot4 = document.querySelector('#spot4')
    let spot5 = document.querySelector('#spot5')
    let spot6 = document.querySelector('#spot6')
    let spot7 = document.querySelector('#spot7')
    let spot8 = document.querySelector('#spot8')
    let spot9 = document.querySelector('#spot9')
    let gameboardCells = [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8, spot9]
    const print = function(){console.log(this)}
    print()
    return{gameboardCells};

})();

console.log(gameboard.gameboardCells[4])


let player = (name, marker) => {
    let score = 0
    return{name, marker, score}

}

let playerOne = player(`playerOne`, 'X')
let playerTwo = player(`playerTwo`, 'O')

let getPlayersName = (() =>{
    let getPlayerOneName = () => {
     playerOne.name = document.querySelector('#playerOne').value
     document.querySelector('#playerOne').value = ''
    }    
    let getPlayerTwoName = () => {
    playerTwo.name = document.querySelector('#playerTwo').value    
    document.querySelector('#playerTwo').value = ''
    }
    return{getPlayerOneName, getPlayerTwoName}
})()


let gameController = (() => {
    let turnMarker
    let turnCount = 0
    function resetBoard() {
        gameboard.gameboardCells.forEach(function(cell){
        cell.textContent = ''
        })       
    }
    return{turnMarker, turnCount, resetBoard}
})();



console.log(playerTwo.score)


function boardDraw(){
    gameboard.gameboardCells.forEach(function(cell){
        cell.addEventListener('click', function(){            
            if(cell.textContent === ''){
                turns()           
                cell.textContent = gameController.turnMarker
            }
            let checkGameOver = (() => {
                setTimeout(gameOver, 1)
            })();
        })
    })     
       
    };   



function turns() {    
    if (gameController.turnCount % 2 === 0){
        gameController.turnMarker = playerOne.marker
        gameController.turnCount++
    }
    else if (gameController.turnCount % 2 !== 0){
        gameController.turnMarker = playerTwo.marker
        gameController.turnCount++
    }    
}


function gameOver(){
    if((spot1.textContent === spot2.textContent) && (spot1.textContent === spot3.textContent)){
        if (spot1.textContent === playerOne.marker){
            alert(`${playerOne.name} wins!`)
            gameController.resetBoard();
        }
        else if((spot1.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }
    }
    else if ((spot1.textContent === spot4.textContent) && (spot1.textContent === spot7.textContent)){
        if (spot1.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot1.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }    
        }
    else if ((spot1.textContent === spot5.textContent) && (spot1.textContent === spot9.textContent)){
        if (spot1.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot1.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }    
    }
    else if ((spot2.textContent === spot5.textContent) && (spot2.textContent === spot8.textContent)){
        if (spot2.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot2.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }
    }  
    
    else if ((spot3.textContent === spot5.textContent) && (spot3.textContent === spot7.textContent)){
        if (spot3.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot3.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }
    } 

    else if ((spot3.textContent === spot6.textContent) && (spot3.textContent === spot9.textContent)){
        if (spot3.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot3.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }
    }
        
    else if ((spot4.textContent === spot5.textContent) && (spot4.textContent === spot6.textContent)){
        if (spot4.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot4.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }
    } 

    else if ((spot7.textContent === spot8.textContent) && (spot7.textContent === spot9.textContent)){
        if (spot7.textContent === playerOne.marker){
            alert('Player 1 wins!')
            gameController.resetBoard();
        }
        else if((spot7.textContent === playerTwo.marker)){
            alert('Player 2 wins!')
            gameController.resetBoard();
        }
    }
    else if (
    (spot1.textContent !== '') && (spot2.textContent !== '') && (spot3.textContent !== '') && 
    (spot4.textContent !== '') && (spot5.textContent !== '') && (spot6.textContent !== '') && 
    (spot7.textContent !== '') && (spot8.textContent !== '') && (spot9.textContent !== ''))
    {
        alert('Tie!')
        gameController.resetBoard();
    }
}





