
//Format the stars for the rating
function add(star,rating){

    //Sets all stars to unchecked
    for (let i=1;i<=5;i++){
        document.getElementById("star"+i).className="fa fa-star";
    }

    //Sets Stars to checked once clicked
    for (let i=1;i<=rating;i++){
        let currentStar = document.getElementById("star"+i);
        if(currentStar.className=="fa fa-star"){
            currentStar.className="fa fa-star checked";
        }
    }
}

function initialiseStars(itemRating){

    //Sets rating to number specified
    for (let i=1;i<=itemRating;i++){
        document.getElementById("star"+i).className="fa fa-star checked";
    }
}