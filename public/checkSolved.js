function solved(){
    if(unsolvedTile == 0){
        for( let r =0; r<9; r++){
            for(let c=0; c<9;c++){
                if(document.getElementById(id(r,c)).innerText != solution[r][c] ){
                    return false;
                }
                
            }
           
        }
        return true;
    }
    return false;
}

//function not in use
function isNumberInRow(){
    for(let i =0;i<9;i++){
        if(i == curRow){
            continue;
        }
        if(numbSelected.innerText == document.getElementById(id(i,curCol)).innerText){
            return true;
        }
    }
    return false;
}

function isNumberInColumn(){
    for(let i =0;i<9;i++){
        if(i == curCol){
            continue;
        }
        if(numbSelected.innerText == document.getElementById(id(curRow,i)).innerText){
            return true;
        }
    }
    return false;
}

function isNumberInBox(){
    for(let r=curRow-curRow%3;r<curRow-curRow%3+3;r++){
        for(let c=curCol-curCol%3;c<curCol-curCol%3+3;c++){
            if(r == curRow && c == curCol){
                continue;
            }
            if(numbSelected.innerText == document.getElementById(id(r,c)).innerText){
                return true;
            }
        }
    }
    return false;
}

function isValidPlacement(){
    return !isNumberInBox() && !isNumberInRow() && !isNumberInColumn();
}