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
const newGameStartGreeting = "---------------------------<  Begin!  >---------------------------";
console.log(`
---------------------------<  Zombie Node CLI  >---------------------------
Welcome to the Zombie Node CLI game
Defeat the Zombie before he brings your health to 0.
Your Health is: ${playerLife} While the Zombie's life is: ${zombie}
At the start of each round the Zombie will select a number between [ 1-5 ]
You just need to try to guess that number correctly
Guess correctly you will attack the Zombie [ 1-5 ]
If you guess wrong the Zombie will attack you for a random amount between [ 1-5 ] 
${newGameStartGreeting}`
);

function setNewStats() {
  console.log("\n\n\n");
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select Players starting health!",
        choices: ["70", "75", "80", "85", "90", "120", "140"],
        name: "playerHealth"
      },
      {
        type: "list",
        message: "Next choose the zombie's starting health!",
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
        console.log(newGameStartGreeting);
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
        console.log(newGameStartGreeting);
        nextTurn();
      }
    });
}
function gameReplayPrompt() {
  console.log("\n\n");
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
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function gameLogic(userPick, zomPick) {
  console.log("\n Zombie rolled: " + zomPick);
  attack = randNum(1, 5);
  if (userPick == zomPick) {
    zombie -= attack;
    console.log(`You attack the Zombie
    You did ${attack} Damage to the Zombie!
    Player's Health is: ${playerLife} 
    the Zombie's Health is: ${zombie}`);
  } else {
    playerLife -= attack;
    console.log(`the Zombie attacks you
    the Zombie did ${attack} Damage to you!
    Players Health is: ${playerLife}
    the Zombie's Health is: ${zombie}`);
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
        console.log(`\nPlayer WINS with: ${playerLife} Health remaining!`);
        if (playerLife <= 10) {
          console.log("\n. . . Wow that was really close! You should go rest up after that!\n");
        }
        else if (playerLife >= 60) {
          console.log("\nGreat job, You almost never got struck by the Zombie! :)\n");
        }
        gameReplayPrompt();
        return;
      } else if (playerLife <= 0) {
        console.log(`Player Lost while the Zombie had:${zombie} Health remaining\n`);
        gameReplayPrompt();
        return;
      }
      nextTurn();
    });
}
nextTurn();