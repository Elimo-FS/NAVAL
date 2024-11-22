const fs = require('fs');
import rl from 'readline-sync';
const path = 'resources.json';
const content = fs.readFileSync(`./${path}`, 'utf-8');
const jsonObject = JSON.parse(content);
// console.log(jsonObject)
// START
console.log('Player 1 prepare for battle !')
// console.log(nameShip)
// Trouver le nom des bateaux ??
let nameShip: string[] = []
for (let shipNames of jsonObject.ships) {
    nameShip.push(shipNames.name);
}

// Création du tableau
const dot = '.'
let arrayB = Array(8).fill(0);
let matrix = []
for (let element of arrayB) {
    matrix.push(Array(8).fill(dot));
}
function matrice(){
console.log('    A B C D E F G H');
for (let i=0; i < matrix.length; i++) {
    console.log(`${i+1} [ ${matrix[i].join(' ')} ]`)
}
}
function questionJoueurs(){
// Choix du bateau
let choixShip = rl.keyInSelect(nameShip,`Player (1) - Select your ship (${nameShip.join(', ')}) :`)
// const Sh = jsonObject.ships.find(((ships: any) => choixShip === ships.name))
// console.log(sh)

switch (choixShip) {
    case 0:
        choixShip = 'D';
    break;
    case 1:
        choixShip = 'S';
    break;
    case 2:
        choixShip = 'B';
    break;
    case 3:
        choixShip = 'C';
    break;
    case 4:
        choixShip = 'R';
    break;
    default:
}

let poShipArray = []
while (poShipArray.length != 3) {
let poShip = rl.question('Player 1 - Select ships positions and orientation :');
poShipArray = poShip.split('');
}

// Index des lignes, colonnes et orientation
const colonne = ['A','B','C','D','E','F','G','H']
let indexColonne = colonne.indexOf(`${poShipArray[0]}`);
let nombre = +poShipArray[1];
const ligne = [1,2,3,4,5,6,7,8];
let indexLigne = ligne.indexOf(nombre);
// console.log(indexLigne)

let lengthShip: number[] = []
for (let shipLength of jsonObject.ships) {
    lengthShip.push(shipLength.length);
}
// [1] à remplacer
let indexShip = lengthShip[1];

// ligne :
let x = indexLigne;
// colonne : 
let y = indexColonne;


// Assemblage du tableau avec informations
matrix[x][y]= choixShip;
// orientation :
// for let Orientation ;

}

matrice();
// console.log(choixShip)
// Choix dela position et de l'orientation
let NbShip = +process.argv[3];
for (let Joueur1 = 0; Joueur1 < NbShip; ++Joueur1){
    questionJoueurs();
    matrice();
}
