// if statement to fire the following lins of code WHEN THE PAGE IS REFRESHED
if (window.performance.navigation.type === 1) {

    //getting random dice number one
    var randNum1 = Math.floor(Math.random() * 6 + 1);
    randNum1 = randNum1.toString();

    //getting random dice number two
    var randNum2 = Math.floor(Math.random() * 6 + 1);
    randNum2 = randNum2.toString();

    //use set attribute method to set the image source (better practice than '=')
    document.querySelector(".img1").setAttribute("src", `./images/dice${randNum1}.png`); // <-- string literal using back-tics (like python f-string)
    document.querySelector(".img2").setAttribute("src", `./images/dice${randNum2}.png`);

    if (randNum1 > randNum2) {

        document.querySelector("h1").textContent = " 🚩 Player 1 Wins !";

    }
    else if (randNum1 < randNum2) {

        document.querySelector("h1").textContent = "Player 2 Wins !  🚩"

    }
    else {

        document.querySelector("h1").textContent = "Tie !"

    }


}

