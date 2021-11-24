window.addEventListener('DOMContentLoaded', function() {
  // Part 1: Ensure that the user can play the game.
  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];

  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-matched')) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) {
        card.classList.add('is-selected');
        selectedCards.push(card); //added push method to add the card to selectedCards array
      }

      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {
        var card1 = selectedCards[0];
        var card2 = selectedCards[1]; //updated index 0 to 1 so the 2nd card won't replace first card on index 0

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {
          matchedCards.push(card1, card2);
          card1.classList.add('is-matched');
          card2.classList.add('is-matched');
        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        setTimeout(function(){ //added some timeOut to allow the cards to be reset and flip
        card1.classList.remove('is-selected');
        card2.classList.remove('is-selected'); //updated variable card3 to card2
        selectedCards = []; },
        300);
      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length === cards.length) { //Updated operation for condition to match matchedCards length and total no. of cards
        alert('You matched all the cards, nice job!');
      }
    });
  });

  // Part 2: Allow the user to customize the colour of the cards.
  // This is achieved by including one of the following values in the URL:
  // - #green
  // - #orange
  // - #red
  var deckElement = document.querySelector('.Cards');
  var deckColor = window.location.hashh;

  if (deckElement && deckColor) {
    var className = 'cards--' + deckColor;
    deckElement.classList.add(className);
  }
});
