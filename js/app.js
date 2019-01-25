//Make this page sing using events or event listeners for the exercises below.


//1. There are no mistakes, only happy accidents.

/*Create a function named `moreTrees` that will invoke the function after clicking on the button.

The function will add the following content inside the paragraph with the id of `nirvana`.
*/

var bliss = "Let's put some happy little bushes on the other side now. Anything you want to do you can do here. Trees cover up a multitude of sins. If you don't like it - change it. It's your world. Maybe there's a happy little waterfall happening over here."

function moreTrees(){
    nirvana.innerHTML = bliss;
}

//2. Less is More
/*Create a function named `lessContent` that will invoke the function after clicking on the button.

The function will hide the contents in the pargraph with the id of `less`.*/

function lessContent(){
    less.style.display = 'none';
}

//3. Edward (エドワード)
/*Create a function named `bling` that will change the text in the paragraph of `worm` after hovering over it. Use the style guide below.

Style Guide:
font size: 28px
font color: #33cc33
border: 3px dotted rosybrown
padding: 10px
*/

function bling(){
    worm.style.fontSize = '28px';
    worm.style.color = '#33cc33';
    worm.style.border = '3px dotted rosybrown';
    worm.style.padding = '10px';
}

//4. Beet Cakes by Dre
/*Add an event listener to the `recipe` button that will display the missing ingredient in the paragraph of `ingredient` after clicking on the button*/

var missing = "1 Big ol' beet";

recipe.addEventListener('click', getRecipe);

function getRecipe(){
        var liElem = document.createElement('li');
        liElem.className = 'mix';
        liElem.innerHTML = missing
        ingredient.appendChild(liElem)
}



//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 30px after clicking on the text.*/


//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";


//8. Fortune Cookie
/*Add an event listener to the `fortune` button that will generate a random message in the `showFortune` h3 element after clicking on the button*/

var messages = ["That wasn't chicken.", "The fortune you seek is in another cookie.", "Tell your friends about DevLeague Prep.", "You will be doing many events tonight.", "Don't let statistics do a number on you.", "Buy your instructor a drink and receive double fortune.", "Is a turtle without a shell naked or homeless?"];

fortune.addEventListener('click', getMessage);

function getMessage(){
    var random = Math.floor(Math.random()* messages.length);
    var ranMsg = messages[random];
    showFortune.innerHTML = ranMsg;
}





//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/
