const itemColours = [
    'indianred',
    'blueviolet',
    'blue',
    'green',
    'yellow',
    'orange',
    'brown',
    'black',
    'purple',
    'lightcoral',
    'lightblue',
    'lightskyblue',
    'indigo',
    'silver',
    'steelblue',
    'pink',
    'sandybrown',
    'gold'
];

function initialiseItemColours(){
    let tempJson = getItemDetails();
    for(let i=0;i<itemColours.length;i++){
        document.getElementById('btn-'+i).style.backgroundColor = itemColours[i];
        document.getElementById('btn-'+i).id = tempJson.colours[itemColours[i]]['display-name'];
    }
    document.getElementById(tempJson.colours[itemColours[0]]['display-name']).focus();
    changeColour(tempJson.colours[itemColours[0]]['display-name']);

}

function getColourPalette(){
    return itemColours;
}

function changeColour(value){
    console.log(value)
    document.getElementById('colour-changer').innerText = value;
    updatePrice(value);
    enableAddToCart();
}

//Sets the colour for the modal
function colorSelected(){
    document.getElementById('modal-colour-selection').innerText = document.getElementById('colour-changer').innerText;
    document.getElementById('add-quantity').innerText = '1';
}


function updatePrice(value){
    document.getElementById('discounted-price').innerText = 'R'+ getItemDetails().colours[getColourName(value)].price;
    document.getElementById('no-discount-price').innerText = 'R' + calcDiscount(getItemDetails().colours[getColourName(value)].price) +'.99';
}

function calcDiscount(disPrice){
    return Math.ceil(Number(disPrice) * 1.25);
}

//Jquery to reset to default when another button is clicked
$(document).ready(function(){
    $(".btn-circle").hover(function(){
        $(this).css("border", "#595959 2.5px solid");
        $(this).css("opacity","60%");
        $(this).css("filter"," brightness(75%)");
    }, function(){
        if($(this).is(":focus")){
            $(this).css("opacity", '100%');
            $(this).css("filter"," brightness(100%)");
            $(this).css("border","white 6px solid");
        }
        else{
            $(this).css("border", "none");
            $(this).css("opacity", '100%');
            $(this).css("filter"," brightness(100%)");
        }
    });

});

$(document).ready(function(){
    $(".btn-circle").focusout(function() {
        $(this).css("border", "none");
    });
});