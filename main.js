console.log("hello");

var myRequest = new XMLHttpRequest();


var foodContainer = document.getElementById("foodContainer");

function makeDom(xhrData){    
    var dogFoodString = "";
    var currentdogFood;

    for(var x = 0; x < xhrData.dog_brands.length; x++) {
        currentdogFood = xhrData.dog_brands[x];
        // dogFoodString += `<div class="col-sm-6 col-md-4">`;
        // dogFoodString += `<div class="thumbnail">`;
        dogFoodString += `<h3 class= "name "> "the first brand name is: " ${xhrData.dog_brands[x].name} </h3>`;
        dogFoodString += `<p> the type is:  ${xhrData.dog_brands[x].types[x].type} </p>`;
        
        for (var i=0 ;i < xhrData.dog_brands[x].types.length ; i++ ){
        dogFoodString += `<p>  volume is :  ${xhrData.dog_brands[x].types[i].type}</p>`;
        	
        	for (var j=0 ;j < xhrData.dog_brands[x].types[i].volumes.length ; j++ ){
        dogFoodString += `<p>  price is :  ${xhrData.dog_brands[x].types[i].volumes[j].name}</p>`;
        dogFoodString += `<p>  price is :  ${xhrData.dog_brands[x].types[i].volumes[j].price}</p>`;
        	}
       	}
        // dogFoodString += `</div></div>`;
    }
    foodContainer.innerHTML = dogFoodString;

}

function executeThisCodeAfterFileLoaded(){
    var data = JSON.parse(this.responseText);

    console.log("my Data is : ", data);

    makeDom(data);
}
function executeThisCodeAfterFileFails(){
    console.log("the failure");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);

//now we do something to the things || 2 things... 
//GET/POST/PUT/DELETE..etc.. SECOND IS WHERE DO I GET IT FROM?
myRequest.open("GET", "petFood.json");

myRequest.send();
console.log("myRequest", myRequest);

