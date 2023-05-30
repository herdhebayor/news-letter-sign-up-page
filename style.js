const form = document.getElementById("myForm")
const emailInput = document.getElementById("email")
const clearSuccessMsg = document.getElementById("dismiss")
const submitBtn = document.querySelector(".submit")
const container = document.querySelector(".container")
const successContainer = document.querySelector(".successPage")
const err = document.querySelector(".inputErr")
const successMsg = document.querySelector(".textDetails")


function validateForm(e){
    let val = emailInput.value
    e.preventDefault()
    if(!val.includes('@') || val == null ){
       err.innerHTML = 'Valid email required'
    }else{
        container.style.display = 'none'
		successContainer.style.display = 'block'
        successMsg.innerHTML =
         "A confirmation email has been sent to" + " " + val +" " 
         + ".Please open it and click the button to confirm your subscription"
     }
     
}

form.addEventListener("submit", validateForm)
submitBtn.addEventListener("click",validateForm)
clearSuccessMsg.addEventListener("click", ()=>{
    window.location.reload()
})