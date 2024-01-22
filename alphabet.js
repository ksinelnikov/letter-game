

function randomLetter() {
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    var rand = Math.floor(Math.random() * (26));
    var randLetterUpper = alphabetUpper[rand];
    var randLetterLower = alphabetLower[rand];
    document.getElementById("letterUpper").innerHTML = randLetterUpper;
    document.getElementById("letterLower").innerHTML = randLetterLower;
}