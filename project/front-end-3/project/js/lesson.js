// PHONE BLOCK

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResults = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResults.innerHTML = 'OK'
        phoneResults.style.color = 'green'
    } else {
        phoneResults.innerHTML = 'NOT OK'
        phoneResults.style.color = 'red'
    }
}
