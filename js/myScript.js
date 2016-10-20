var board=[];
var currentPlayer;
var gameOver;
var win=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

function setup(){
  board=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
  currentPlayer='X';
  gameOver=false;

}
function changePlayer(){
  if (currentPlayer == "O")
    currentPlayer = "X";
  else
    currentPlayer = "O";

}
 function checkWinning(){
   for(var i=0;i<8;i++)
   {
     if(board[win[i][0]]== board[win[i][1]] && board[win[i][0]]==board[win[i][2]] && board[win[i][0]] != ' ')
     {
       gameOver=true;
     }
   }
        writeDown();
 }

 function writeDown(){
   for (var i=0;i<9;i++){
     document.getElementById("cell"+(i+1)).innerHTML=board[i];
   }
 }

 function clickCell(cell){
   if (gameOver)
   return;
   board[cell]=currentPlayer;
   checkWinning();
   if (gameOver)
   return;
   writeDown();
   changePlayer();
 }

 setup();
