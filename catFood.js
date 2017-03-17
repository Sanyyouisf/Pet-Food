
var myRequest = new XMLHttpRequest();

var catFoodContainer = document.getElementById("catFoodContainer");

function makeCatDom(xhrData){    
    var catFoodString = "";
    var currentCatFood;

    for(var x = 0; x < xhrData.cat_brands.length; x++) {
        currentCatFood = xhrData.cat_brands[x];
        catFoodString += `<h3 class= "name "> "the first cat brand name is: " ${xhrData.cat_brands[x].name} </h3>`;
        catFoodString +=` <h5 >" cat breeds are: " ${xhrData.cat_brands[x].breeds.join(' - ')} </h5>`;
        catFoodString +=`<p  class = "mainTypes">  the two main types are: </p>`
        
        for (var i=0 ;i < xhrData.cat_brands[x].types.length ; i++ ){
        	catFoodString += `<p class="secondType">  + type :  ${xhrData.cat_brands[x].types[i].type}</p>`;
        	
        	for (var j=0 ;j < xhrData.cat_brands[x].types[i].volumes.length ; j++ ){
                catFoodString += `<p>  - volume is :  ${xhrData.cat_brands[x].types[i].volumes[j].name}</p>`;
                catFoodString += `<p>  - price is :  ${xhrData.cat_brands[x].types[i].volumes[j].price}</p>`;
        	}
       	}
    }
    catFoodContainer.innerHTML = catFoodString;
}

function executeCataFoodAfterFileLoaded(){
    var catData = JSON.parse(this.responseText);
    console.log("my cat Data is : ", catData);
    makeCatDom(catData);
}

myRequest.addEventListener("load", executeCataFoodAfterFileLoaded);
myRequest.open("GET", "catFood.json");

myRequest.send();
console.log("myRequest", myRequest);

