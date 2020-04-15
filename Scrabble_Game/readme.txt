Allana Cheenille Ricafort, UMass Lowell Computer Science, allanacheenille_ricafort@student.uml.edu
1.61 GUI Programming Assignment: JQuery Scrabble Game on December 22, 2019 

For HW9, I believed I implemented most of the basic functionality described in the rubric.
My program can drag and drop draggable items. The draggable items can snap onto droppable
objects such as the tile rack and the box tiles. The only issue with my draggables is that
they snap onto droppable objects quickly and almost anywhere within the droppables. If the user
even slightly move a letter tile on a droppable even though it's already been dropped, then the 
score for that will be counted as well. I believe I was able to compute the current score and 
total score for the game. The current score is computed everytime a letter tile snaps onto 
a draggable. Immediately, it will call a function to add onto the current score variable and update
it on the window. I implemented a function that updates the ScrabbleTiles array whenever
new letter sets are generated such that, their remaining value decreases by 1 when a letter
tile is generated. That is the farthest I was able to achieve, I did not get to implement a function
that checks the remaining values of tiles, such that only generate tiles with remaining values more than 0. I implemented three buttons, word!, new set, and new game. When word! is pressed, it saves the score created from the word on the board. New set generates a new set of 7 tiles,  and new game just starts the game all over again with updated zero current and total score. I created a retro scrabble theme for the program. Overall, I am somewhat satisfied with what I accomplished while also studying for finals. Obviously, I would've preffered to fully furnished the program and make it a better functioning game (which I might on my own time because I enjoyed this project and is beneficial for my skills and project list). Thank you and I hope you enjoy my game. 