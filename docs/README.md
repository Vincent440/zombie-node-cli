# Zombie-Node-Cli Game

## Game Instructions

* In this game the `User` is fighting up against a `Zombie` each will be given a certain amount of health to start with.
    * `User` health = **70**
    * `Zombie` health = **15**
* For each round, the `User` is asked to guess a random number. 
    * The number must be [ **1 - 5** ]
* If the `Users` guess matches the random number of the `Zombie`
    * `User` inflicts [ **1 - 5** ] Damage to the `Zombie` 
* When the `Users` guess *does not* match the `Zombie's` guessed number
    * `Zombie` inflicts a random amount of damage to the `User` between **1 - 5**.
* Each round the zombie is given a new random number and you must guess again. 
* The game ends when:
    * `User` Health = **0** 
    * `Zombie` Health = **0**
* After completion of the game:
  * The `User` is prompted to play again? Selecting `No`:
    * Prints final exit message.
    * Exits the application. 
  * Selecting `Yes` To play again: 
    * `User` then selects either Yes or No to modifying the game settings.
        * Yes allows the `User` to set new starting healths for the `User` And `Zombie`
* Game restarts from the beginning with Health based on the `Users` modification selection or the Default values

---
#### *Technologies Used*:
* [Node.js](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer) NPM Package.

---
## Getting Started
This application requires Node.js and NPM installed locally on your computer, and a CLI terminal.

( My local setup at creation was: Node.js v12.7.0 NPM v6.11.3 and bash 4.4.23 ON Windows 10 )

1. Git clone the application to your computer 
    ```bash
    git clone git@github.com:Vincent440/zombie-node-cli.git
    ```
1. Now move inside the project directory
    ```bash
    cd zombie-node-cli/
    ```
1. Download the [inquirer](https://www.npmjs.com/package/inquirer) Dependency    
    * Using [Yarn](https://yarnpkg.com/en/): 
    ```bash
    yarn install
    ```
    * Using [NPM](https://www.npmjs.com): 
    ```bash
    npm install
    ```

1. Run the application with the following command
    ```bash
    node zombie.js
    ```
*You should now be able to follow the instructions in the terminal from there to play the game*

---

## Created by *Vincent Shury*

*View more of my work here* 
* [Github Profile](https://github.com/Vincent440)
* [Portfolio](https://vincent440.github.io/)

*Contact me here*
* Email [vinceshury@gmail.com](mailto:vinceshury@gmail.com)
* Call or Text [1 (216) 954-0020](tel:+1-216-954-0020)

*Connect with me*
* [LinkedIn-Vincent Shury](https://www.linkedin.com/in/vincent-shury/)
