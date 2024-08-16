let btnel=document.querySelector(".btn")
let inputbill=document.querySelector(".bill")
let inputtip=document.querySelector(".tip")
let billamout=document.querySelector(".bill-amount")


btnel.addEventListener("click",function(){
    let bill=parseFloat(inputbill.value)
    let tip=parseFloat(inputtip.value)
    let pasantage=((tip *bill)/100)



    let totalbill=bill + pasantage
    billamout.innerText=`$${totalbill}`
})