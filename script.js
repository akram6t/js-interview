const boxes = document.querySelectorAll('.col');

const winPosition = 
[
     [0,1,2],[3,4,5],[6,7,8],
     [0,3,6],[1,4,7],[2,5,8],
     [0,4,8],[2,4,6]
];

let currentPlayer = 'x';
printStatus("now: " + currentPlayer);

boxes.forEach((box) => {
     box.addEventListener('click', () => {
          const col = document.getElementById(box.id);
        if(col.innerHTML == ""){
          col.innerHTML = currentPlayer;
          winningState(currentPlayer);
          currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
          printStatus("now: " + currentPlayer);
        }
    });
});

function winningState(curPlayer){
     winPosition.forEach((arrObj) => {
          if(
               document.getElementById(arrObj[0]).innerHTML === curPlayer &&
               document.getElementById(arrObj[1]).innerHTML === curPlayer &&
               document.getElementById(arrObj[2]).innerHTML === curPlayer
          ){
               alert(curPlayer + ' is Win');
               resetGame();
          }
     });
};

function resetGame(){
     boxes.forEach((box) => {
          box.innerHTML = "";
          currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
          printStatus("now: " + currentPlayer);
     });
}

function printStatus(msg){
     document.getElementById('status')
     .innerHTML = msg;
};