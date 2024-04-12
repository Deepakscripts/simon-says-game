let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;


let h3 = document.querySelector("h3");

document.addEventListener("keypress", ()=>{
   if(started == false){
       started = true
       console.log("game is started");

       levelUp();
   }
})


function levelUp(){
userSeq = [];
level++;
h3.innerText= `Level ${level}`;


let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameFlash(randBtn);
gameSeq.push(randColor)
console.log(gameSeq);
}

let allBtns = document.querySelectorAll(".btn")
for (let btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function btnPress(){
let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");
userSeq.push(userColor);
console.log(userSeq);

checkAns(userSeq.length-1);

}

function checkAns(idx){
    console.log("current level is :", level);
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            
        }
console.log("same value");}
else{
    h3.innerHTML =`"Game Over ! your score was <b>${level}</b> <br> Press any key to start"`;
    let bdy = document.querySelector("body");
    bgFlash(bdy);
    reset();
}

    }
    function reset(){
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0
        
    }

    


    function bgFlash(bdy){
        bdy.classList.add("bg-red");
        setTimeout(function(){
            bdy.classList.remove("bg-red");
        }, 100);
    }


    function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 1000);
    }
    
    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
        }, 200);
    }
    









 
 
 
 
 
 
 
 
 
 
 
