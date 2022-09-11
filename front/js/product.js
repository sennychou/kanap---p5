//Récupérer l'Id dans l'url//
const querysting_url_id=window.location.search;
console.log(querysting_url_id);

const urlsearchparams = new URLSearchParams (querysting_url_id);
console.log(urlsearchparams);

const id_url = urlsearchparams.get("id");
console.log(id_url);

//Récupérer les éléments pour injecter infos produits//

const titleId = document.getElementById("title")
const colorId = document.getElementById("colors")
const imgId = document.querySelector(".item__img")
const descriptionId = document.getElementById("description")
const priceId = document.getElementById("price");


//Appel de l'Api pour récupérer les infos//
fetch("http://localhost:3000/api/products/" + id_url)
    .then((response) => {
        if (response.ok) {
            response.json()
                .then((product) => {
                    // On injecte les infos dans le HTML
                    titleId.innerHTML = `${product.name}`
                    descriptionId.innerHTML = `${product.description}`
                    priceId.innerHTML = `${product.price}`
                    imgId.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
                    const colorArray = product.colors
                    for (let color of colorArray) {
                        colorId.innerHTML += `<option value="${color}"> ${color}</option>`
                    }


                })


        }

    })

    //Ecouter le bouton pour recupérer l'action de l'utilisateur//
    let bouton = document.getElementById("addToCart");
    bouton.addEventListener("click",()=>{
        // console.log("bouton cliqué")

        //Recuperer la quantité selectionné par l'utilisateur//
        let quantity = document.querySelector("#quantity").value
        console.log(quantity);

        //Recuperer la couleur choisis par l'utilisateur//
        let colors = document.querySelector("#colors").value;
        console.log(colors);

        let title = document.querySelector("#title").textContent;
        console.log(title);

        let price = document.querySelector("#price").textContent;
        console.log(price);

        let imageUrl = document.querySelector("body > main > div > section > article > div.item__img > img").src;
        console.log(imageUrl);




        //Recuperation des choix de l' utilisateur dans la variable//
        let choixproduit = {
            id:id_url,
            color:colors,
            _quantity:quantity,
            _title:title,
            _price:price,
            _img:imageUrl,
            
        }
        console.log(choixproduit);

        // let boucle = 0;


        //Vérifier dans le local storage si il y a deja une key/value//
        let produitdanslocalstorage = JSON.parse(localStorage.getItem("produit"));
        console.log(produitdanslocalstorage)

        if(produitdanslocalstorage){
            // let trouverproduit = produitdanslocalstorage.find(p => p.id == p.id);
            // if (trouverproduit != undefined){
            //     trouverproduit + quantity++;
            //     console.log(choixproduit.id);
    
            produitdanslocalstorage.push(choixproduit);
            localStorage.setItem("produit",JSON.stringify(produitdanslocalstorage));
            console.log(produitdanslocalstorage);
        }
        else {
            produitdanslocalstorage = [];
            choixproduit._quantity = 1;
            produitdanslocalstorage.push(choixproduit);
            localStorage.setItem("produit",JSON.stringify(produitdanslocalstorage));
        }
    }
);

function getProductsFromLocalStorage() {
    const products = storageAccess.getItem("productCart")
    if (!products) {
        return {}
    }
    return JSON.parse(products)
};

function changeProductQuantity(id, color, quantity) {
    let products = getProductsFromLocalStorage()
    if (products[id][color]) {
        products[id][color] = quantity
    }

    updateLocalStorage(products)
    location.reload()
}
        // }else{
        
        // console.log(choixproduit.id);


    //     if (!produitdanslocalstorage){
    //         produitdanslocalstorage = [];
    //         produitdanslocalstorage.push(choixproduit);
    //         localStorage.setItem("produit",JSON.stringify(produitdanslocalstorage));
    //     }
        
    //     else {
    //         for (let i = 0; i < produitdanslocalstorage.length; i++) { 
    //             if (produitdanslocalstorage[i].colors === colors && produitdanslocalstorage[i].id === id){
    //             produitdanslocalstorage[i].quantity += quantity;
    //             boucle = 1;
    //             }
    //         } 
        
    //     if (boucle == 0){
    //         produitdanslocalstorage.push(choixproduit);
    //     }
    //     localStorage.setItem("produit",JSON.stringify(produitdanslocalstorage));
    // }
// });

    

        // if(produitdanslocalstorage){
        //     produitdanslocalstorage = [];
        //     produitdanslocalstorage.push(choixproduit);
        // }
        

        //     console.log(produitdanslocalstorage);
        // }

                    // // verifier pas de doubon dans le panier//    
    

    // );





