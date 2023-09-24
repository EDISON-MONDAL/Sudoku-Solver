'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let {puzzle, coordinate, value} = req.body

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
        const character = coordinate.slice(0, 1)
        const letter = coordinate.slice(1)
        
        if(/[A-I]/.test(character) == false || /[1-9]/.test(letter) == false){
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
      
      

      console.log(coordinate)
      console.log(value)
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

    });
};
