const readlineSync = require ('readline-sync');

const name = readlineSync.question('Name please? ');

readlineSync.question('Greetings ' + name +', Welcome to SUNNY! Adventure and evil await should you dare to try!  Press ENTER to begin.');

const enemies = ['Nightman', 'Dayman', 'Troll'];
const loot = ['Kitten Mittens', 'Duster', 'Egg']
var prize = [];
let heroHP = 100;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = loot[Math.floor(Math.random() * loot.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (4 + 2 - 5) + 3);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHP = 100;
    const enemiesPower = Math.floor(Math.random() * (4 + 2 - 5) + 3);

    const index = readlineSync.keyInSelect(options, 'What is next?');

    if (options[index] == 'Exit') {
        return heroHP = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + heroHP + '\nloot: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .25) {
            console.log('Walking...');           
        }  else if (key >= .25) {
            console.log(enemy + ' showed up.');

            while(enemiesHP > 0 && heroHP > 0) {

                const hero = readlineSync.question('What would you like to do? Press "r" to run or "a" to attck: ');

                switch (hero){
                    case 'r':
                        // run
                        const run = Math.random();
                        if(run < .5) {
                            console.log('Before you can run away ' + enemy + ' attacks you: ' + enemiesPower);
                        }else {
                            console.log('Run Away!');
                            break;
                        }

                    case 'a':
                        // attack enemy
                        enemiesHP -= attackPower;
                        console.log('You attacked ' + enemy + ' with ' + attackPower + ' attack power ');

                        heroHP -= enemiesPower;
                        console.log('Enemy attacked you: ' + enemiesPower + 'attack power');

                        if (enemiesHP <= 0){
                            console.log('You annihilated ' + enemy + '.\n' + enemy + ' left: ' + pickUp);
                            let spoils = Math.random();
                            if (spoils <= .25){
                                prize.push(pickUp);
                            }
                            }else if(heroHP <=0){
                                console.log(enemy + ' absolutely destroyed you.  You have died! ')
                            }
                        }
                }
            }
        }
    }
while (heroHP > 0){
    game();
}