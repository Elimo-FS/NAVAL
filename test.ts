// possibilité de rajouter ou diminuer les colonnes et les lignes

// interface Ships {
//   name: string,
//   length: number,
//   quantity: number,
//   weapons: string[],
//   crew: {
//     captain: string,
//     officers: number,
//     sailors: number
//   }
// }
const fs = require('fs');
const rl = require('readline-sync');

const path = 'resources.json';
const content = fs.readFileSync(`./${path}`, 'utf-8');
const jsonObject = JSON.parse(content);
// console.log(jsonObject)
// START
console.log('Player 1 prepare for battle !');
// Trouver le nom des bateaux ??
const nameShip: string[] = [];
for (const shipNames of jsonObject.ships) {
  nameShip.push(shipNames.name);
}
// console.log(nameShip)

// Création du tableau
const dot = '.';
const arrayB = Array(1).fill(0);
const matrix: any[] = [];
for (const i of arrayB) {
  matrix.push(Array(8).fill(dot));
}

function matrice() {
  console.log('    A B C D E F G H');
  for (let i = 0; i < matrix.length; i = +1) {
    console.log(`${i + 1} [ ${matrix[i].join(' ')} ]`);
  }
}
function questionJoueurs() {
// Choix du bateau
  let choixShip = rl.keyInSelect(nameShip, `Player (1) - Select your ship (${nameShip.join(', ')}) :`);
  //   const Sh = jsonObject.ships.find(((ships: any) => choixShip === ships.name));
  // console.log(sh);
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

  let poShipArray = [];
  while (poShipArray.length !== 3) {
    const poShip = rl.question('Player 1 - Select ships positions and orientation :');
    poShipArray = poShip.split('');
  }

  // Index des lignes, colonnes et orientation
  const colonne = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const indexColonne = colonne.indexOf(`${poShipArray[0]}`);
  const nombre = +poShipArray[1];
  const ligne = [1, 2, 3, 4, 5, 6, 7, 8];
  const indexLigne = ligne.indexOf(nombre);
  // console.log(indexLigne)

  const lengthShip: number[] = [];
  for (const shipLength of jsonObject.ships) {
    lengthShip.push(shipLength.length);
  }
  // [1] à remplacer
  //   const indexShip = lengthShip[1];

  // ligne :
  const x = indexLigne;
  // colonne :
  const y = indexColonne;

  // Assemblage du tableau avec informations
  matrix[x][y] = choixShip;
// orientation :

}

matrice();
// console.log(choixShip)
// // Choix dela position et de l'orientation
// const NbShip: number = process.argv[3];
for (let Joueur1 = 0; Joueur1 < 3; Joueur1 = +1) {
  questionJoueurs();
  matrice();
}
