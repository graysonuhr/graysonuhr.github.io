setInterval("showImage()", 10000);
function showMore(){

    let div=document.getElementById("one");
    let clickA=document.getElementById("click");
    
    if (clickA.innerHTML=="See More..."){
        clickA.innerHTML="See Less...";
        div.classList.remove("hidden");
    }
    else{
        clickA.innerHTML="See More...";
        div.classList.add("hidden");
    }
}

function showMore2(){

    let div=document.getElementById("two");
    let clickA=document.getElementById("click2");
    
    if (clickA.innerHTML=="See More..."){
        clickA.innerHTML="See Less...";
        div.classList.remove("hidden");
    }
    else{
        clickA.innerHTML="See More...";
        div.classList.add("hidden");
    }
}

function showGrade(){
 let one= document.getElementById("one").value; 
let score=document.getElementById("score");
let two=document.getElementById("two").value;
let three=document.getElementById("three").value;
let four=document.getElementById("four").value;
let correct=0;
if(one=="Styling your web page"){
    document.getElementById("question-one").innerHTML="Question One"+" "+"correct";
    correct+=1;
}
    else{
         document.getElementById("question-one").innerHTML="Question One"+" "+"incorrect";
    }
    if(two=="img"){
    document.getElementById("question-two").innerHTML="Question two"+" "+"correct";
        correct+=1;
    }
    else{
        document.getElementById("question-two").innerHTML="Question two"+" "+ "incorrrect";
    }
    if(three=="color:red;"){
        document.getElementById("question-three").innerHTML="Question three"+" "+ "correct";
        correct+=1;
    }
    else{
        document.getElementById("question-three").innerHTML="Question three inncorrect";
    }
    if(four=="h1"){
        document.getElementById("question-four").innerHTML="Question four"+" "+"correct";
        correct+=1;
    }
    else{
        document.getElementById("question-four").innerHTML="Question four inncorrect";
    }
    score.innerHTML="Number of questions correct"+" "+correct;
}

function showImage(){
   
    let first=document.getElementById("first");
    let second=document.getElementById("second");
    let third=document.getElementById("third");
    let fourth=document.getElementById("fourth");
    
    if(!first.classList.contains("hidden")){
        second.classList.remove("hidden");
      first.classList.add("hidden"); 
       
    }
    else if(!second.classList.contains("hidden")){
        second.classList.add("hidden");
        third.classList.remove("hidden");
    }
 
else if(!third.classList.contains("hidden")){
        third.classList.add("hidden");
        fourth.classList.remove("hidden");
}

else{
    fourth.classList.add("hidden");
    first.classList.remove("hidden");
}
}
    
    