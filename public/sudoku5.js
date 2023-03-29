String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

var boardList = []
var solutionList= []

for (let i = 0;i<rawData.length;i++){
    if(i%2==0){
        boardList.push(rawData[i]);
    }
    if(i%2 == 1){
        console.log("ran")
        solutionList.push(rawData[i]);
    }
}

console.log("raw data length: "+rawData.length);
console.log("board list length: "+boardList.length);
console.log("solution list length: "+solutionList.length);

var numbSelected = null;
var tileSelected = null;

var errors = 0;

var unsolvedTile = 81;

var curRow = null;
var curCol = null;
var currentBox = null;

const ROWS = 9;
const COLUMNS = 9;

const generatedTile = Array.from({ length: ROWS }, () => 
  Array.from({ length: COLUMNS}, () => false)
);
const solvedTile = Array.from({ length: ROWS }, () => 
  Array.from({ length: COLUMNS}, () => false)
);

//-------------------NEW CODE------------------------------
let previousRandomNumber = null;
let randomNumber = null;


randomNumber = 8;
previousRandomNumber = randomNumber;

console.log(randomNumber);
console.log(previousRandomNumber);


var board = boardToStringArray(boardList[randomNumber]);
var curBoard = []
var solution = solutionToStringArray(solutionList[randomNumber]);


function setGame(){
    document.getElementById("errors").innerText = "ERROR:  "+errors ;
    //set timer
    //----------newcode----------
    timer = setInterval(setTime, 1000);
    //----------______----------
     //Board
    for( let r =0; r<9; r++){
        let curRow = []
         for(let c=0; c<9;c++){
             let tile = document.getElementById(id(r,c));
             tile.addEventListener("click",boxSelected);
             tile.classList.add("tile");
             
       
             if(board[r][c] != "0"){
                 tile.innerText = board[r][c];
                 tile.classList.add("tile-start");
                 generatedTile[r][c] = true;
                 solvedTile[r][c] = true;
                 unsolvedTile--;
                 
             }
             curRow.push(board[r][c])
 
             if(r == 2 || r==5 ){
                 tile.classList.add("horizontal-line-bottom")
             }
          
             if(c == 2 || c ==5 ){
                 tile.classList.add("vertical-line-right")
             }
             document.getElementById("board").appendChild(tile);
         }
         curBoard.push(curRow)
     }
     document.getElementById("solveSudoku").saved=document.getElementById("solveSudoku").onclick;
}


 

window.onload = function() {
    setGame();
    createDigits();
}

//this is what happen when a numbered key is pressed


//this function select a number when a numbered key is pressed
function clickSelectedNumb(numbSelected){
    console.log(numbSelected)
    document.getElementById(numbSelected).click();
}

let lastSelection = 0;
//fill the selected number in
function fillTile(){
    if(isPause){
        return;
    }

    //decide to add note or not
    if (isAddingNote){
        if(curBoard[curRow][curCol] != "-1" && !generatedTile[curRow][curCol] ){
            removeHighlightBox();
            currentBox.innerText = ""
            curBoard[curRow][curCol] = "-1"
        }
    }

    if(isAddingNote && !generatedTile[curRow][curCol] && curBoard[curRow][curCol] == "-1" ){
        console.log("filling note")
        if(!currentBox.classList.contains("note")){
            currentBox.classList.add("note")
        }
        
        if(note[curRow][curCol].length>0){
            for(let i =0;i<note[curRow][curCol].length;i++){
                let numbSelected = this;
                if(note[curRow][curCol][i] == parseInt(numbSelected.id) ){
                    console.log(id(curRow,curCol)+numbSelected.id);
                    document.getElementById(id(curRow,curCol)+numbSelected.id).remove();
                    note[curRow][curCol].splice(i,1);
                    console.log( note[curRow][curCol]);
                    return;
                } 
               
                
            }
        }
        
        if(note[curRow][curCol].length<9){
            let numbSelected = this;
            let noteElement = document.createElement("div");
            noteElement.id = id(curRow,curCol)+numbSelected.id; 
            noteElement.innerText = numbSelected.id;
            note[curRow][curCol].push(parseInt(numbSelected.id));
            currentBox.appendChild(noteElement);
            return;
        }

      
    }

    if(!solved()){
    console.log("fill normal")
    removeHighlightBox();


    numbSelected = this;
    currentBox.classList.remove("note");

    let youGotItWrong =["try again"]



    let temp;
    //if wrong number is fill
    if(!generatedTile[curRow][curCol] && numbSelected.innerText != solution[curRow][curCol]){
        note[curRow][curCol].splice(0,note[curRow][curCol].length);
        currentBox.innerText = numbSelected.id;
        curBoard[curRow][curCol] = numbSelected.id;
        currentBox.classList.add("wrong-tile");
        errors++;
        lastSelection = temp
        document.getElementById("errors").innerText= "Error: "+errors; 
        highlightBox();
    }

    //if right number is filled
    if(!generatedTile[curRow][curCol] && numbSelected.innerText == solution[curRow][curCol]){
        note[curRow][curCol].splice(0,note[curRow][curCol].length);
        currentBox.innerText = numbSelected.id;
        curBoard[curRow][curCol] = numbSelected.id;
        currentBox.classList.remove("wrong-tile");
        if(solvedTile[curRow][curCol] == false){
            solvedTile[curRow][curCol] = true;
            unsolvedTile--;
        }

        
    }

    highlightBox();
    console.log("filled number")
    console.log("current board value: "+ curBoard[curRow][curCol])


    //if solved
    if( solved() ){
        document.getElementById("errors").innerText= "SOLVED WOOHOO! 😽 ";
        let idOfCurrentBox = id(curRow,curCol);
        
        //unmark and unhighlight everything
        document.getElementById(idOfCurrentBox).classList.remove("highlight-current-box");

        for(let columnToMark = 0; columnToMark<9; columnToMark++){
            let idOfElement = id(curRow,columnToMark);
            document.getElementById(idOfElement).classList.remove("mark-tile");
        }
        for(let rowToMark = 0; rowToMark<9; rowToMark++){
            let idOfElement = id(rowToMark,curCol)
            document.getElementById(idOfElement).classList.remove("mark-tile");
        }
        for( let r =0; r<9; r++){
            for(let c=0; c<9;c++){
         
            document.getElementById(id(r,c)).classList.remove("highlight-current-box");
            document.getElementById(id(r,c)).classList.remove("highlight-same-number");
            document.getElementById(id(r,c)).classList.remove("mark-tile");
            }
           
        }
        
        //-----------
        clearInterval(timer);
        //-----------
    }

   }
    
}


//Generating digits from 1 to 9 
function createDigits(){
     
    for(let i =1;i<=9;i++){
       // <div id="1" class="numbers"> </div>
       let number = document.createElement("div");
       number.id = i;
       number.innerText = i;
       number.addEventListener("click", fillTile)
       number.classList.add("numbers");
       document.getElementById("digits").appendChild(number);

   }
}

//creating the board


function restartGame(){
    if(isPause){
        pause();
    }
    //reset all of the tiles
    for( let r =0; r<9; r++){
        for(let c=0; c<9;c++){

            let tile = document.getElementById(id(r,c));
            tile.innerText = "";
            tile.removeAttribute("class");
        }
    }
    //reset the digits
    for(let i =1;i<=9;i++){
        let digits = document.getElementById("digits");
        while (digits.firstChild) {
           digits.removeChild(digits.lastChild);
      
         }
       }
    //reset all variables
    numbSelected = null;
    tileSelected = null;
    curBoard = []
    errors = 0;

    unsolvedTile = 81;

    curRow = null;
    curCol = null;
    currentBox = null;

    note = initilizeNote()
    
    isAddingNote = false;
    countAddingNote = 0;
    lastBox = null;

    //-------------------NEW CODE------------------------------//
    totalSeconds = 0;
    document.getElementById("seconds").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    clearInterval(timer);

    //reset note
    document.getElementById("note").innerText = "NOTE IS OFF"
    document.getElementById("note").classList.remove("note-button-on");
    //reset board
    for( let r =0; r<9; r++){
        for(let c=0; c<9;c++){
           generatedTile[r][c]=false;
           solvedTile[r][c] = false;
        }
    }

    //-------------------NEW CODE------------------------------//
    while (randomNumber == previousRandomNumber ){
        randomNumber = pickRandomBoard()
    }
    previousRandomNumber = randomNumber;
    //get a new board and solution
    board = boardToStringArray(boardList[randomNumber]);
    solution = solutionToStringArray(solutionList[randomNumber]);

    document.getElementById("solveSudoku").onclick = document.getElementById("solveSudoku").saved;
    //_________________________________________________________//


    //set new game
    createDigits();
    setGame();
}


function boxSelected(){

    if(isPause){
        return;
    }

    if(!solved()){
        currentBox = this;
        
        let coordinates = this.id.split("-"); // create an array of ["0","1"]

        let r = parseInt(coordinates[0]);
        let c = parseInt(coordinates[1]);
        
        if(curCol == null && curRow == null){
            curCol = c;
            curRow = r;
        }

        //if different box is seleted
        if (curCol != c || curRow != r){
            //unmark box column and row
            for(let columnToMark = 0; columnToMark<9; columnToMark++){
                document.getElementById(id(curRow,columnToMark)).classList.remove("mark-tile");
            }
            for(let rowToMark = 0; rowToMark<9; rowToMark++){
                document.getElementById(id(rowToMark,curCol)).classList.remove("mark-tile");
            }

            for(let r=curRow-curRow%3;r<curRow-curRow%3+3;r++){
                for(let c=curCol-curCol%3;c<curCol-curCol%3+3;c++){
                    document.getElementById(id(r,c)).classList.remove("mark-tile");
                }
            }
            document.getElementById(id(curRow,curCol)).classList.remove("highlight-current-box");
            removeHighlightBox();
            
                
        }
    
        //assign new current row and column
        curCol = c;
        curRow = r;
        //for adding note
    
        // then remark new column and row and box
            for(let columnToMark = 0; columnToMark<9; columnToMark++){
                document.getElementById( id(curRow,columnToMark)).classList.add("mark-tile");
            }
            for(let rowToMark = 0; rowToMark<9; rowToMark++){
                document.getElementById(id(rowToMark,curCol)).classList.add("mark-tile");
            }
            for(let r=curRow-curRow%3;r<curRow-curRow%3+3;r++){
                for(let c=curCol-curCol%3;c<curCol-curCol%3+3;c++){
                    document.getElementById(id(r,c)).classList.add("mark-tile");
                }
            }
            document.getElementById(id(curRow,curCol)).classList.add("highlight-current-box");

            if(currentBox.childElementCount==0){
                highlightBox();
            }
        //-------------------------------------

    }
}


function id(row, column)//in string
{
    return row.toString() + " - " + column.toString();
}

