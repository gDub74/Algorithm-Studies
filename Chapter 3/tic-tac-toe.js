

var gameBoard = [['','',''],['','',''],['','','']]


//loop through array of arrays and check state 
//'x' then square belongs to player one if 'o' then square belongs to plyer two - else square is empty
//if three 0 or 1 or 2 indexes in the three sub-arrays belong to either player -- they win, game over
//if all three indexes in one sub-array are claimed by one player -- they win, game over
//if index 1,1 index 2,2 and 3,3 or 3,3 and 2,2 and 1,1 are all owned by one player -- they win game over
//else game on and player with fewer claimed squares turn is up

