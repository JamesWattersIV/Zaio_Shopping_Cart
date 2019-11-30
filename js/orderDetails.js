//This script is used to manage the customers order and item details

let OrderTotal = 0;

function colourOrder(){
    colour = "";
    quantity = 0;
    price = 0;
}

//This will be the order object
function colourOrder(colour,quantity,price){
    this.colour = colour;
    this.quantity = quantity;
    this.price = price;
}

//Array to store the order details
let orderDetails=[];

//Function to check if item has already been added to order
function itemExist(itemColour){
    let Exists = false;
    for(let i=0;i<orderDetails.length;++i){
        let orderColour = orderDetails[i].colour;
        if(orderColour == itemColour){
            Exists = true;
        }
    }
    return Exists;
}

//function to get item object
function getOrderObject(findColour){
    for(let i=0;i<orderDetails.length;i++){
        if(findColour === orderDetails[i].colour){
            return orderDetails[i];
        }
    }
}

//Main Function when Accept is clicked in the modal to add items to an order
function addToOrder() {

    //Get Elements
    let itemColour = document.getElementById('colour-changer').innerText;
    let itemQuantity = parseInt(document.getElementById('add-quantity').innerText);
    let tempItemPrice = document.getElementById('discounted-price').innerText;
    let itemPrice = Number(tempItemPrice.slice(1, tempItemPrice.length));

    //First check to ensure Number is greater than 1
    if (itemQuantity > 0) {
        //First check to see if an order for that colour has been placed
        if (itemExist(itemColour)) {
            //Item is already in Order - therefore update quantity of that colour
            getOrderObject(itemColour).quantity += parseInt(itemQuantity);
        } else {
            //Item has not been added - therefore add it
            orderDetails.push(new colourOrder(itemColour, itemQuantity, itemPrice));
        }
        setQuantity();
        populateOrderList();
        updateTotal(itemPrice,itemQuantity);
        disableAddToCart();
    } else {
        console.log("No Item")
        disableAddToCart();
    }
}

function populateOrderList(){

    //clear current display
    clearOrderList();

    for(let i=0;i<orderDetails.length;i++){;
        createButton(getColourName(orderDetails[i].colour),orderDetails[i].quantity);
    }
}

function updateTotal(price,quantity){
    //First, check to see if array has items to populate the list
    if(orderDetails.length==0){
        console.log("No Items In Order");
    }
    else{
        document.getElementById('total-price').innerText = 'R'+ (OrderTotal += (price*quantity)).toFixed(2);
        document.getElementById('total-order').style.display = 'inline-block'; //Check to see if this is correct
    }
}

//Function that dynamically creates the button
function createButton(btnColour,btnQuantity){

    //Create the buttons from the order array
    for(let i=0;i<btnQuantity;i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'col-1 col-sm-1' ;

        let newBtn = document.createElement('button');
        newBtn.disabled = false;
        newBtn.id = getDisplayName(btnColour);
        newBtn.type = 'button';
        newBtn.setAttribute("onclick", "deleteBtn(this)");
        newBtn.className = 'btn btn-primary btn-circle btn-order';
        newBtn.style.backgroundColor = btnColour;
        newDiv.appendChild(newBtn);

        document.getElementById('dynamic-row').appendChild(newDiv);
    }
}

//Clear the current display list to populate the new one;
function clearOrderList(){
    let dynamicRow= document.getElementById("dynamic-row");
    while (dynamicRow.firstChild) {
        dynamicRow.removeChild(dynamicRow.firstChild);
    }
}

function setQuantity(){
    let counter = 0;
    for(let i=0;i<orderDetails.length;i++){
        counter += orderDetails[i].quantity;
    }

    document.getElementById('cart-quantity').innerText = counter;
}

//Get the colour-code so button colour can be set
function getColourName(toFind){
    let tempColourList = getItemDetails();
    let tempColourPalette = getColourPalette();
    for(let i=0;i<tempColourPalette.length;i++){
        if(toFind === tempColourList.colours[tempColourPalette[i]]['display-name']){
            return tempColourPalette[i]
        }
    }
}

function clearCartModal(){
    let dynamicRow= document.getElementById("dynamicCartModal");
    while (dynamicRow.firstChild) {
        dynamicRow.removeChild(dynamicRow.firstChild);
    }
}

function populateCheckoutModal(){
    clearCartModal();

    //Create the Cart from the order array
    for(let i=0;i<orderDetails.length;i++){
        console.log(orderDetails[i].quantity);
        if(orderDetails[i].quantity > 0) {
            console.log('IN HERERERER')
            //Create Row Layout Div
            let rowDiv = document.createElement('div');
            rowDiv.className = 'row row-layout checkout-cart';

            //Create First Column for Item Details
            let itemCol = document.createElement("div");
            itemCol.className = 'col-5 col-sm-5';

            let row = document.createElement("div");
            row.className = 'row';

            //Create the sub elements for first column Div
            let itemDetailsOne = document.createElement("div");
            itemDetailsOne.className = 'col-2 col-sm-2';
            let btnItem = document.createElement('button');
            btnItem.className = 'btn btn-primary btn-circle btn-cart';
            btnItem.type = 'button';
            btnItem.disabled = true;
            btnItem.style.backgroundColor = getColourName(orderDetails[i].colour);
            itemDetailsOne.appendChild(btnItem);

            //Create the colour element
            let itemDetailsTwo = document.createElement("div");
            itemDetailsTwo.className = 'col-8 col-sm-8';
            let itemColour = document.createElement('h3');
            itemColour.className = 'secondary-display cart-display';
            itemColour.innerText = orderDetails[i].colour;
            itemDetailsTwo.appendChild(itemColour);

            let itemDetailsThree = document.createElement("div");
            itemDetailsThree.className = 'col-2 col-sm-2';

            row.appendChild(itemDetailsOne);
            row.appendChild(itemDetailsTwo);
            row.appendChild(itemDetailsThree);

            itemCol.appendChild(row);
            rowDiv.appendChild(itemCol);

            //Now create the price tag
            let itemPrice = document.createElement("div");
            itemPrice.className = 'col-2 col-sm-2';
            let price = document.createElement('h3');
            price.className = 'secondary-display cart-display';
            price.innerText = 'R' + orderDetails[i].price;
            itemPrice.appendChild(price);

            //Add it to the main Div
            rowDiv.appendChild(itemPrice);

            //Now Create White space divider and add it to the main div
            let whiteSpace = document.createElement("div");
            whiteSpace.className = 'col-1 col-sm-1';

            rowDiv.appendChild(whiteSpace);

            //Create the Quantity element
            let itemQuantity = document.createElement("div");
            itemQuantity.className = 'col-1 col-sm-1';
            let number = document.createElement('h3');
            number.className = 'secondary-display cart-display';
            number.innerText = orderDetails[i].quantity;
            itemQuantity.appendChild(number);

            //Add it to the main Div
            rowDiv.appendChild(itemQuantity);


            //Create Total element
            let itemTotal = document.createElement("div");
            itemTotal.className = 'col-3 col-sm-3';
            let total = document.createElement('h3');
            total.className = 'secondary-display cart-display';
            total.style.paddingTop = '2px';
            total.innerText = 'R' + (orderDetails[i].quantity * orderDetails[i].price).toFixed(2);
            itemTotal.appendChild(total);
            rowDiv.appendChild(itemTotal);


            document.getElementById('dynamicCartModal').appendChild(rowDiv);
            //Draw horizontal divider line
            let itemDivider = document.createElement("div");
            itemDivider.className = 'cartHR';
            document.getElementById('dynamicCartModal').appendChild(itemDivider);

            //Update the Order Total
            document.getElementById('cartTotal').innerText = document.getElementById('total-price').innerText;
        }
    }
}

function deleteBtn(value){
    console.log(value.id);
    let tempList = itemDetails;

    let colorDel = value.id;
    for(let i=0;i<orderDetails.length;i++){
        if(orderDetails[i].colour == colorDel){
            //check to see if quantity is 0
            if(orderDetails[i].quantity > 0){
                orderDetails[i].quantity =  orderDetails[i].quantity -1;
                break;
            }
        }

    }


    populateOrderList();
    console.log(orderDetails);
    setQuantity();
    updateTotal((-1)*(tempList.colours[getColourName(colorDel)]['price']),1);
    checkTotal();
}

function getDisplayName(colourCode){
    let tempList = itemDetails;
    let DisplayName = tempList.colours[colourCode]['display-name'];
    return DisplayName;
}

function checkTotal(){
    let total = document.getElementById('total-price').innerText;

    if((total == 'R-0.00') || (total == 'R0.00')){
        document.getElementById('total-order').style.display = 'none';
    }
}