// alert("salut JS");

// Kamel Case : mettre maj à chaque nouveaux mots (JS soumis à la casse)
// exemple: let maSuperVariable = "Hello";

// ** Les variables **
// variable est une boite de stockage. Element à droite passe sa valeur à élément de gauche

// var = l'ancienne écriture JS, mais marche tjs
var unTexte = "voici un texte";

// const = constante (donnée fixe)
const prenom = "Justine";

// let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "je suis l'une des chaines de caracteres";

let nouvelleChaine =
  "Chaine precedente : " + chaine + ". Voila, c'etait le contenu";

// Concatenation avec guillemets altgr+7
let autreConcatenation = `Chaine precedente : ${chaine}. Voila, c'etait le contenu`;

// ** Types de données **
let string = "je suis une chaine de caractere";

// pas de guillemets pour nmber et boolean sinon devient string
let number = 24;
let boolean = false;

// array = tableau, tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

// object : accolades {}   chaque élément de object a une clé et une valeur
let object = {
  prenom: "audrey",
  age: 33,
  ville: "lyon",
};
