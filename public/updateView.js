//remove and add highlight to same number boxes
function highlightBox(){
    for( let r =0; r<9; r++){
        for(let c=0; c<9;c++){
           if(document.getElementById(id(r,c)).innerText == currentBox.innerText && currentBox.innerText!="" && document.getElementById(id(r,c)).childElementCount == 0){
            document.getElementById(id(r,c)).classList.add("highlight-same-number");
           }
        }
    }
}

function removeHighlightBox(){
    for( let r =0; r<9; r++){
        for(let c=0; c<9;c++){
       if(document.getElementById(id(r,c)).innerText == document.getElementById(id(curRow,curCol)).innerText){
            document.getElementById(id(r,c)).classList.remove("highlight-same-number");
       }
    }
    }
}
