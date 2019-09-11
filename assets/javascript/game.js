// Set overall variables

// Variable to generate the target number of crystals
var randomTarget = Math.floor(Math.random() * 102 + 19);
$("#numberTarget-text").text("Try to collect " + randomTarget + " crystals!");

// Set inital crystal count and wins/losses counts to 0
var crystalTotal = 0;
$("#crystalsCollected-text").text("You've collected " + crystalTotal + " crystals!");
var winsCounter = 0;
$("#wins-text").text("Wins: " + winsCounter);
var lossesCounter = 0;
$("#losses-text").text("Losses: " + lossesCounter);

// Variables to generate the four crystals' initial hidden values
var crystal1Worth = Math.floor(Math.random() * 12 + 1);
var crystal2Worth = Math.floor(Math.random() * 12 + 1);
var crystal3Worth = Math.floor(Math.random() * 12 + 1);
var crystal4Worth = Math.floor(Math.random() * 12 + 1);

// Function to reset counters to zero and to change the crystal values to a new random number
var clear = function () {
    randomTarget = Math.floor(Math.random() * 102 + 19);
    $("#numberTarget-text").text("Try to collect " + randomTarget + " crystals!");
    crystalTotal = 0;
    $("#crystalsCollected-text").text("You've collected " + crystalTotal + " crystals!");
    crystal1Worth = Math.floor(Math.random() * 12 + 1);
    crystal2Worth = Math.floor(Math.random() * 12 + 1);
    crystal3Worth = Math.floor(Math.random() * 12 + 1);
    crystal4Worth = Math.floor(Math.random() * 12 + 1);
}

$(document).ready(function () {

    // On-clicks for the four crystals

    $("#crystal1").on("click", function () {
        crystalTotal += crystal1Worth;
        $("#crystalsCollected-text").text("You've collected " + crystalTotal + " crystals!");
        // Conditionals to check if the player won or lost
        if (crystalTotal === randomTarget) {
            winsCounter++;
            $("#wins-text").text("Wins: " + winsCounter);
            clear();
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            $("#losses-text").text("Losses: " + lossesCounter);
            clear();
        }
    })
    $("#crystal2").on("click", function () {
        crystalTotal += crystal2Worth;
        $("#crystalsCollected-text").text("You've collected " + crystalTotal + " crystals!");
        if (crystalTotal === randomTarget) {
            winsCounter++;
            $("#wins-text").text("Wins: " + winsCounter);
            clear();
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            $("#losses-text").text("Losses: " + lossesCounter);
            clear();
        }
    })
    $("#crystal3").on("click", function () {
        crystalTotal += crystal3Worth;
        $("#crystalsCollected-text").text("You've collected " + crystalTotal + " crystals!");
        if (crystalTotal === randomTarget) {
            winsCounter++;
            $("#wins-text").text("Wins: " + winsCounter);
            clear();
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            $("#losses-text").text("Losses: " + lossesCounter);
            clear();
        }
    })
    $("#crystal4").on("click", function () {
        crystalTotal += crystal4Worth;
        $("#crystalsCollected-text").text("You've collected " + crystalTotal + " crystals!");
        if (crystalTotal === randomTarget) {
            winsCounter++;
            $("#wins-text").text("Wins: " + winsCounter);
            clear();
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            $("#losses-text").text("Losses: " + lossesCounter);
            clear();
        }
    })
})