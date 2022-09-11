// Récupérer le panier via local storage//
let produitdanslocalstorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitdanslocalstorage);

// Récupération de html
const insertpanier = document.querySelector("#cart__items");
console.log(insertpanier);

let someproduct = [];
let sommeProduits;


///////----METHODE1----////
// const removeProduct = async (panier) =>{
//     await panier;
//     console.log("ICI");

// let btnsupprimer = document.querySelectorAll(".deleteItem")
// console.log(btnsupprimer);

//     btnsupprimer.forEach((supprimer) => {
//         supprimer.addEventListener("click",() =>{
//         console.log(supprimer);

//         let totalProduitRemove = produitdanslocalstorage.length;
//         console.log(totalProduitRemove);

//         if(totalProduitRemove == 1){
//             return (
//             localStorage.removeItem("produit"),
//             console.log("remove all")
//         );
//         } else {
//     someproduct = produitdanslocalstorage.filter((el) =>{
//         if(
//             supprimer.dataset._id != el._id || 
//             supprimer.dataset.colors != el.colors
//             ) {
//             return true;
//         }
//         console.log(el);
//         console.log(dataset);
// });
// console.log(someproduct);
// localStorage.setItem("produit",JSON.stringify(someproduct));
// console.log("remove produit");
//         }
//         });
//     });
// return;
// };
// removeProduct();


///////----METHODE2----////
// const supprimer = async (panier) =>{   
//     await panier

//     let moins = document.querySelectorAll(".deleteItem")
//     console.log(moins);

//     moins.forEach((enlever) =>{
//         enlever.addEventListener("click",() =>{
//             console.log(enlever);

//         let totalproduitlocalstorage = produitdanslocalstorage.length;
    
    
//         for( let i = 0; i < totalproduitlocalstorage; i++ )
//         console.log(totalproduitlocalstorage);
//         if(produitdanslocalstorage[i]._quantity == 1)
//         console.log(_quantity);
//         {
//             return (
//             localStorage.removeItem("produit"), location.reload(),console.log("remove produit")
//             );
//         }
//         }
//         );
        
//     });
// };
// supprimer();

    /////-----METHODE3-----////
const retirer = async (panier) =>{
    await panier

let btnsupprimer = document.querySelectorAll(".deleteItem")
console.log(btnsupprimer);

for(let k = 0; k < btnsupprimer.length; k++) {
    btnsupprimer[k].addEventListener("click", () =>{

let id_selectionner = produitdanslocalstorage[k].id;
console.log("id_selectionné");
console.log(id_selectionner);

produitdanslocalstorage = produitdanslocalstorage.filter(el => el.id == id_selectionner);
console.log(produitdanslocalstorage);


})
}
};
retirer();


async function panier() {
    let affichagepanier = [];

    for (i = 0; i < produitdanslocalstorage.length; i++) {
        affichagepanier = affichagepanier + 
            `<article class="cart__item" data-id="${produitdanslocalstorage[i]._id}" data-color="${produitdanslocalstorage[i].color}">
            <div class="cart__item__img">
            <img src=${produitdanslocalstorage[i]._img} alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>${produitdanslocalstorage[i]._title}</h2>
                <p>${produitdanslocalstorage[i].color}</p>
                <p>${produitdanslocalstorage[i]._price}€<p>
            </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${produitdanslocalstorage[i]._quantity}>
                </div>
                <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
                </div>
            </div>
            </div>
        </article> `;
                                    }
    if (i === produitdanslocalstorage.length){
    insertpanier.innerHTML = affichagepanier;}

    //Modifier quantité du panier//
    const changeProductQuantity =async (panier) =>{
        await (panier);

        let quantityItem = document.querySelectorAll(".itemQuantity")
        console.log(quantityItem);

        quantityItem.forEach((modifier) => {
            modifier.addEventListener("change",() => {
                for(i=0; i<produitdanslocalstorage; i++){
                    if(choixproduit[i].id == produitdanslocalstorage.id && choixproduit[i].color == produitdanslocalstorage.color){
                        return(
                            produitdanslocalstorage[i].quantity++,
                            console.log("quantity++"),
                            localStorage.setItem("produit",JSON.stringify(produitdanslocalstorage))
                        )
                    }
                }
            })
        });
    }
    changeProductQuantity();
    };

    const calculproduit= async(panier) =>{
        await panier;
    
        console.log("calcul produit");
    
        let prixproduits = [];
        let quantitetotalproduits = []; 
    
        let tableau = JSON.parse(localStorage.getItem("produit"));
        console.log(tableau);
        
        let afficheqtt = document.querySelectorAll(".itemQuantity");
        console.log(afficheqtt);
    
        tableau.forEach((product) => { //produt n'est pas defini//
            prixproduits.push(product._price.toString().replace(/00/, "") * product._quantity);
            quantitetotalproduits.push(product._quantity);
        });
        console.log(prixproduits);
        console.log(quantitetotalproduits);
    
        totalQuantity.textContent = `${eval(quantitetotalproduits.join("+"))}`;
    
        sommeProduits = eval(prixproduits.toString().replace(/,/g,"+"));
        totalPrice.textContent = sommeProduits;
    };
    calculproduit();
    
panier();


////FORMULAIRE/////
const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const adresse = document.getElementById("address");
const ville = document.getElementById("city");
const email = document.getElementById("email");
const formulaire = document.querySelector(".cart__order__form");

let ValuePrenom,ValueNom,ValueAdresse,ValueVille,ValueEmail;

prenom.addEventListener("input",function(e){
ValuePrenom;
if (e.target.value.length == 0){
    console.log("rien");
    firstNameErrorMsg.innerHTML = "";
    ValuePrenom = null;
    console.log(ValuePrenom);
}
else if(e.target.value.length < 3 || e.target.value.length > 25){
    firstNameErrorMsg.innerHTML = "Prenom doit contenir entre 3 et 25 caracteres"
    ValuePrenom = null
    console.log("trop court/long")
}
if (e.target.value.match(/^[a-z A-Z]{3,25}$/)){
    firstNameErrorMsg.innerHTML = "";
    ValuePrenom = e.target.value;
    console.log("success");
    console.log(ValuePrenom);
}
if(!e.target.value.match(/^[a-z A-Z]{3,25}$/) && e.target.value.length > 3 && e.target.value.length < 25)
{
firstNameErrorMsg.innerHTML = "pas de caractères speciaux,chiffres ou accents";
ValuePrenom = null;
console.log("erreur caractere");
}
});

nom.addEventListener("input",function(e){
    ValueNom;
    if (e.target.value.length == 0){
        console.log("rien");
        lastNameErrorMsg.innerHTML = "";
        ValueNom = null;
        console.log(ValueNom);
    }
    else if(e.target.value.length < 3 || e.target.value.length > 25){
        lastNameErrorMsg.innerHTML = "Nom doit contenir entre 3 et 25 caracteres"
        ValueNom = null
        console.log("trop court/long")
    }
    if (e.target.value.match(/^[a-z A-Z]{3,25}$/)){
        lastNameErrorMsg.innerHTML = "";
        ValueNom = e.target.value;
        console.log("success");
        console.log(ValueNom);
    }
    if(!e.target.value.match(/^[a-z A-Z]{3,25}$/) && e.target.value.length > 3 && e.target.value.length < 25)
    {
    lastNameErrorMsg.innerHTML = "pas de caractères speciaux,chiffres ou accents";
    ValueNom = null;
    console.log("erreur caractere");
    }
    });
    

adresse.addEventListener("input",function(e){
    ValueAdresse;
    if (e.target.value.length == 0){
        console.log("rien");
        addressErrorMsg.innerHTML = "";
        ValueAdresse = null;
        console.log(ValueAdresse);
    }
    else if(e.target.value.length < 3 || e.target.value.length > 35){
        addressErrorMsg.innerHTML = "Adresse doit contenir entre 3 et 35 caracteres"
        ValueAdresse = null
        console.log("trop court/long")
    }
    if (e.target.value.match(/^[0-9]{1,3} [a-z A-Z]{3,25}$/)){
        addressErrorMsg.innerHTML = "";
        ValueAdresse = e.target.value;
        console.log("success");
        console.log(ValueAdresse);
    }
    if(!e.target.value.match(/^[0-9]{1,3} [a-z A-Z]{3,25}$/) && e.target.value.length > 3 && e.target.value.length < 35)
    {
        addressErrorMsg.innerHTML = "Adresse commence par chiffres ou lettres pas de spécial";
        ValueAdresse = null;
        console.log("erreur caractere");
    }
    });

ville.addEventListener("input",function(e){
    ValueVille;
    if (e.target.value.length == 0){
        console.log("rien");
        cityErrorMsg.innerHTML = "";
        ValueVille = null;
        console.log(ValueVille);
    }
    else if(e.target.value.length < 3 || e.target.value.length > 25){
        cityErrorMsg.innerHTML = "Ville doit contenir entre 3 et 25 caracteres"
        ValueVille = null
        console.log("trop court/long")
    }
    if (e.target.value.match(/^[a-z A-Z]{3,25}$/)){
        cityErrorMsg.innerHTML = "";
        ValueVille = e.target.value;
        console.log("succes");
        console.log(ValueVille);
    }
    if(!e.target.value.match(/^[a-z A-Z 0-9]{3,25}$/) && e.target.value.length > 3 && e.target.value.length < 25)
    {
    cityErrorMsg.innerHTML = "pas de caractères speciaux ou accents";
    ValueVille = null;
    console.log("erreur caractere");
    }
    });

email.addEventListener("input",function(e){
    ValueEmail;
    if (e.target.value.length == 0){
        console.log("rien");
        emailErrorMsg.innerHTML = "";
        ValueEmail = null;
        console.log(ValueEmail);
    }
    else if(e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
    {
        emailErrorMsg.innerHTML = ""
        ValueEmail = e.target.value;
        console.log(ValueEmail);
    }
    if(!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && !e.target.value.length == 0)
    {
    emailErrorMsg.innerHTML = "email incorect ex:Senny@gmail.com";
    ValueEmail = null;
    console.log("mail invalide");
    }
    });
let commandeproduits = JSON.parse(localStorage.getItem("commande"))
formulaire.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log("stop");

if (ValuePrenom && ValueNom && ValueAdresse && ValueVille && ValueEmail){
    console.log("ok");
    const commandeFinal = JSON.parse(localStorage.getItem("produit"))
    let commandeID = [];
    console.log(commandeFinal);
    console.log(commandeID);

    commandeFinal.forEach((commande) => {
        commandeID.push(commande.id);
    });

    const data = {
        contact : {
            firstname : ValuePrenom,
            lastName : ValueNom,
            adresse : ValueAdresse,
            ville : ValueVille,
            email : ValueEmail,
        },
        products : commandeID,
    };
console.log(data);
    console.log(commandeID);


    ////////////////////Fetch POST//////////////////
   
fetch("http://localhost:3000/api/products/order/", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
}).then((res) => res.json())
.then((promise) => {
    let reponseServeur = promise;
    console.log(reponseServeur)


const dataCommande = {
    contact : reponseServeur.contact,
    order : reponseServeur.orderId,
    Total : sommeProduits,
};

if(commandeproduits == null){
    commandeproduits = [];
    commandeproduits.push(dataCommande);
    localStorage.setItem("commandes",JSON.stringify(commandeproduits));
} else if(commandeproduits != null) {
    commandeproduits.push(dataCommande);
    localStorage.setItem("commandes",JSON.stringify(commandeproduits));
}
localStorage.removeItem("produit");
location.href = "confirmation.html";
});
}
else{
    alert("Veuillez remplir le formulaire");
    }
});
console.log(commandeproduits);