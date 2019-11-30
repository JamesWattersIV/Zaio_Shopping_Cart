const starRating = 4;
const itemDetails = {
    "itemName": "HICKIES Originals",
    "itemRating": "1 296 Reviews",
    "discountedPrice": 14.99,
    "actualPrice": 19.99,
    "discountValue": "25% OFF",
    "colours": {
        "indianred": {
            "display-name": "Indian Red",
            "price": 14.99
        },
        "blueviolet": {
            "display-name": "Blue Violet",
            "price": 20.99
        },
        "blue": {
            "display-name": "Blue",
            "price": 15.99
        },
        "green": {
            "display-name": "Green",
            "price": 15.99
        },
        "yellow": {
            "display-name": "Yellow",
            "price": 18.99
        },
        "orange": {
            "display-name": "Orange",
            "price": 21.99
        },
        "brown": {
            "display-name": "Brown",
            "price": 14.99
        },
        "black": {
            "display-name": "Black",
            "price": 14.99
        },
        "purple": {
            "display-name": "Purple",
            "price": 22.99
        },
        "lightcoral": {
            "display-name": "Light Coral",
            "price": 24.99
        },
        "lightblue": {
            "display-name": "Light Blue",
            "price": 18.99
        },
        "lightskyblue": {
            "display-name": "Light Skyblue",
            "price": 24.99
        },
        "indigo": {
            "display-name": "Indigo",
            "price": 24.99
        },
        "silver": {
            "display-name": "Silver",
            "price": 29.99
        },
        "steelblue": {
            "display-name": "Steel Blue",
            "price": 19.99
        },
        "pink": {
            "display-name": "Pink",
            "price": 14.99
        },
        "sandybrown": {
            "display-name": "Sandy Brown",
            "price": 14.99
        },
        "gold": {
            "display-name": "Gold",
            "price": 49.99
        },
    }
};

function getItemDetails() {
    return itemDetails;
}

function initialisePage(){

    //Get HTML Elements to Initialise
    let itemName = document.getElementById('item-name');
    let itemRating = document.getElementById('item-rating');
    let itemPrice = document.getElementById('discounted-price');
    let itemActualPrice = document.getElementById('no-discount-price');
    let itemDiscount = document.getElementById('discount');

    //Sets the Values Once the webpage hsa loaded
    itemName.innerText = getName();
    itemRating.innerText = getReview();
    itemPrice.innerText = 'R'+ getPrice();
    itemActualPrice.innerText = 'R' + getActPrice();
    itemDiscount.innerText = getDiscount();

    //Initialise the star rating
    initialiseStars(starRating);

    //Initialise button colours for colour palette
    initialiseItemColours()

}

function getName(){
    return itemDetails['itemName'];
}

function getReview(){
    return itemDetails['itemRating'];
}

function getPrice(){
    return itemDetails['discountedPrice']
}

function getActPrice(){
    return itemDetails['actualPrice']
}

function getDiscount(){
    return itemDetails['discountValue']
}

function reloadPage(){
    alert("Thank you for shopping.\nPage Will Now Reload");
    location.reload();
}
