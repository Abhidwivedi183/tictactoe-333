let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelectorAll("#reset")
let ntn = document.querySelector(".newgame")
let msgcontain = document.querySelector(".msgcontainer")
let msg = document.querySelector(".msg")
 let turn0 = true;//playerx/player0
//2darray
const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],]
boxes.forEach((box) => {
  box.addEventListener("click",function(){
   if(turn0){
    box.innerText = "0";
    turn0 = false;//for next turn
   }
   else{
box.innerText = "X";
turn0 = true;
   }
   box.disabled = true;
   checkwinner();
  })
});
const checkwinner = ()=>{
for(let pattern of winpatterns ){
let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val!="" && pos2val!="" && pos3val !=""){
if(pos1val == pos2val && pos2val == pos3val){
  console.log("winner");
  showinner(pos1val);
}
}

}
}

const restart = ()=>{
  turn0 = true;
  enabl();
  msgcontain.classList.add("hide");
}


var showinner= (winner)=>{
msg.innerText = `winner is ${winner}`
msgcontain.classList.remove("hide")
disabl();
}

const disabl= ()=>{
for(box of boxes){
  box.disabled = true;
}
}

const enabl= ()=>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = ""
  }
  }

const reset = ()=>{

}
ntn.addEventListener("click",restart);
