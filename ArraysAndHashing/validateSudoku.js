/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowSet = {};
    let colSet = {};
    let squareSet = {};
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let element = board[i][j];
            if (element === '.') {
                continue;
            }
            
            let r = parseInt(i/3);
            let c = parseInt(j/3);
            if (!rowSet[i]) {
                rowSet[i] = new Set();
            }
            if (!colSet[j]) {
                colSet[j] = new Set();
            }
            if (!squareSet[r + ',' + c]) {
                squareSet[r + ',' + c] = new Set();
            }
            
            if ( 
                rowSet[i].has(element) 
                || 
                colSet[j].has(element) 
                || 
                squareSet[r + ',' + c].has(element)
                ) {
                return false;
            }
            
            rowSet[i].add(element);
            colSet[j].add(element);
            squareSet[r + ',' + c].add(element);
            
        }
        //console.log('rowSet: ', rowSet);
        //console.log('colSet: ', colSet);
        //console.log('squareSet: ', squareSet);
    }
    return true;
    
}