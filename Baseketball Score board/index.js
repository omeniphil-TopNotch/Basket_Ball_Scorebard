let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeCard = document.getElementById("home-card")
let guestCard = document.getElementById("guest-card")

// HOME Functions
function addHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

// GUEST Functions
function addGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

// HIGHLIGHT LEADER Logic
function highlightLeader() {
    // Remove highlight from both first
    homeCard.classList.remove("leader")
    guestCard.classList.remove("leader")
    
    // Apply highlight only if someone is actually leading
    if (homeScore > guestScore) {
        homeCard.classList.add("leader")
    } else if (guestScore > homeScore) {
        guestCard.classList.add("leader")
    }
}

// NEW GAME Logic
function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeCard.classList.remove("leader")
    guestCard.classList.remove("leader")
}