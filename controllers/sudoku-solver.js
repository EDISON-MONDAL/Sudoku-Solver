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

    const qube1st = [
      [],
      [],
      []
    ]
    const qube2nd = [
      [],
      [],
      []
    ]
    const qube3rd = [
      [],
      [],
      []
    ]

    const qube4th = [
      [],
      [],
      []
    ]
    const qube5th = [
      [],
      [],
      []
    ]
    const qube6th = [
      [],
      [],
      []
    ]

    const qube7th = [
      [],
      [],
      []
    ]
    const qube8th = [
      [],
      [],
      []
    ]
    const qube9th = [
      [],
      [],
      []
    ]


    let stringCount = 0
    
    const A2I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i=0; i < A2I.length; i++ ){

      for(let y=0; y < 9; y++){

        if( A2I[i] == 'A'){
          row1.push( puzzleString[stringCount] )
          // qube 1 - row 1
          if( y==0 || y==1 || y==2 ){ qube1st[0].push( puzzleString[stringCount] ) }
          // qube 2 - row 1
          if( y==3 || y==4 || y==5 ){ qube2nd[0].push( puzzleString[stringCount] ) }
          // qube 3 - row 1
          if( y==6 || y==7 || y==8 ){ qube3rd[0].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'B'){
          row2.push( puzzleString[stringCount] )
          // qube 1 - row 2
          if( y==0 || y==1 || y==2 ){ qube1st[1].push( puzzleString[stringCount] ) }
          // qube 2 - row 2
          if( y==3 || y==4 || y==5 ){ qube2nd[1].push( puzzleString[stringCount] ) }
          // qube 3 - row 2
          if( y==6 || y==7 || y==8 ){ qube3rd[1].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'C'){
          row3.push( puzzleString[stringCount] )
          // qube 1 - row 3
          if( y==0 || y==1 || y==2 ){ qube1st[2].push( puzzleString[stringCount] ) }
          // qube 2 - row 3
          if( y==3 || y==4 || y==5 ){ qube2nd[2].push( puzzleString[stringCount] ) }
          // qube 3 - row 3
          if( y==6 || y==7 || y==8 ){ qube3rd[2].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'D'){
          row4.push( puzzleString[stringCount] )
          // qube 4 - row 1
          if( y==0 || y==1 || y==2 ){ qube4th[0].push( puzzleString[stringCount] ) }
          // qube 5 - row 1
          if( y==3 || y==4 || y==5 ){ qube5th[0].push( puzzleString[stringCount] ) }
          // qube 6 - row 1
          if( y==6 || y==7 || y==8 ){ qube6th[0].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'E'){
          row5.push( puzzleString[stringCount] )
          // qube 4 - row 2
          if( y==0 || y==1 || y==2 ){ qube4th[1].push( puzzleString[stringCount] ) }
          // qube 5 - row 2
          if( y==3 || y==4 || y==5 ){ qube5th[1].push( puzzleString[stringCount] ) }
          // qube 6 - row 2
          if( y==6 || y==7 || y==8 ){ qube6th[1].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'F'){
          row6.push( puzzleString[stringCount] )
          // qube 4 - row 3
          if( y==0 || y==1 || y==2 ){ qube4th[2].push( puzzleString[stringCount] ) }
          // qube 5 - row 3
          if( y==3 || y==4 || y==5 ){ qube5th[2].push( puzzleString[stringCount] ) }
          // qube 6 - row 3
          if( y==6 || y==7 || y==8 ){ qube6th[2].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'G'){
          row7.push( puzzleString[stringCount] )
          // qube 7 - row 1
          if( y==0 || y==1 || y==2 ){ qube7th[0].push( puzzleString[stringCount] ) }
          // qube 8 - row 1
          if( y==3 || y==4 || y==5 ){ qube8th[0].push( puzzleString[stringCount] ) }
          // qube 9 - row 1
          if( y==6 || y==7 || y==8 ){ qube9th[0].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'H'){
          row8.push( puzzleString[stringCount] )
          // qube 7 - row 2
          if( y==0 || y==1 || y==2 ){ qube7th[1].push( puzzleString[stringCount] ) }
          // qube 8 - row 2
          if( y==3 || y==4 || y==5 ){ qube8th[1].push( puzzleString[stringCount] ) }
          // qube 9 - row 2
          if( y==6 || y==7 || y==8 ){ qube9th[1].push( puzzleString[stringCount] ) }
        } else if( A2I[i] == 'I'){
          row9.push( puzzleString[stringCount] )
          // qube 7 - row 3
          if( y==0 || y==1 || y==2 ){ qube7th[2].push( puzzleString[stringCount] ) }
          // qube 8 - row 3
          if( y==3 || y==4 || y==5 ){ qube8th[2].push( puzzleString[stringCount] ) }
          // qube 9 - row 3
          if( y==6 || y==7 || y==8 ){ qube9th[2].push( puzzleString[stringCount] ) }
        }

        stringCount++

      }

    }



    let invalidSudo = false
    let invalidRegion = false

    // check validation
      // qube1
      for (let i=0; i < qube1st.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube1st[0][y] != '.'){
            if( qube1st[1].includes(qube1st[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube1st[2].includes(qube1st[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube1st[1][y] != '.'){
            if( qube1st[2].includes(qube1st[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube2
      for (let i=0; i < qube2nd.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube2nd[0][y] != '.'){
            if( qube2nd[1].includes(qube2nd[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube2nd[2].includes(qube2nd[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube2nd[1][y] != '.'){
            if( qube2nd[2].includes(qube2nd[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube3
      for (let i=0; i < qube3rd.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube3rd[0][y] != '.'){
            if( qube3rd[1].includes(qube3rd[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube3rd[2].includes(qube3rd[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube3rd[1][y] != '.'){
            if( qube3rd[2].includes(qube3rd[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube4
      for (let i=0; i < qube4th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube4th[0][y] != '.'){
            if( qube4th[1].includes(qube4th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube4th[2].includes(qube4th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube4th[1][y] != '.'){
            if( qube4th[2].includes(qube4th[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube5
      for (let i=0; i < qube5th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube5th[0][y] != '.'){
            if( qube5th[1].includes(qube5th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube5th[2].includes(qube5th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube5th[1][y] != '.'){
            if( qube5th[2].includes(qube5th[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube6
      for (let i=0; i < qube6th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube6th[0][y] != '.'){
            if( qube6th[1].includes(qube6th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube6th[2].includes(qube6th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube6th[1][y] != '.'){
            if( qube6th[2].includes(qube6th[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube7
      for (let i=0; i < qube7th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube7th[0][y] != '.'){
            if( qube7th[1].includes(qube7th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube7th[2].includes(qube7th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube7th[1][y] != '.'){
            if( qube7th[2].includes(qube7th[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube8
      for (let i=0; i < qube8th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube8th[0][y] != '.'){
            if( qube8th[1].includes(qube8th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube8th[2].includes(qube8th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube8th[1][y] != '.'){
            if( qube8th[2].includes(qube8th[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }

      // qube9
      for (let i=0; i < qube9th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube9th[0][y] != '.'){
            if( qube9th[1].includes(qube9th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
            if( qube9th[2].includes(qube9th[0][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }
          if(qube9th[1][y] != '.'){
            if( qube9th[2].includes(qube9th[1][y]) == true ){ invalidSudo = true; invalidRegion = true; }
          }          
        }
      }
    
    // rows
    let invalidRow = false

      // row 1
      for(let i=0; i < row1.length; i++){
        if(row1[i] !== '.'){

          for(let y=0; y < row1.length; y++){
            if( i!==y && row1[i] == row1[y]) {

              invalidSudo = true; 
              invalidRow = true;
            }
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
    
    console.log('qube1st '+ qube1st[0]+' / '+qube1st[1]+' / '+qube1st[2])
    console.log('qube2nd '+ qube2nd[0]+' / '+qube2nd[1]+' / '+qube2nd[2])
    console.log('qube3rd '+ qube3rd[0]+' / '+qube3rd[1]+' / '+qube3rd[2])

    console.log('qube4th '+ qube4th[0]+' / '+qube4th[1]+' / '+qube4th[2])
    console.log('qube5th '+ qube5th[0]+' / '+qube5th[1]+' / '+qube5th[2])
    console.log('qube6th '+ qube6th[0]+' / '+qube6th[1]+' / '+qube6th[2])

    console.log('qube7th '+ qube7th[0]+' / '+qube7th[1]+' / '+qube7th[2])
    console.log('qube8th '+ qube8th[0]+' / '+qube8th[1]+' / '+qube8th[2])
    console.log('qube9th '+ qube9th[0]+' / '+qube9th[1]+' / '+qube9th[2])

    if(invalidSudo == true){
      console.log('invalid sudoku')
    }
    
  }
}

module.exports = SudokuSolver;

