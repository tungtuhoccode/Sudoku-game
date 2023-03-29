document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("solveSudoku").addEventListener("click", solveSudoku)
    document.getElementById("restart_button").addEventListener("click", restartGame)
    document.getElementById("erase_button").addEventListener("click", eraseBox)
    document.getElementById("hint_button").addEventListener("click", hint)
    document.getElementById("pause").addEventListener("click", pause)
    document.getElementById("note").addEventListener("click", addNote)

})

window.addEventListener("keydown", (event) => {
    if(isPause){
        return
    }
    switch(event.key){
        case "g":
            addNote("1");
            break;
        
        case "h":
            hint();
            break;
        case "n":
            addNote();
            break;
        case "ArrowDown":
            if(curRow == 8){
                return
            }
            currentBox = document.getElementById(id(curRow+1,curCol));
            currentBox.click();
            break;
        case "ArrowUp":
            if(curRow == 0){
                return
            }
            currentBox = document.getElementById(id(curRow-1,curCol));
            currentBox.click();
            break;
        case "ArrowRight":
            if(curCol == 8){
                return
            }
            currentBox = document.getElementById(id(curRow,curCol+1));
            currentBox.click();
            break;
        case "ArrowLeft":
            if(curCol == 0){
                return
            }
            currentBox = document.getElementById(id(curRow,curCol-1));
            currentBox.click();    
            break; 

        case "Backspace":
            eraseBox();        
            break;
           
        case "1":
            clickSelectedNumb(1);
            break;
        case "2":
            clickSelectedNumb(2);
            break;
        case "3":
            clickSelectedNumb(3);
            break;
        case "4":
            clickSelectedNumb(4);
            break;
        case "5":
            clickSelectedNumb(5);
            break;
        case "6":
            clickSelectedNumb(6);
            break;
        case "7":
            clickSelectedNumb(7);
            break;
        case "8":
            clickSelectedNumb(8);
            break;
        case "9":
            clickSelectedNumb(9);
            break;
        
      
    }
    
})