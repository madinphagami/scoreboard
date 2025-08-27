let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let totalHomeScore = 0;
let totalGuestScore = 0;

function addHomeOne() {
    totalHomeScore += 1;
    homeScore.textContent = totalHomeScore;
}
function addHomeTwo() {
    totalHomeScore += 2;
    homeScore.textContent = totalHomeScore;
}
function addHomeThree() {
    totalHomeScore += 3;
    homeScore.textContent = totalHomeScore;
}

function addGuestOne(){
    totalGuestScore += 1;
    guestScore.textContent = totalGuestScore;
}
function addGuestTwo(){
    totalGuestScore += 2;
    guestScore.textContent = totalGuestScore;
}
function addGuestThree(){
    totalGuestScore += 3;
    guestScore.textContent = totalGuestScore;
}