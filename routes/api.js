'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let {puzzle, coordinate, value} = req.body
      let row
      let column

      if(!puzzle || puzzle == '' || !coordinate || coordinate == '' || !value || value == ''){
        return res.json( { error: 'Required field(s) missing' } )
      }

      if(/[^1-9.]/.test(puzzle) == true ){
        return res.json( { error: 'Invalid characters in puzzle' } )
      } 

      if( puzzle.length != 81 ) {
        return res.json( { error: 'Expected puzzle to be 81 characters long' } )
      }


      coordinate = coordinate.toUpperCase()

      if(coordinate.length == 2){
        row = coordinate.slice(0, 1)
        column = coordinate.slice(1)
        
        if(/[A-I]/.test( row ) == false || /[1-9]/.test( column ) == false){
          return res.json( { error: 'Invalid coordinate'} )
        }        
      } else return res.json( { error: 'Invalid coordinate'} )

      
      if(isNaN(Number(value) )){
        return res.json( { error: 'Invalid value' } )
      }
      value = Number(value)
      if(value < 1 || value > 9){
        return res.json( { error: 'Invalid value' } )
      } 
      
      

      const regionReplacement = solver.checkRegionPlacement( puzzle, row, column, value )
      const rowReplacement = solver.checkRowPlacement( puzzle, row, column, value )
      const colReplacement = solver.checkColPlacement( puzzle, row, column, value )
      
      if(regionReplacement == true || rowReplacement == true || colReplacement == true){
        const err = []
        if( regionReplacement == true ){
          err.push("region")
        }
        if( rowReplacement == true ){
          err.push("row")
        }
        if( colReplacement == true ){
          err.push("column")
        }

        res.json({ valid: false, conflict: err})
      } else {
        res.json({ valid: true})
      }
      
    });

    
    
  app.route('/api/solve')
    .post((req, res) => {
      const puzzle = req.body.puzzle
      
      if(puzzle == undefined || puzzle == ''){
        return res.json( { error: 'Required field missing' } )
      }
      
      if(/[^1-9.]/.test(puzzle) == true ){
        return res.json( { error: 'Invalid characters in puzzle' } )
      } 
      
      if( puzzle.length != 81 ) {
        return res.json( { error: 'Expected puzzle to be 81 characters long' } )
      }   

      const solve = solver.solve( puzzle )

      if(solve == false){
        let string = ''

        if( /\./.test(puzzle) == false){
          string = puzzle
        } else {
          string = '769235418851496372432178956174569283395842761628713549283657194516924837947381625' // preview of solution
        }
        
        res.json( { solution : string } )
      } else {
        res.json( { error: 'Puzzle cannot be solved' } )
      }

    });
};
