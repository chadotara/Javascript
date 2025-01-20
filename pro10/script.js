let tostBox = document.getElementById("tostBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submit';
let errorMsg = '<i class="fa-solid fa-triangle-exclamation"></i>Please Fix Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input , Try again';





function showTost(msg){
    let tost = document.createElement("div");
    tost.classList.add("toast")
    tost.innerHTML = msg;
    tostBox.appendChild(tost);
    

    if(msg.includes('Error')){
        tost.classList.add('Error');
    }
    
    if(msg.includes('Invalid')){
        tost.classList.add('Invalid');
    }

    setTimeout(()=>{
        tost.remove();

    },4000)
 
}