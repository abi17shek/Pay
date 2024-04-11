var sidenav=document.querySelector(".side-navbar");
function showNavbar(){
    sidenav.style.left="0";
}
function closeNavbar(){
    sidenav.style.left="-60%"
}
var intro=document.getElementById("intro")
var input_one=document.getElementById("pay")
function clicked(){
    input_one.style.display="block"
    intro.style.display="none"
}
var box=document.getElementById("pay-hide")
function hide(){
    box.style.display="block"
}
var imge=document.getElementById("image")
var sec=document.getElementById("amount")
var input_1=document.getElementById("input_1")
var account_one=document.getElementById("account-one")
var input_one=document.getElementById("pay")
function show(){
    imge.style.display="none"
    sec.style.display="block"
    input_one.style.display="none"
    account_one.textContent="To XXXX user AccNo : "+input_1.value
}
var paying=document.getElementById("paying")
function side(){
    paying.style.display="block"
}
var on=document.getElementById("balance-hide")
var no=document.getElementById("balance-show")
function off(){
    on.style.display="none"
    no.style.display="block"
}
//calculation
var input_2=document.getElementById("input-2")
var bal=document.getElementById("bal")
var success=document.getElementById("success")
var amount=document.getElementById("amount")
var final=document.getElementById("final")
var input_1=document.getElementById("input_1")
var balance=1000
function cal(){
    if(input_2.value>balance)
    {
        alert("insufficient balance check your balance....!")
    }
    else{
    balance=balance-input_2.value
    bal.textContent=balance
    success.style.display="block"
    amount.style.display="none"
    final.textContent=input_2.value + "Ruppees Transfered successfully To : "+input_1.value
    alert("Ruppees : "+input_2.value +"has been credited from your account")
    }
}