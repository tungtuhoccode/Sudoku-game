function eraseBox(){
    if(curRow == null || curCol == null){
        return
    }
    if(isPause){
        return;
    }
    if(isAddingNote){
        if(note[curRow][curCol].length<1){
            return 
        }
        removeLastNote()

    }
    else if(!solved() && !generatedTile[curRow][curCol]){
        if(curBoard[curRow][curCol] == "-1"){
            removeLastNote()
            return 
        }
        
        removeHighlightBox();
        currentBox.innerText = "";
        curBoard[curRow][curCol] = "0";
        document.getElementById(id(curRow,curCol)).classList.add("highlight-current-box");
    }
   
}
