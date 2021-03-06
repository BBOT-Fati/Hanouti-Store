
/*
1- Initialiser un projet git dans le dossier DS
2- Ecrire le code HTML et CSS pour réaliser cette page
3- Faire un commit des changements avec le message "satatic page"
4- Completer la fonction  updateList pour afficher la liste des produits 
5- Faire un commit des changements avec le message "updateList"
6- Un clique sur (+) permet d'ajouter un produit au panier. 
Completer le code de "addProd" pour ajouter des element au panier et modifier le prix total
7-Faire un commit des changements avec le message "addProd"
8-Completer le code de "delProd" pour supprimer un element au panier
9-Faire un commit des changements avec le message "delProd"
10-Completer le code de "searchfun" pour filtrer les element de la liste
11- Faire un commit des changements avec le message "searchfun"
12- utiliser ajax pour récuperer la list des produit de http://este.ovh:8080/prods
*/

let cart =document.querySelector("#cart");
let content=document.querySelector("#content");
let total=document.querySelector("#total");
let search=document.querySelector("input");
let btna=document.querySelectorAll(".icona");
let divs=document.querySelectorAll(".produit");
let details=document.querySelectorAll("button");
let btnp=document.querySelector("#purchase");

search.addEventListener("input",searchfun);
btna.forEach(e => {
    e.addEventListener("click",addProd); 
});

details.forEach(e=>{
    e.addEventListener("click",prodDetails);
})

function addProd(e){
    let btn=e.target;
    let id=btn.getAttribute("id");
    let a=data.find((i)=>i.id ==id);
    let citems=cart.querySelectorAll("li");

    let t=parseInt(total.innerHTML);
    t+=a.price;
    total.innerHTML=t;

    for (let i = 0; i < citems.length; i++) {
        if (citems[i].className==id){
            let qnt=citems[i].querySelector("span").textContent;
            let a=parseInt(qnt);
            citems[i].querySelector("span").textContent=++a;
            return;
        }
    }

    let item =document.createElement("li");
    item.setAttribute("class",id);
    let p=document.createElement("p");
    p.textContent=(a.name+" : "+a.price+" dh | ");
    item.appendChild(p);

    let qnt=document.createElement("span");
    qnt.textContent=a.qtt+1;
    item.appendChild(qnt);

    let button=document.createElement("img");
    button.setAttribute("src","imgs/del.png");
    button.setAttribute("class","icond");
    button.addEventListener("click",delProd);
    item.appendChild(button);
            
    cart.appendChild(item);
}
function prodDetails(e) {
    let div=e.target.parentElement;
    let btn=e.target.previousElementSibling;
    e.target.style.display="none";
    let id=btn.getAttribute("id");
    let a=data.find((i)=>i.id ==id);
    div.querySelector("h2").style.display="none";
    let desc=document.createElement("div");
    let p=document.createElement("p");
    p.innerText="Product id :"+a.id+"\n Product name :"+a.name+"\n Product price :"+a.price+" dh\n";
    desc.appendChild(p);
    let b=document.createElement("button");
    b.innerHTML="less details";
    b.addEventListener("click",removeDetails);
    desc.appendChild(b);
    div.appendChild(desc);
}
function removeDetails(e) {
    let cont=e.target.parentElement.parentElement;
    let div=e.target.parentElement;
    div.remove();
    cont.querySelector("h2").style.display="";
    cont.querySelector("button").style.display="";
}

function delProd(e){
    let btn=e.target;
    let li=btn.parentElement;
    let span=li.querySelector("span").innerHTML;

    if(span==1){li.remove();}
    else {
        let a=parseInt(span);
        li.querySelector("span").innerHTML=--a;
    }

    let t=parseFloat(total.innerHTML);
    let id=li.getAttribute("class");
    let a=data.find((i)=>i.id ==id);
    t-=a.price;
    total.innerHTML=t;
}

function searchfun(e){
    let input=e.target.value;
    divs.forEach(e=>{
        if(e.getAttribute("id").toLowerCase().indexOf(input)>-1){
            e.style.display="";
        }
        else{
            e.style.display="none";
        }
    })
}

btnp.addEventListener("click",purchase);

function purchase() {
    let i=1;
    let commande="";
    Array.from(cart.children).forEach(e=>{
        console.log(e.innerText);
        commande +=i+" - "+e.textContent+"\n";
        i++;
    })
    commande +="TOTAL : "+total.innerHTML+" dh";
    let r=confirm("You're about to purchase :\n"+commande);
    if(r==true){alert("Thank you for chosing our store !\n Happy consumption :)");}
}