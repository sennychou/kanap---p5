// const commande = JSON.parse(localstorage.getItem("commande"));

// const affichagecommande = async () =>{
//     console.log(affichagecommande);
// }

///// Afficher le numéro de commande /////
// On récupère l'id dans l'url
const id = (new URL(location)).searchParams.get("id");

// On injecte le numéro de commande
const orderId = document.getElementById("orderId");
orderId.innerHTML = id;