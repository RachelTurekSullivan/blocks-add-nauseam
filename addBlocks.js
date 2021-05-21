
const bodyListner = document.querySelector('.selectable');
const numBlockListener = document.getElementById('num-boxes');
const addButtonListener = document.querySelector('#addBlocksButton');
const myBlocks = document.getElementById('num-boxes');


function getRandNum(){
    // return Math.floor(Math.random()*10000);
   return Math.floor(Math.random() * 100) + 1;
 }

function getColorClass(num){
    var color="";

    if(num%3 === 2){
        color = 'pink';
    }

    else if(num%3 === 1){
       color ='blue';
    }
    else {
        color = 'purple';
    }
    console.log(color);
    return color;
}


addButtonListener.addEventListener('click',(evt) =>{
    var newBlock = document.createElement('div');
    var blockNum = getRandNum()
    console.log(blockNum);
    var blockText= document.createTextNode(blockNum);
    var blockColorClass=getColorClass(blockNum);

    newBlock.classList.add(blockColorClass, 'box');
    newBlock.appendChild(blockText);
    console.log(newBlock);
    myBlocks.appendChild(newBlock);
})



bodyListner.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('selectable')) {
        console.log('you clicked somewhere');   
    } 
    else{
        evt.target.classList.toggle('selected');
    }
});

numBlockListener.addEventListener('click', (evt) =>{
    if(evt.target.classList.contains('selectable')) {
        console.log('you clicked somewhere');   
    } 
    else{
        evt.target.classList.toggle('selected');
    }
})