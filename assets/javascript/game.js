//set overall variables
//variable for the target number, chosen at random
var numberTarget = document.getElementById("numberTarget-text");
//variable for the user's current total
var crystalsCollected = document.getElementById("crystalsCollected-text");
var wins = document.getElementById("wins-text");
var losses = document.getElementById("losses-text");

$(document).ready(function () {
    // generate the number you're trying to collect
    var randomTarget = Math.floor(Math.random() * 102 + 19);
    numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
    //set inital crystal count to 0
    var crystalTotal = 0;
    crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
    var winsCounter = 0;
    wins.textContent = "Wins: " + winsCounter;
    var lossesCounter = 0;
    losses.textContent = "Losses: " + lossesCounter;
    // generate the four crystals' hidden values
    var crystal1Worth = Math.floor(Math.random() * 12 + 1);
    var crystal2Worth = Math.floor(Math.random() * 12 + 1);
    var crystal3Worth = Math.floor(Math.random() * 12 + 1);
    var crystal4Worth = Math.floor(Math.random() * 12 + 1);

    //create flag to confirm that user didn't exceed crystal count (do I need a flag to check if equal?)
    var underTotal = true;
    //on-clicks for the four crystals
    $("#crystal1").on("click", function () {
        crystalTotal += crystal1Worth;
        crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
        if (crystalTotal === randomTarget) {
            winsCounter++;
            wins.textContent = "Wins: " + winsCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal1Worth = Math.floor(Math.random() * 12 + 1);
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            losses.textContent = "Losses: " + lossesCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal1Worth = Math.floor(Math.random() * 12 + 1);
        }
    })
    $("#crystal2").on("click", function () {
        crystalTotal += crystal2Worth;
        crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
        if (crystalTotal === randomTarget) {
            winsCounter++;
            wins.textContent = "Wins: " + winsCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal2Worth = Math.floor(Math.random() * 12 + 1);
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            losses.textContent = "Losses: " + lossesCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal2Worth = Math.floor(Math.random() * 12 + 1);
        }
    })
    $("#crystal3").on("click", function () {
        crystalTotal += crystal3Worth;
        crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
        if (crystalTotal === randomTarget) {
            winsCounter++;
            wins.textContent = "Wins: " + winsCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal3Worth = Math.floor(Math.random() * 12 + 1);
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            losses.textContent = "Losses: " + lossesCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal3Worth = Math.floor(Math.random() * 12 + 1);
        }
    })
    $("#crystal4").on("click", function () {
        crystalTotal += crystal4Worth;
        crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
        if (crystalTotal === randomTarget) {
            winsCounter++;
            wins.textContent = "Wins: " + winsCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal4Worth = Math.floor(Math.random() * 12 + 1);
        } else if (crystalTotal > randomTarget) {
            lossesCounter++;
            losses.textContent = "Losses: " + lossesCounter;
            randomTarget = Math.floor(Math.random() * 102 + 19);
            numberTarget.textContent = "Try to collect " + randomTarget + " crystals!";
            crystalTotal = 0;
            crystalsCollected.textContent = "You've collected " + crystalTotal + " crystals!";
            crystal4Worth = Math.floor(Math.random() * 12 + 1);
        }
    })





})