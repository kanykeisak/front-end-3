// HOME WORK 1

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResults = document.querySelector("#gmail_result");

const regExp = /^\w+(\.\w+)*@gmail\.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResults.innerHTML = 'OK'
        gmailResults.style.color = 'green'
    } else {
        gmailResults.innerHTML = 'NOT OK'
        gmailResults.style.color = 'red'
    }
}

// HOME WORK 2

const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");
const parentWidth = parentBlock.clientWidth;

let position = 0;
const moveBlock = () => {
    position++
    childBlock.style.left = `${position}px`
    if (position < parentWidth - childBlock.clientWidth) {
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()
