let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

function Inc_home(num) {
    scoreHome += num
    scoreHomeEl.textContent = scoreHome
}

function Inc_guest(num) {
    scoreGuest += num
    scoreGuestEl.textContent = scoreGuest
}