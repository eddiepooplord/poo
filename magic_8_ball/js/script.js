// alert("poopy looking real loopy")
function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}

function askAQuestion() {
    //alert("Ask a yes/no question and recieve an answer")
}
function shake() {
    //alert("I'm shaking")
}
function getAFortune () {
    var fortunes= ["yes","no","maybe"]
    var num = randomNumber(fortunes.length)
    displayFortune(fortunes[num])
}

function displayFortune(fortune){
    document.getElementById("fortune").innerHTML = fortune
}
function randomNumber(n) {
    return Math.floor(Math.random() * n)
}