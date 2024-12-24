let products = {
    data: [{
        productName: "Regular White T-shirt",
        category: "Topwear",
        price: "30",
        image: "White-tshirt.jpg",
    },
    {
        productName: "Beige Short Skrit",
        category: "Bottomwear",
        price: "49",
        image: "Short-Skrit.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartWatch.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartWatch.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartWatch.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartWatch.jpg",
    },
    {
        productName: "topwear",
        category: "Topwear",
        price: "99",
        image: "topwear.jpg",
    },
    {
        productName: "bottomwear",
        category: "Bottomwear",
        price: "99",
        image: "bottomwear.jpg",
    }


],
};

for(let i of products.data){
    //create card
    let card = document.createElement("div");
    //card should have category and should hidden initially
    card.classList.add("card", i.category, "hide");
    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    document.getElementById("products").appendChild(card);
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
}

//parameter passed from button(parameter same as category)
function filterProduct(value){
   //button class code
   let buttons = document.querySelectorAll(".button-value");
   buttons.forEach((button) => {
    //check if value equals innerText
    if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
    }
    else{
        button.classList.remove("active");
    }
   });
   //select all cards
   let elements = document.querySelectorAll(".card");
   //loop through all cards
   elements.forEach((element) =>{
     //display all cards on 'all' but button click
     if(value == "all"){
        element.classList.remove("hide");
     }
     else{
        //check if elements contains category class
        if(element.classList.contains(value)){
            //display element based on category
            element.classList.remove("hide");
        }
        else{
            //hide other elements
        element.classList.add("hide");
        }
     }
   });
}


window.onload = () => {
    filterProduct("all")
}