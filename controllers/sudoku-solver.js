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
    const row1 = []
    const row2 = []
    const row3 = []
    const row4 = []
    const row5 = []
    const row6 = []
    const row7 = []
    const row8 = []
    const row9 = []

    let stringCount = 0
    
    const A2I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i=0; i < A2I.length; i++ ){

      for(let y=0; y < 9; y++){

        console.log( puzzleString[stringCount] )
        stringCount++


        if( A2I[i] == 'A'){
          row1.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'B'){
          row2.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'C'){
          row3.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'D'){
          row4.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'E'){
          row5.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'F'){
          row6.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'G'){
          row7.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'H'){
          row8.push( puzzleString[stringCount] )
        } else if( A2I[i] == 'I'){
          row9.push( puzzleString[stringCount] )
        }

      }

    }

    console.log('row1 '+ row1)
    console.log('row2 '+ row2)
    console.log('row3 '+ row3)
    console.log('row4 '+ row4)
    console.log('row5 '+ row5)
    console.log('row6 '+ row6)
    console.log('row7 '+ row7)
    console.log('row8 '+ row8)
    console.log('row9 '+ row9)

  }
}

module.exports = SudokuSolver;

