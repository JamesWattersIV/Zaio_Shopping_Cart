//this script is used to control the add to cart section of the web page as well as the modal

//To implement
function removeFocus() {
    console.log("removing focus");
    document.getElementById('add-to-cart').focusout()
}

function enableAddToCart(){
    if(document.getElementById('colour-changer').innerText !== 'Select A Colour'){
        document.getElementById('add-to-cart').disabled = false;
    }
    else{
        document.getElementById('add-to-cart').disabled = true;
    }
}

function disableAddToCart(){
    document.getElementById('add-to-cart').disabled = true;
    document.getElementById('colour-changer').innerText = 'Select A Colour';
}

// -------------------- Modal Functions -------------------
//Increase Quantity of Item
function incrementQuantity(){
    let quantity = document.getElementById("add-quantity").innerHTML;
    document.getElementById("add-quantity").innerHTML = ++quantity;
    document.getElementById("quantity-accept").disabled = false;


}

//Decrease Quantity of Item
function decrementQuantity(){
    let quantity = document.getElementById("add-quantity").innerHTML;
    if(quantity>0){
        document.getElementById("add-quantity").innerHTML = --quantity;
    }

    let updatedQuantity = document.getElementById("add-quantity").innerHTML;
    console.log(updatedQuantity);
    if(updatedQuantity==0){
        document.getElementById("quantity-accept").disabled = true;
    }

}

