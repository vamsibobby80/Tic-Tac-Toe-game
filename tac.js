let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-btn");
let msg=document.querySelector(".msg");
let newb =document.querySelector("#new-btn");
let win=document.querySelector("#win");

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turn0 =true;
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count++;
        if(turn0=== true){
            turn0=false;            
            box.innerText= "O";
            box.style.color="#edafb8";
        }else{
            turn0=true;           
            box.innerText= "X";
            box.style.color="#333333";
        }
        box.disabled= true;

        checkwinner();   
        if(count ==9){
            nowinner();     
        }        
    })
})

const nowinner =()=>{
    disablebox();
    win.innerText = "no winner";   
    msg.classList.remove("hide"); 

}

const disablebox=()=>{
    count=0;
    turn0=true;
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox=()=>{
    turn0=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetgame =()=>{
    count=0;
    enablebox();
    msg.classList.add("hide");
}

const showinner =(message)=>{
    disablebox();
    win.innerText = `Congratulations! winner is ${message}`;   
    msg.classList.remove("hide"); 

}



let checkwinner= ()=>{
    for(let pattern of winpattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3)
            {
                //console.log("winner", val1);
                showinner(val1);
            }
        }
    }
}

newb.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);