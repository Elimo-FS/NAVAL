"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var readline_sync_1 = require("readline-sync");
var path = 'resources.json';
var content = fs.readFileSync("./".concat(path), 'utf-8');
var jsonObject = JSON.parse(content);
// console.log(jsonObject)
// START
console.log('Player 1 prepare for battle !');
// console.log(nameShip)
// Trouver le nom des bateaux ??
var nameShip = [];
for (var _i = 0, _a = jsonObject.ships; _i < _a.length; _i++) {
    var shipNames = _a[_i];
    nameShip.push(shipNames.name);
}
// Création du tableau
var dot = '.';
var arrayB = Array(8).fill(0);
var matrix = [];
for (var _b = 0, arrayB_1 = arrayB; _b < arrayB_1.length; _b++) {
    var element = arrayB_1[_b];
    matrix.push(Array(8).fill(dot));
}
function matrice() {
    console.log('    A B C D E F G H');
    for (var i = 0; i < matrix.length; i++) {
        console.log("".concat(i + 1, " [ ").concat(matrix[i].join(' '), " ]"));
    }
}
function questionJoueurs() {
    // Choix du bateau
    var choixShip = readline_sync_1.default.keyInSelect(nameShip, "Player (1) - Select your ship (".concat(nameShip.join(', '), ") :"));
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
    var poShipArray = [];
    while (poShipArray.length != 3) {
        var poShip = readline_sync_1.default.question('Player 1 - Select ships positions and orientation :');
        poShipArray = poShip.split('');
    }
    // Index des lignes, colonnes et orientation
    var colonne = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var indexColonne = colonne.indexOf("".concat(poShipArray[0]));
    var nombre = +poShipArray[1];
    var ligne = [1, 2, 3, 4, 5, 6, 7, 8];
    var indexLigne = ligne.indexOf(nombre);
    // console.log(indexLigne)
    var lengthShip = [];
    for (var _i = 0, _a = jsonObject.ships; _i < _a.length; _i++) {
        var shipLength = _a[_i];
        lengthShip.push(shipLength.length);
    }
    // [1] à remplacer
    var indexShip = lengthShip[1];
    // ligne :
    var x = indexLigne;
    // colonne : 
    var y = indexColonne;
    // Assemblage du tableau avec informations
    matrix[x][y] = choixShip;
    // orientation :
    // for let Orientation ;
}
matrice();
// console.log(choixShip)
// Choix dela position et de l'orientation
var NbShip = +process.argv[3];
for (var Joueur1 = 0; Joueur1 < NbShip; ++Joueur1) {
    questionJoueurs();
    matrice();
}
