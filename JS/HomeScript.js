var allCategories = [
    "../assets/Laptops/1.jpg",
    "../assets/Makeup/2.jpg",
    "../assets/phones/4.jpg",
    "../assets/Makeup/5.jpg",
    "../assets/cars/6.jpg",
    "../assets/Laptops/6.jpg",
    "../assets/phones/7.jpg",
    "../assets/Makeup/6.jpg",
    "../assets/cars/3.jpg"
];
var laptops = [
    "../assets/Laptops/1.jpg",
    "../assets/Laptops/2.jpg",
    "../assets/Laptops/3.jpg",
    "../assets/Laptops/4.jpg",
    "../assets/Laptops/5.jpg",
    "../assets/Laptops/6.jpg",
];
var makeup = [
    "../assets/Makeup/1.jpg",
    "../assets/Makeup/2.jpg",
    "../assets/Makeup/3.jpg",
    "../assets/Makeup/4.jpg",
    "../assets/Makeup/5.jpg",
    "../assets/Makeup/6.jpg",
];
var cars = [
    "../assets/cars/1.jpg",
    "../assets/cars/2.jpg",
    "../assets/cars/3.jpg",
    "../assets/cars/4.jpg",
    "../assets/cars/5.jpg",
    "../assets/cars/6.jpg",
];
var phones = [
    "../assets/phones/1.jpg",
    "../assets/phones/2.jpg",
    "../assets/phones/3.jpg",
    "../assets/phones/4.jpg",
    "../assets/phones/5.jpg",
    "../assets/phones/6.jpg",
];

var counter = 0;
var numberOfItems = document.getElementsByClassName("navigator-label-items");
var itemContainer = document.getElementById("cards");
var innerItem = document.getElementsByClassName("item")[0];
var parentNode = document.createElement("div");
var item = document.createElement("div");
parentNode.className = "wow bounceInLeft";
item.className = "item";
item.innerHTML = innerItem.innerHTML;
parentNode.appendChild(item);

onload = function () {
    itemContainer.innerHTML = "";
    addItem(allCategories);
};

function loadItems(clicked) {
    switch (clicked) {
        case "0":
            console.log("All Categories");
            itemContainer.innerHTML = "";
            addItem(allCategories);
            break;
        case "1":
            console.log("Phones");
            itemContainer.innerHTML = "";
            addItem(phones);
            numberOfItems[0].innerText = "(" + counter + ")";
            break;
        case "2":
            console.log("Laptops");
            itemContainer.innerHTML = "";
            addItem(laptops);
            numberOfItems[1].innerText = "(" + counter + ")";
            break;
        case "3":
            console.log("Makeup");
            itemContainer.innerHTML = "";
            addItem(makeup);
            numberOfItems[2].innerText = "(" + counter + ")";
            break;
        case "4":
            console.log("Cars");
            itemContainer.innerHTML = "";
            addItem(cars)
            numberOfItems[3].innerText = "(" + counter + ")";
            break;
    }
}

function addItem(itemArray) {
    counter = 0
    for (let i = 0; i < itemArray.length; i++) {
        new WOW().init();
        counter++;
        console.log(i)
        item.firstElementChild.firstElementChild.src = itemArray[i]
        itemContainer.innerHTML += parentNode.innerHTML
    }
}