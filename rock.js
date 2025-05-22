 let count1=0
 let count2=0

let images=document.querySelectorAll(".images");
let result=document.querySelector(".result");

let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");


let print_game_result = (user_choice,comp_choice,your_success)=>{
    if(your_success===true){
        //user win
        result.innerText=`You WIN !!! Your ${user_choice} beats ${comp_choice}`
        result.style.backgroundColor = "green"
         count1++
        user_score.innerText=count1
    }else{
        result.innerText=`You lose !!!your choice (${user_choice}) beats by computer choice (${comp_choice})  `
        result.style.backgroundColor = "red"
        count2++
        comp_score.innerText=count2
      
       
    }
}


let withdraw = (user_choice,comp_choice)=>{
    result.innerText=`Match Withdraw!!! your  ${user_choice} matches with computer ${comp_choice}`
        result.style.backgroundColor = "yellow"

}



let check_result = (user_choice,comp_choice) => {

    if(user_choice===comp_choice){
       withdraw(user_choice,comp_choice)
   }
   else{
       let your_success=true;
       if(user_choice==="rock"){
          your_success = comp_choice==="paper" ? false :true
       }else if(user_choice==="paper"){
           your_success = comp_choice==="rock" ? true :false
       }else{
           your_success = comp_choice==="rock" ? false :true

       }

       print_game_result(user_choice,comp_choice,your_success)
           

       
   }

}



let computer_choice_generator = () =>{
 
    let  random_num = Math.floor(Math.random()*3)
     let arr = ["rock","paper","scissors"]
     let computer_choice =arr[random_num]
     return computer_choice
 }
 

 images.forEach( (image)=>{

    image.addEventListener("click" , ()=>{
        let user_choice= image.getAttribute("id")

        let comp_choice = computer_choice_generator() 

        check_result(user_choice,comp_choice)
    })
}

)

 

