import './styles.css';
import GreenPng from './img/green-on.png';
import RedPng from './img/red-on.png';
import YellowPng from './img/yellow-on.png';
import BluePng from './img/blue-on.png';
import {Game} from './Game.js';


import GrnMp3 from './mp3/green.mp3';
import RedMp3 from './mp3/red.mp3';
import YellowMp3 from './mp3/yellow.mp3';
import BlueMp3 from './mp3/blue.mp3';
import WrongMp3 from './mp3/wrong.mp3';


const greenMp3 = new Audio();
greenMp3.src = GrnMp3;
const redMp3 = new Audio();
redMp3.src = RedMp3;
const yellowMp3 = new Audio();
yellowMp3.src = YellowMp3;
const blueMp3 = new Audio();
blueMp3.src = BlueMp3;
const wrong = new Audio();
wrong.src = WrongMp3;








$(document).ready(function() {
  $('.green-div').append(`<img id="green" class="colorButton" src="${GreenPng}" alt="green" color="green">`);
  $('.red-div').append(`<img id="red" class="colorButton" src="${RedPng}" alt="red" color="red">`);
  $('.yellow-div').append(`<img id="yellow" class="colorButton" src="${YellowPng}" alt="yellow" color="yellow">`);
  $('.blue-div').append(`<img id="blue" class="colorButton" src="${BluePng}" alt="blue" color="blue">`);
  const game = new Game();
  game.getNextColor();

  computerTurn(game.currentPattern);

  console.log(game);

  function computerTurn(colorArray) {
    function logColor(colorArray, i) {
      setTimeout(function() {
        if (i < colorArray.length) {
          console.log(colorArray[i]);
          eval(`${colorArray[i]}Mp3`).play();
          $(`#${colorArray[i]}`).animate({opacity:1.0}, 10).animate({opacity:0.5}, 990);
          logColor(colorArray, i+1);
        } else {
          game.userTurn = true;
        }
      }, 1000);
    }
    logColor(colorArray, 0);
  }

  $('.simon-grid').on('click', '.colorButton', function() {

    if (game.userTurn) {
      $(this).animate({opacity:1.0}, 10).animate({opacity:0.5}, 990);
      const thisColor = $(this).attr('color');
      eval(`${thisColor}Mp3`).play();

      const selectionResult = game.checkUserInput(thisColor);
      if (!selectionResult) {

        game.userTurn = false;
        game.resetGame();
        game.getNextColor();
        computerTurn(game.currentPattern);
      } else if (Array.isArray(selectionResult)) {
        console.log('round done');
        game.userTurn = false;
        computerTurn(selectionResult);

      } else {
        console.log("GotIt!");
      }
    } else {
      console.log("STOP!");
      eval(`wrong`).play();
    }


  });

});

/*

Journal
Create a journaling website where a user can write entries including at least a title and body.

Create Entry objects that include a method to return the number of words in the entry.

Then, add a separate method (or methods) to return the number of vowels and consonants in each entry.

Call each of these methods from your front-end file to display their return values. Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words. Be sure to call this method from your front-end file to display the results as well, whenever a new journal entry is created.

*/
