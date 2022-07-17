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
    return{gameboardCells};

})();

let player = (name, marker) => {
    let score = 0
    return{name, marker, score}

}

let playerOne = player(`Player One`, 'X')
let playerTwo = player(`Player Two`, 'O')




let getPlayersName = (() =>{
    let getPlayerOneName = () => {
     playerOne.name = document.querySelector('#playerOne').value
     document.querySelector('#playerOne').value = ''
     document.querySelector('#playerOneLabel').textContent = `${playerOne.name}`
     gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`
    }    
    let getPlayerTwoName = () => {
    playerTwo.name = document.querySelector('#playerTwo').value    
    document.querySelector('#playerTwo').value = ''
    document.querySelector('#playerTwoLabel').textContent = `${playerTwo.name}`
    gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`
    }
    return{getPlayerOneName, getPlayerTwoName}
})()


let gameController = (() => {
    let turnMarker
    let turnCount = 0
    let gameStart = false
    let pc = false
    let scoreBoard = document.querySelector('#score')
    
    function resetBoard() {
        gameboard.gameboardCells.forEach(function(cell){
        cell.textContent = ''        
        })       
    }
    return{turnMarker, turnCount, resetBoard, gameStart, scoreBoard, pc}
})();

let pcOn = (()=>{
    gameController.pc = true
    playerTwo.name = `Computer`
    document.querySelector('#playerTwoLabel').textContent = `${playerTwo.name} ('O')`
    gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`
})



function letGameStart (){
    gameController.gameStart = true
}
function resetGame(){
        gameController.resetBoard() 
        playerOne.name = `Player One`
        playerOne.score = 0
        playerTwo.name = `Player Two`
        playerTwo.score = 0
        pc = false
        gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`
        document.querySelector('#playerOneLabel').textContent = `${playerOne.name} ('X')`
        document.querySelector('#playerTwoLabel').textContent = `${playerTwo.name} ('O')`
}

let boardDraw =(()=>{    
    gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`
    gameboard.gameboardCells.forEach(function(cell){
        cell.addEventListener('click', function(){ 
            if (gameController.gameStart === true){ 
                if(gameController.pc === false){          
                if(cell.textContent === ''){
                    turns()           
                    cell.textContent = gameController.turnMarker
                 }
                    let checkGameOver = (() => {
                    setTimeout(gameOver, 500)
                })();
                }
                
                else if (gameController.pc === true){
                    if(cell.textContent === ''){                                 
                        cell.textContent = playerOne.marker
                        for(let i = 0;gameboard.gameboardCells.length; i++ ){
                            if(gameboard.gameboardCells[i].textContent === '' ){
                                break
                            }
                            else{
                                setTimeout(gameOver, 500)
                                continue
                                
                            }
                        }  
                        for(;;){
                            let pcCell = gameboard.gameboardCells[Math.floor(Math.random()*gameboard.gameboardCells.length)]
                            if (pcCell.textContent === ''){
                                pcCell.textContent = playerTwo.marker
                            break;
                            }                            
                        }
                    
                     }
                         let checkGameOver = (() => {
                        setTimeout(gameOver, 500)
                    })();
                    }
            }
            })
            })           
        })();
  



function turns () {    
    if (gameController.turnCount % 2 === 0){
        gameController.turnMarker = playerOne.marker
        gameController.turnCount++
    }
    else if (gameController.turnCount % 2 !== 0){
        gameController.turnMarker = playerTwo.marker
        gameController.turnCount++
    }    
}

function pcTurns() {
    if (gameController.turnCount % 2 === 0){
        gameController.turnMarker = playerOne.marker
        gameController.turnCount++
    }
    else if (gameController.turnCount % 2 !== 0){
        gameController.turnMarker = playerTwo.marker  
        gameController.turnCount++      
    } 
    
};



let result = (() =>{
    function showPlayerOne() {
            gameController.gameStart = false
            gameController.turnCount = 0
            document.querySelector('#winnerPopup').style.display = 'block'  
            document.querySelector('#winnerPopup').style.backgroundColor = 'pink'                 
            document.querySelector('#winnerPopupText').textContent = `${playerOne.name} wins!` 
            document.querySelector('#winnerPopupText').style.margin = `0` 
            gameController.resetBoard();    
            playerOne.score++  
            gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`  
    }
    function showPlayerTwo() {
            gameController.gameStart = false
            gameController.turnCount = 0
            document.querySelector('#winnerPopup').style.display = 'block'  
            document.querySelector('#winnerPopup').style.backgroundColor = 'lightblue'                 
            document.querySelector('#winnerPopupText').textContent = `${playerTwo.name} wins!` 
            document.querySelector('#winnerPopupText').style.margin = `0` 
            gameController.resetBoard();
            playerTwo.score++ 
            gameController.scoreBoard.textContent = `${playerOne.name}:${playerOne.score} / ${playerTwo.name}:${playerTwo.score}`
    }
    function tie(){
            gameController.gameStart = false
            gameController.turnCount = 0
            document.querySelector('#winnerPopup').style.display = 'block'  
            document.querySelector('#winnerPopup').style.backgroundColor = 'white'                 
            document.querySelector('#winnerPopupText').textContent = `It\'s a tie!` 
            document.querySelector('#winnerPopupText').style.margin = `0` 
            gameController.resetBoard();
    }
    return{showPlayerOne, showPlayerTwo, tie}
})();



function gameOver(){
    if((spot1.textContent === spot2.textContent) && (spot1.textContent === spot3.textContent)){
        if (spot1.textContent === playerOne.marker){
            result.showPlayerOne();            
        }
        else if((spot1.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }
    }
    else if ((spot1.textContent === spot4.textContent) && (spot1.textContent === spot7.textContent)){
        if (spot1.textContent === playerOne.marker){
            result.showPlayerOne();  
        }
        else if((spot1.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }    
        }
    else if ((spot1.textContent === spot5.textContent) && (spot1.textContent === spot9.textContent)){
        if (spot1.textContent === playerOne.marker){
            result.showPlayerOne();
        }
        else if((spot1.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }    
    }
    else if ((spot2.textContent === spot5.textContent) && (spot2.textContent === spot8.textContent)){
        if (spot2.textContent === playerOne.marker){
            result.showPlayerOne();
        }
        else if((spot2.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }
    }  
    
    else if ((spot3.textContent === spot5.textContent) && (spot3.textContent === spot7.textContent)){
        if (spot3.textContent === playerOne.marker){
            result.showPlayerOne();
        }
        else if((spot3.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }
    } 

    else if ((spot3.textContent === spot6.textContent) && (spot3.textContent === spot9.textContent)){
        if (spot3.textContent === playerOne.marker){
            result.showPlayerOne();
        }
        else if((spot3.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }
    }
        
    else if ((spot4.textContent === spot5.textContent) && (spot4.textContent === spot6.textContent)){
        if (spot4.textContent === playerOne.marker){
            result.showPlayerOne();
        }
        else if((spot4.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }
    } 

    else if ((spot7.textContent === spot8.textContent) && (spot7.textContent === spot9.textContent)){
        if (spot7.textContent === playerOne.marker){
            result.showPlayerOne();
        }
        else if((spot7.textContent === playerTwo.marker)){
            result.showPlayerTwo();
        }
    }
    else if (
    (spot1.textContent !== '') && (spot2.textContent !== '') && (spot3.textContent !== '') && 
    (spot4.textContent !== '') && (spot5.textContent !== '') && (spot6.textContent !== '') && 
    (spot7.textContent !== '') && (spot8.textContent !== '') && (spot9.textContent !== ''))
    {
        result.tie();
    }
}

let closePopup = (() => {   
        document.querySelector('#winnerPopup').style.display = 'none'    
});










