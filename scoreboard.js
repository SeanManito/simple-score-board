let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


//home score
function homeplusone() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeplustwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function homeplusthree() {
    homeCount += 3  
    homeScore.textContent = homeCount
}
//guest score
function guestplusone() {
    guestCount += 1 
    guestScore.textContent = guestCount
}
function guestplustwo() {
    guestCount += 2
    guestScore.textContent = guestCount 
}
function guestplusthree() {
    guestCount += 3 
    guestScore.textContent = guestCount 
}
//reset function 
function reset(){
    homeScore.textContent = 0
    guestScore.textContent = 0
     homeCount = 0
     guestCount = 0

}
