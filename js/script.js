var submit = document.getElementById("submit")
var forma = document.getElementById("forma")
var nam = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var male = document.getElementById("male")
var female = document.getElementById("female")
var tennis = document.getElementById("tennis")
var running = document.getElementById("running")
var football = document.getElementById("football")
var country = document.getElementById("country")
var list = document.getElementById("list")
var nValid = document.getElementById("nValid")
var pValid = document.getElementById("pValid")
var eValid = document.getElementById("eValid")
var gValid = document.getElementById("gValid")
var sValid = document.getElementById("sValid")
var cValid = document.getElementById("cValid")
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// function reset() {
//     nValid.style.display = "none"
//     pValid.style.display = "none"
//     eValid.style.display = "none"
//     gValid.style.display = "none"
//     sValid.style.display = "none"
//     cValid.style.display = "none"
// }

function checkName() {
    if (nam.value.length == 0) {
        list.style.backgroundColor = "#f8d7da"
        nValid.style.display = "block"
    }
    else {
        list.style.backgroundColor = "transparent"
        nValid.style.display = "none"
    }
}

function checkPassword() {
    if (password.value.length <= 8) {
        list.style.backgroundColor = "#f8d7da"
        pValid.style.display = "block"
    }
    else {
        list.style.backgroundColor = "transparent"
        pValid.style.display = "none"
    }
}
function checkEmail() {
    if (!regex.test(email.value)) {
        list.style.backgroundColor = "#f8d7da"
        eValid.style.display = "block"
    }
    else {
        list.style.backgroundColor = "transparent"
        eValid.style.display = "none"
    }
}
function checkGender() {
    if (!male.checked && !female.checked) {
        list.style.backgroundColor = "#f8d7da"
        gValid.style.display = "block"
    }
    else {
        list.style.backgroundColor = "transparent"
        gValid.style.display = "none"
    }
}
function checkSports() {
    if (!football.checked && !tennis.checked || !tennis.checked && !running.checked || !football.checked && !running.checked) {
        list.style.backgroundColor = "#f8d7da"
        sValid.style.display = "block"
    }
    else {
        list.style.backgroundColor = "transparent"
        sValid.style.display = "none"
    }
}
function checkCountry() {
    if (country.value === "Select Country") {
        list.style.backgroundColor = "#f8d7da"
        cValid.style.display = "block"
    }
    else {
        cValid.style.display = "none"
    }
}
function checkList() {
    if (nValid.style.display == "none" &&
        pValid.style.display == "none" &&
        eValid.style.display == "none" &&
        gValid.style.display == "none" &&
        sValid.style.display == "none" &&
        cValid.style.display == "none") {
        list.style.backgroundColor = "transparent"
    }
}
forma.addEventListener("submit", function (event) {
    event.preventDefault()
    checkList()
    checkCountry()
    checkName()
    checkPassword()
    checkEmail()
    checkGender()
    checkSports()
})
