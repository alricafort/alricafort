/* Allana Cheenille Ricafort, UMass Lowell Computer Science, allanacheenille_ricafort@student.uml.edu
    91.61 GUI Programming Assignment: JQuery Scrabble Game on December 22, 2019 */

var ScrabbleTiles = [] ; //  data array for letter tiles, image url and value was added for each tiles. Array was retrieved from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
ScrabbleTiles[1] = { "letter": "A","tile": 1, "value" : 1,  "original-distribution" : 9, "remaining" : 9, "img" : "Scrabble_Tiles/Scrabble_Tile_A.jpg" } ;
ScrabbleTiles[2] = { "letter": "B","tile": 2,"value" : 3,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles[3] = { "letter": "C","tile": 3,"value" : 3,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_C.jpg" } ;
ScrabbleTiles[4] = { "letter": "D","tile": 4,"value" : 2,  "original-distribution" : 4,  "remaining" : 4, "img" : "Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles[5] = { "letter": "E","tile": 5,"value" : 1,  "original-distribution" : 12, "remaining" : 12, "img" : "Scrabble_Tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles[6] = { "letter": "F","tile": 6,"value" : 4,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles[7] = { "letter": "G","tile": 7,"value" : 2,  "original-distribution" : 3,  "remaining" : 3, "img" : "Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles[8] = { "letter": "H","tile": 8,"value" : 4,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles[9] = { "letter": "I","tile": 9,"value" : 1,  "original-distribution" : 9,  "remaining" : 9, "img" : "Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles[10] = { "letter": "J","tile": 10,"value" : 8,  "original-distribution" : 1,  "remaining" : 1, "img" : "Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles[11] = { "letter": "K","tile": 11,"value" : 5,  "original-distribution" : 1,  "remaining" : 1, "img" : "Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles[12] = { "letter": "L","tile": 12,"value" : 1,  "original-distribution" : 4,  "remaining" : 4, "img" : "Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles[13] = { "letter": "M","tile": 13,"value" : 3,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles[14] = { "letter": "N","tile": 14,"value" : 1,  "original-distribution" : 6,  "remaining" : 6, "img" : "Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles[15] = { "letter": "O","tile": 15,"value" : 1,  "original-distribution" : 8,  "remaining" : 8, "img" : "Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
ScrabbleTiles[16] = { "letter": "P","tile": 16,"value" : 3,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles[17] = { "letter": "Q","tile": 17,"value" : 10, "original-distribution" : 1,  "remaining" : 1, "img" : "Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles[18] = { "letter": "R","tile": 18,"value" : 1,  "original-distribution" : 6,  "remaining" : 6, "img" : "Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles[19] = { "letter": "S","tile": 19,"value" : 1,  "original-distribution" : 4,  "remaining" : 4, "img" : "Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles[20] = { "letter": "T","tile": 20,"value" : 1,  "original-distribution" : 6,  "remaining" : 6, "img" : "Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles[21] = { "letter": "U","tile": 21,"value" : 1,  "original-distribution" : 4,  "remaining" : 4, "img" : "Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
ScrabbleTiles[22] = { "letter": "V","tile": 22,"value" : 4,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles[23] = { "letter": "W","tile": 23,"value" : 4,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles[24] = { "letter": "X","tile": 24,"value" : 8,  "original-distribution" : 1,  "remaining" : 1, "img" : "Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles[25] = { "letter": "Y","tile": 25,"value" : 4,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles[26] = { "letter": "Z","tile": 26,"value" : 10, "original-distribution" : 1,  "remaining" : 1, "img" : "Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
ScrabbleTiles[27] = { "letter": "_","tile": 27,"value" : 0,  "original-distribution" : 2,  "remaining" : 2, "img" : "Scrabble_Tiles/Scrabble_Tile__.jpg"  } ;

tScore = 0;  //  global variable to keep track of total score
score = 0;  //  global variable to keep track of score

$( function() {

  createNew();  //  calls createNew function to generate 7 tiles immediately

  $( "#drop-box-one").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
      totalScore(boxScore(0, (ScrabbleTiles[ui.draggable.attr("id")].value))); //  plain score box, so 0 points
    }
  });

  $( "#drop-box-two").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
        totalScore(boxScore((ScrabbleTiles[ui.draggable.attr("id")].value)*2,0));  //   double score boxes, so double tile value
    }
  });

  $( "#drop-box-three").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
      totalScore(boxScore(0, (ScrabbleTiles[ui.draggable.attr("id")].value)));  //  normal score boxes
    }
  });

  $( "#drop-box-four").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
      totalScore(boxScore(0, (ScrabbleTiles[ui.draggable.attr("id")].value)));  //  normal score boxes
    }
  });

  $( "#drop-box-five").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
      totalScore(boxScore(0, (ScrabbleTiles[ui.draggable.attr("id")].value))); //normal box scores
    }
  });

  $( "#drop-box-six").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )

    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
      totalScore(boxScore((ScrabbleTiles[ui.draggable.attr("id")].value)*2,0));  //  double score boxes
    }

  });

  $( "#drop-box-seven").droppable({  //  make drop boxes droppable for draggable tiles
    accept: "#draggables > li",  //  make drop box accept draggable tiles
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )

    },
    over: function(event,ui) {  //  calls totalScore to compute current score using this drop box, args are drop-box point, draggable ID
      totalScore(boxScore(0, (ScrabbleTiles[ui.draggable.attr("id")].value)));  //  normal box scores
    }
  });

  $("#draggables-items").droppable({  //  make draggable-items (tile-rack) dropppable
    accept: "#draggables > li",  //  accept draggable items
    classes: {
    "ui-droppable-active": "ui-state-active",
    "ui-droppable-hover": "ui-state-hover"
  },
  drop: function( event, ui ) {
    $( this )
      .addClass( "ui-state-highlight" )
  },

});
});

function createNew(){  //  generates 7 new tiles
  var i;
  var base_url = "Scrabble_Tiles/Scrabble_Tile_";  //  variable for img URL for each letter tile
    for(i=0; i<7; i++) {  // loop to make new 7 tiles
      var tiles = randomize();  //  call randomize to generate random number to select a letter tile
      var letID = ScrabbleTiles[tiles].letter;  //
      $draggable = $("<li></li>");  //  make new draggable object as a li item to ul
      $($draggable).attr("id",(ScrabbleTiles[tiles].tile));  //  assigns ID to draggable
      $draggable.css({  //  assigns css properties
        "background-position" : "center",
        "background-size" : "contain",
        "background-image" : "url"+ "('"+ base_url + letID + ".jpg"+"')" +"",
        "height" : "100px",
         "width" : "100px",
        "display" : "inline-block"
      }
      );

      trackLetters(ScrabbleTiles[tiles].tile);  //  call to update array, pass tile to identify array name
      $($draggable).draggable({
        class: "ui-widget-content",
        snap: ".ui-widget-header",
      });
      $("#draggables").append($draggable);  //  append new li item to existing ul in HTML fileS
  }
}

function randomize() {  // randomized function to select random tile
  var tile = Math.floor(Math.random()*27)+1;  //  returns a number between 1 - 28
  return tile;
}

function boxScore(x, y) {  //  computes current score with tile on boxes
  var total = x + y;
  document.getElementById("score").innerHTML = "CURRENT SCORE: " + total;
  return total;
}

function totalScore(x) {  //  computes total with previous score
score = x + score;
document.getElementById("score").innerHTML = "CURRENT SCORE: " + score;
}

function finalScore() {  //  computers total current score when WORD! button is pressed
  tScore = tScore + score;
  score = 0;
  document.getElementById("score").innerHTML = "CURRENT SCORE:  " + score;  //  updates current score on screen
  document.getElementById("tscore").innerHTML = "TOTAL SCORE:  " + tScore;  // updates total score on screen
}

function trackLetters(x) {  //  immediately call this function when generating the letters to keep track of remaining letter values
  var cur = (ScrabbleTiles[x].remaining)-1; //subtract
  ScrabbleTiles[x].remaining = cur;
}

function newLetterSet() {  //  function to delete existing letter tiles to replace wtih new set
  var i = 0;
  var list = document.getElementById("draggables");
  while(list.hasChildNodes()) {  //  deletes all letter tiles
    list.removeChild(list.firstChild);
  }
  score = 0;
  createNew();  //  call createNew to generate new 7 tiles
}

function newGame(){  // starts a new game
  score = 0;
  tscore = 0;
  document.getElementById("score").innerHTML = "CURRENT SCORE:  " + score;  //  update score on screen
  document.getElementById("tscore").innerHTML = "TOTAL SCORE:  " + tscore;  // update total score on screen

  newLetterSet();  //  call to generate new set of tiles
}
