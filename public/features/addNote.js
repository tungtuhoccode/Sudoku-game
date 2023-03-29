


let isAddingNote = false;
let countAddingNote = 0;

let initilizeNote = () =>{
    return [
        [
         [],[],[],[],[],[],[],[],[]
        ],//1
        [
         [],[],[],[],[],[],[],[],[]
        ],//2
        [
         [],[],[],[],[],[],[],[],[]
        ],//3
        [
         [],[],[],[],[],[],[],[],[]
        ],//4
        [
         [],[],[],[],[],[],[],[],[]
        ],//5
        [
         [],[],[],[],[],[],[],[],[]
        ],//6
        [
         [],[],[],[],[],[],[],[],[]
        ],//7
        [
         [],[],[],[],[],[],[],[],[]
        ],//8
        [
        [],[],[],[],[],[],[],[],[]
        ],//9
    ];
}
let note = initilizeNote()
function addNote(){
    if (isPause){
        return 
    }
    if(!solved()){
        if(currentBox == null ){
           if(!isAddingNote){
               isAddingNote=true
               document.getElementById("note").innerText = "NOTE IS ON";
               document.getElementById("note").classList.add("note-button-on");
           }
           else{
               isAddingNote =false
                document.getElementById("note").innerText = "NOTE IS OFF";
                document.getElementById("note").classList.remove("note-button-on");
           }
           return
         }
         if(generatedTile[curRow][curCol]){
            return;
         }
         //if note is being added
         if(countAddingNote %2 == 0){
            removeHighlightBox();
            
             isAddingNote = true;
             console.log("note on")
             document.getElementById("note").innerText = "NOTE IS ON";
             document.getElementById("note").classList.add("note-button-on");
         }
     
         //if note is not being added
         if(countAddingNote %2 == 1 ){
             isAddingNote = false;
             console.log("note off")
             document.getElementById("note").innerText = "NOTE IS OFF";
             document.getElementById("note").classList.remove("note-button-on");
     
         }
         countAddingNote++;
         
    }
    
}

function removeLastNote(){
    document.getElementById(id(curRow,curCol)+note[curRow][curCol][note[curRow][curCol].length-1]).remove();
    console.log(note[curRow][curCol]);
    note[curRow][curCol].splice(note[curRow][curCol].length-1,1);
}

