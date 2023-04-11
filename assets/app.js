var randomNumber = function(low, high) {
    return Math.floor( Math.random() * (1 + high - low) ) + low;
  };
  
  var cube = document.getElementById('cube');
  var outcome = document.getElementById('outcome');
  var outcomeText = document.getElementById('text');
  var messageDelay; //timer
  var fadeout; //timer
  var messages = [
    'Your Bard was killed',
    'You smote the orc',
    'You escaped the Ice Dragon',
    'Lightning Bolt succeeded',
    'Critical hit',
    'You are Lawful Evil',
    'You fell into the Well of Sorrows',
    'You found the Goblet of Endless Grog',
    'You encountered a Harpy',
    'Charisma + 10',
    'You lose 11 Hit Points',
    'You disarmed the trap',
    'Plate Mail + 3',
    '14 Damage',
    'Spell failure',
    'Backstab successful',
    'Your wand broke',
    'Surprise Attack',
    'You broke through the door',
    'You turned to stone'
  ];
  
  
  var showFace = function() {
  
    var face = randomNumber( 1, 20 );
  
    //if not already at this number
    if (cube.className !== 'show-' + face ) {
  
      cube.className = 'show-' + face;
  
      //delay for spin to finish
      messageDelay = setTimeout( function() {
  
        //show message
        outcomeText.innerHTML = messages[ face - 1 ];
        outcome.className = 'show';
  
        //display message then fade out
        fadeout = setTimeout( function() {
  
          //hide message
          outcome.className = '';
  
        }, 2000);
  
      } , 1000);
  
    } else {
      //repeat number, try again
      return showFace();
    }
  
  };
  
  
  document.getElementById('roll').addEventListener( 'click', function() {
  
    //fade message
    outcome.className = '';
  
    //clear timers if they are there
    if ( typeof messageDelay === "number" ) {
      clearTimeout( messageDelay );
      clearTimeout( fadeout );
    }
  
    showFace();
  
  }, false);
  