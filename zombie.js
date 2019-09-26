/*
Node-Zombie-Game
Author: Vincent Shury 2019,
Github Portfolio: https://github.com/Vincent440
*/
const inquirer = require("inquirer");
let zombie = 15;
let playerLife = 70;
let zombiePick = randNum(1, 5);
let attack = randNum(1, 5);
const NL = '\n';// New Line

console.log(NL, NL, NL, NL, NL, NL, NL);
console.log("---------------------------------< Zombie Slayer >------------------------");
console.log("Welcome to Zombie slayer", NL);
console.log("Defeat the Zombie before he brings your health to 0.", NL);
console.log(`Your Health is: ${playerLife} While the Zombie's life is: ${zombie}`);
console.log("At the start of each round the Zombie will select a number between [ 1-5 ]", NL);
console.log("You just need to try to guess that number correctly", "");
console.log(" If you guess correctly you will attack the Zombie for a random amount between [ 1-5 ] \n ");
console.log(" If you guess wrong the Zombie will attack you for a random amount between [ 1-5 ] \n");
console.log(" ------------------------------  [GOOD LUCK!]  -------------------------- \n ");
console.log(" \n   --------------------------------    [START]    ------------------------------\n ");

function setNewStats() {
  console.log(NL, NL, NL);
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select your starting health!",
        choices: ["70", "75", "80", "85", "90", "120", "140"],
        name: "playerHealth"
      },
      {
        type: "list",
        message: "Next choose the zombies starting health!",
        choices: ["10", "15", "20", "25", "30", "40"],
        name: "zombieHealth"
      }
    ])
    .then(modify => {
      let newPlayerLife = parseFloat(modify.playerHealth);
      let newZombieLife = parseFloat(modify.zombieHealth);
      playerLife = newPlayerLife;
      zombie = newZombieLife;
      if (playerLife >= 70 && zombie >= 10) {
        console.log("\n\n------BEGIN!-----\n\n");
        nextTurn();
      }
    });
}
function cheatOptionPrompt() {//CHEAT SETTINGS PROMPT TO MODIFY PLAYER AND ZOMBIE HEALTH

  console.log("\n\n");

  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to modify the settings for this game?",
        name: "cheats",
        default: false
      }
    ]).then(user => {
      if (user.cheats) {
        setNewStats();
      }
      else if (!user.cheats) {
        playerLife = 75;
        zombie = 15;
        console.log("\n\n------BEGIN!-----\n\n");
        nextTurn();
      }
    });
}
function gameReplayPrompt() {//PROMPT TO PLAY AGAIN
  console.log("\n\n\n\n");
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to play again?",
        name: "confirm",
        default: false
      }
    ])
    .then(pick => {
      if (pick.confirm === true) {
        cheatOptionPrompt();
      }
      else {
        return console.log("Author: Vincent Shury\nGithub Portfolio: https://github.com/Vincent440\n\nGoodbye, Thanks for playing this super simple game I created.");
      }
    });
}
function randNum(min, max) { //Generate a random number with min, max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function gameLogic(userPick, zomPick) {
  console.log("\n Zombie rolled: " + zomPick);
  attack = randNum(1, 5);
  if (userPick == zomPick) {
    zombie -= attack;
    console.log(" Nice! You just attacked the zombie! ");
    console.log(" You hit the Zombie for: " + attack + " Damage");
    console.log("\nYour current Health is: " + playerLife + "\nZombie's current Health is: " + zombie + "\n");
  } else {
    playerLife -= attack;
    console.log(" Ouch! You've been struck by the zombie!")
    console.log(" Zombie Hit you for: " + attack + " Damage");
    console.log("\nYour current Health is: " + playerLife + "\nZombie's current Health is: " + zombie + "\n");
  }
}
function nextTurn() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Try to stay alive! Select a number between [1-5]",
        choices: ["1", "2", "3", "4", "5"],
        name: "num"
      }
    ])
    .then(pick => {
      const selected = parseFloat(pick.num);
      zombiePick = randNum(1, 5);
      gameLogic(selected, zombiePick);
      if (zombie <= 0) {
        console.log("\n\n CONGRATULATIONS YOU WON! You had: " + playerLife + " Life remaining!");
        if (playerLife <= 10) {
          console.log("\n Wow that was really close! GREAT JOB! You should go rest up after that! \n\n");
        }
        else if (playerLife >= 60) {
          console.log("\n YOU DID GREAT, you didn't even break a sweat did you? Nice job! :)\n\n");
        }
        gameReplayPrompt();
        return;
      } else if (playerLife <= 0) {
        console.log("\n\n OH NO You lost! While the zombie had: " + zombie + " Life left!\n");
        gameReplayPrompt();
        return;
      }
      nextTurn();
    });
}
nextTurn();