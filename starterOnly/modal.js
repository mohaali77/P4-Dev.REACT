function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


/////////////// SUITE ///////////////


//on récupère les boutons "fermer" du DOM dans une variable. 
let btnclose = document.getElementsByClassName('close')[0];
let closeBtn = document.getElementById("btn-close");

//on écoute l'évènement 'clique' de ce bouton, et lors du clique on ferme le formulaire avec un display: none
btnclose.addEventListener("click", e => {
  modalbg.style.display = "none";
})

closeBtn.addEventListener("click", e => {
  modalbg.style.display = "none";
})

// ici on récupère les éléments du DOM dans des variables pour pouvoir les manipuler.

//Champs des messages d'erreurs
let errorFirst = document.getElementById("errorFirst");
let errorLast = document.getElementById("errorLast");
let errorEmail = document.getElementById("errorEmail");
let errorDate = document.getElementById("errorDate");
let errorQuantity = document.getElementById("errorQuantity");
let errorLocation = document.getElementById("errorLocation");
let errorCheckBox = document.getElementById("errorCheckBox");

//le formulaire
let form = document.querySelector("form");
let modal = document.getElementById("modal-body");
//le message de confirmation
let msgThanks = document.getElementById("msg-thank-you")

//les inputs des prenom, nom, email, etc. 
let inputFirst = document.getElementById("first");
let inputLast = document.getElementById("last");
let inputEmail = document.getElementById("email");
let inputDate = document.getElementById("birthdate");
let inputQuantity = document.getElementById("quantity");

//les différents inputs des villes
let inputLocation1 = document.getElementById("location1");
let inputLocation2 = document.getElementById("location2");
let inputLocation3 = document.getElementById("location3");
let inputLocation4 = document.getElementById("location4");
let inputLocation5 = document.getElementById("location5");
let inputLocation6 = document.getElementById("location6");
let inputLocations = document.querySelectorAll("input[name='location']");

//l'input des conditions d'utilisation
let inputCheckBox = document.getElementById('checkbox1');


//On créer une fonction qui permettra de vérifier si le formulaire est bien valide.
function isFormValid() {

  //au départ on définis la fonction comme étant true
  let isFormValid = true

  ////////// PRENOM ////////////

  //on définit notre regex qui définira les conditions de validations du prenom 
  let regexFirst = new RegExp(/^[a-zA-Z-\s]+$/);

  //si le champs de l'input est vide, ou que les conditions fixé par la regex ne sont pas valides, alors 
  //on affiche un message d'erreur, on ajoute une bordure rouge à l'input, et on définit la fonction comme false. 
  //Sinon aucun paramètre ne change.
  if (!inputFirst.value || regexFirst.test(inputFirst.value) == false) {
    errorFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    inputFirst.style.border = "2px solid red"
    isFormValid = false
  } else {
    errorFirst.innerText = ''
    inputFirst.style.border = "none"
  }

  ////////// NOM ////////////

  let regexLast = new RegExp(/^[a-zA-Z-\s]+$/);

  if (!inputLast.value || regexLast.test(inputLast.value) == false) {
    errorLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    inputLast.style.border = "2px solid red"
    isFormValid = false
  } else {
    errorLast.innerText = ''
    inputLast.style.border = "none"
  }

  ////////// EMAIL ////////////


  let regexEmail = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);

  if (!inputEmail.value || regexEmail.test(inputEmail.value) == false) {
    errorEmail.innerText = 'Veuillez entrer votre adresse e-mail.'
    inputEmail.style.border = "2px solid red"
    isFormValid = false
  } else {
    errorEmail.innerText = ''
    inputEmail.style.border = "none"
  }

  ////////// DATE DE NAISSANCE ////////////


  let regexDate = new RegExp(/(19|20)\d\d\-(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|[12][0-9]|3[01])/)

  if (!inputDate.value || regexDate.test(inputDate.value) == false) {
    errorDate.innerText = 'Votre date de naissance est invalide.'
    inputDate.style.border = "2px solid red"
    isFormValid = false
  } else {
    errorDate.innerText = ''
    inputDate.style.border = "none"
  }


  ////////// NOMBRE DE TOURNOIS ////////////


  let regexQuantity = (/^([0-9]|[0-9][0-9])$/)

  if (!inputQuantity.value || regexQuantity.test(inputQuantity.value) == false) {
    errorQuantity.innerText = 'Indiquez le nombre de tournois auquel vous avez participé.'
    inputQuantity.style.border = "2px solid red"
    isFormValid = false
  } else {
    errorQuantity.innerText = ''
    inputQuantity.style.border = "none"
  }


  ////////// DANS QUELLE VILLE ////////////


  // avec la methode 'checked' on peut vérifier la valeur boleenne de chaque input.
  // false = non coché / true = coché. 
  // donc ici si tous les inputs ont une valeur 'false', donc ne sont pas coché, on affiche un message d'erreur
  // et on définit la valeur de la fonction comme 'false'. sinon on affiche aucun message. 
  if (inputLocation1.checked === false &&
    inputLocation2.checked === false &&
    inputLocation3.checked === false &&
    inputLocation4.checked === false &&
    inputLocation5.checked === false &&
    inputLocation6.checked === false) {
    errorLocation.innerText = 'Veuillez choisir une option.'
    isFormValid = false
  } else {
    errorLocation.innerText = ''
  }

  if (inputCheckBox.checked === false) {
    errorCheckBox.innerText = "Veuillez accepter les conditions d'utilisation"
    isFormValid = false
  } else {
    errorCheckBox.innerText = ''
  }

  //ici on rappelle la valeur boleenne de la fonction. Si toute les vérifications des champs ont bien 
  //été validé, alors elle renverra comme à l'origine la valeur "true" sinon elle renverra 'false".
  return isFormValid
}


//ici on ecoute l'evenement 'soumettre' du formulaire.

form.addEventListener('submit', function submit(e) {

  //Comme on l'a vu plus haut, si la fonction isFormValid renvoie true, on soumet le formulaire.
  //Sinon, on empêche la soumission du formulaire. 
  if (isFormValid() == true) {

  } else {
    e.preventDefault();
  }

})

function validate() {

  if (isFormValid() == true) {
    //on masque le formulaire pour laisser place au message de confirmation
    form.style.display = "none";
    //on affiche le message de confirmation d'inscription. 
    msgThanks.style.display = "block"
    //on affiche le bouton fermer en dessous du message
    closeBtn.style.display = "block"

    setTimeout(function () {
      form.submit();
    }, 3000);

    //bloque l'evenement submit pour rester sur le meme modal
    return false
  }

}