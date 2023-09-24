class SudokuSolver {

  validate(puzzleString) {
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    /*
    for(let i=0; i < puzzleString.length; i++){
      console.log( puzzleString[i] )
    }
    */
    let stringCount = 0
    
    const A2I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i=0; i < A2I.length; i++ ){
      console.log(A2I[i])
      /*
      for(let y=0; y < 9; y++){

      }
      */

    }

  }
}

module.exports = SudokuSolver;

