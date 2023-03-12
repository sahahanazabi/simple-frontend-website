const form = document.querySelector("form")
nField=form.querySelector(".name"),
nInput=form.querySelector(".input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input"),
phField =form.querySelector(".number"),
phInput =eField.querySelector(".input"),


form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (nInput.value==  "") ?nField.classList.add("shake","error")   : checkName();
  (phInput.value== "") ?phInput.classList.add("shake","error")  :checkNumber();


  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    nField.classList.remove("shake");
    phField.classList.remove("shake");
  }, 500);


  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();}
  nInput.onkeyup=  ()=>{checkName();}
  phInput.onkeyup =()=>{checkNumber();}


  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }


  function checkPass(){ 
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  function checkName(){  
    if(nInput.value ==""){
        nField.classList.add("error");
        nField.classList.remove("valid");
    }else{
        nField.classList.remove("error");
        nField.classList.add("valid");
    }
}
    
    function checkNumber(){  
        if(phInput.value ==""){
            phField.classList.add("error");
            phField.classList.remove("valid");
        }else{
            phField.classList.remove("error");
            phField.classList.add("valid");
        }
    }
        
    


  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
};