const choices=document.querySelectorAll(".choice");
const msgcontainer=document.querySelector(".msg-container");
const msg=document.querySelector(".msg");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let userscore=0;
let compscore=0;


const GenCompChoice=() =>{
    const arr=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return arr[idx];
}



const playGame = (userchoice,compchoice) => {
    let userwin=true;
    if(userchoice=="rock"){
        //paper,scissor
        userwin=compchoice=="paper"? false:true;
    }else if(userchoice=="paper"){
        userwin = compchoice=="rock"? true:false;
    }else{
        userwin = compchoice=="paper"? true:false;
    }
    return userwin;
}

const showWinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        user.innerText = userscore;
        msg.innerText=`Congrats, You Won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        comp.innerText=compscore;
        msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}



choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        const compchoice = GenCompChoice();
        if(userchoice==compchoice){
            msg.innerText="It's a Draw Game";
            msg.style.backgroundColor="orange";
        } else{
        const userwin=playGame(userchoice,compchoice);
        showWinner(userwin,userchoice,compchoice);
        }

    })
})






