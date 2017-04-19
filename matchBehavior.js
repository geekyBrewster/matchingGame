//define the card object and its properties
 var catCard = {
   image: 'cat.png',
   descriptor: 'cat'
 }

var card = document.querySelector('.card');
var cardValues = [false, " "];
var cardImage = catCard.image;
var cardContent = catCard.descriptor;

//Define the image source using the object's image property
var cardImageSrc = "<img src='" + cardImage +"' />";

toggleCard();

function toggleCard() {
  card.addEventListener("click", function(){
    if (cardValues[0] === false){
      console.log("Backside up");
      flipCard();
    } else{
      console.log("Image side up");
      flipCardBack();
    }
  });
}

function flipCard(){
  //Remove the cardBack styling
    card.classList.remove('cardBack');
    card.classList.add('cardHidden');
  //Apply the image to the card
    card.innerHTML = cardImageSrc;
  //return the content of the card
    cardValues = [true, cardContent];
    console.log(cardValues);
    return cardValues;
}

function flipCardBack(){
  //Remove the image
    card.innerHTML = "";
    card.classList.remove('cardHidden');
    card.classList.add('cardBack');
  //Change the card values
    cardValues = [false, " "];
    console.log(cardValues);
    return cardValues;
}
