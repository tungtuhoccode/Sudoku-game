function pause(){
    if(!solved()){
        if(isPause==false){
            clearInterval(timer);
            isPause = true;
        
            for( let r =0; r<9; r++){
                for(let c=0; c<9;c++){
                   document.getElementById(id(r,c)).classList.add("pause")
                   for (let i=0;i<note[r][c].length;i++){
                        document.getElementById(id(r,c)+note[r][c][i]).classList.add("pause")
                   }
                }
            }

            document.getElementById("pause").innerText = "UNPAUSE";
    
        }
    
        else {
            isPause = false;
            timer = setInterval(setTime, 1000);
        
            for( let r =0; r<9; r++){
                for(let c=0; c<9;c++){          
                    document.getElementById(id(r,c)).classList.remove("pause");
                    for (let i=0;i<note[r][c].length;i++){
                        document.getElementById(id(r,c)+note[r][c][i]).classList.remove("pause")
                   }
                }
            }
            document.getElementById("pause").innerText = "PAUSE";
    
            console.log(board)
    
        }
    }
}
function hint(){
    if(curRow == null || curCol == null){
        return
    }
    if(isPause){
        return;
    }
    
    let numbSelected = solution[curRow][curCol];
    clickSelectedNumb(numbSelected);
    generatedTile[curRow][curCol] = true;
    document.getElementById(id(curRow,curCol)).classList.add("tile-start");
   
}
function solveSudoku(){
    if(isPause){
        return;
    }
    if(isAddingNote){
        return;
    }
    for( let r =0; r<9; r++){
        for(let c=0; c<9;c++){
            
            if(generatedTile[r][c]){   
                continue;
            }

            currentBox = document.getElementById(id(r,c));
            currentBox.click();
            let numbSelected = solution[r][c];
            clickSelectedNumb(numbSelected);
           
        }
    }
    //----------------------NEW CODE FOR SOLVED BUTTON------------

    document.getElementById("solveSudoku").saved=document.getElementById("solveSudoku").onclick;
    document.getElementById("solveSudoku").onclick = '';
   
    //----------------------------------------------------------------------
 
 
    
}