let scoreH = document.getElementById("score-h")
let scoreG = document.getElementById("score-g")
let score = 0

 
function plusH(){
    score += 1
    scoreH.textContent = score
}

function resetH(){
    score = 0
    scoreH.textContent = score
}

function plusG(){
    score += 1
    scoreG.textContent = score
}

function resetG(){
    score = 0
    scoreG.textContent = 0
}

