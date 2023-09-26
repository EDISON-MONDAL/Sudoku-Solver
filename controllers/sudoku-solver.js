class SudokuSolver {

  validate(puzzleString) {
  }

  checkRowPlacement(puzzleString, row, column, values) {
    let value = values.toString()
    const columnIndexArr = column - 1

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

        stringCount++

      }
    }



    let invalidSudo = false

    // rows
    function checkInRow(row, column, value){
      if(row[column] != value){
        return row.includes( value )
      }            
    }

    // row 1 - A
    if( row == 'A'){
      if( checkInRow(row1, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }
    
    // row 2 - B
    if( row == 'B'){
      if( checkInRow(row2, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 3 - C
    if( row == 'C'){
      if( checkInRow(row3, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 4 - D
    if( row == 'D'){
      if( checkInRow(row4, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 5 - E
    if( row == 'E'){
      if( checkInRow(row5, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 6 - F
    if( row == 'F'){
      if( checkInRow(row6, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 7 - G
    if( row == 'G'){
      if( checkInRow(row7, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 8 - H
    if( row == 'H'){
      if( checkInRow(row8, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }

    // row 9 - I
    if( row == 'I'){
      if( checkInRow(row9, columnIndexArr, value) == true){
        invalidSudo = true;
      }
    }
    

    console.log('invalidSudo in row '+ invalidSudo)
    return invalidSudo
  }

  checkColPlacement(puzzleString, row, column, values) {
    let value = values.toString()
    const columnIndexArr = column - 1

    const row1 = []
    const row2 = []
    const row3 = []
    const row4 = []
    const row5 = []
    const row6 = []
    const row7 = []
    const row8 = []
    const row9 = []

    const column1 = []
    const column2 = []
    const column3 = []
    const column4 = []
    const column5 = []
    const column6 = []
    const column7 = []
    const column8 = []
    const column9 = []


    function putInColumn(y, string){
      if( y==0 ){
        column1.push( string )
      }else if( y==1 ){
        column2.push( string )
      }else if( y==2 ){
        column3.push( string )
      }else if( y==3 ){
        column4.push( string )
      }else if( y==4 ){
        column5.push( string )
      }else if( y==5 ){
        column6.push( string )
      }else if( y==6 ){
        column7.push( string )
      }else if( y==7 ){
        column8.push( string )
      }else if( y==8 ){
        column9.push( string )
      }

    }



    let stringCount = 0
    
    const A2I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i=0; i < A2I.length; i++ ){

      for(let y=0; y < 9; y++){

        if( A2I[i] == 'A'){
          row1.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])
          
        } else if( A2I[i] == 'B'){
          row2.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'C'){
          row3.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'D'){
          row4.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'E'){
          row5.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'F'){
          row6.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'G'){
          row7.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'H'){
          row8.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'I'){
          row9.push( puzzleString[stringCount] )

          // column
          putInColumn(y, puzzleString[stringCount])
        }

        stringCount++

      }

    }



    let invalidSudo = false

    // columns
    function checkInColumn(row, index, column, value){ 
      if(row[index] != value){
        return column.includes( value )
      }
    }

    let rowInp = []

    if(row == 'A'){
      rowInp = row1
    } else if(row == 'B'){
      rowInp = row2
    } else if(row == 'C'){
      rowInp = row3
    } else if(row == 'D'){
      rowInp = row4
    } else if(row == 'E'){
      rowInp = row5
    } else if(row == 'F'){
      rowInp = row6
    } else if(row == 'G'){
      rowInp = row7
    } else if(row == 'H'){
      rowInp = row8
    } else if(row == 'I'){
      rowInp = row9
    }


    // column 1
    if( column == 1){
      if( checkInColumn(rowInp, columnIndexArr, column1, value) == true){
        invalidSudo = true;
      }
    }
    // column 2
    if( column == 2){
      if( checkInColumn(rowInp, columnIndexArr, column2, value) == true){
        invalidSudo = true;
      }
    }
    // column 3
    if( column == 3){
      if( checkInColumn(rowInp, columnIndexArr, column3, value) == true){
        invalidSudo = true;
      }
    }
    // column 4
    if( column == 4){
      if( checkInColumn(rowInp, columnIndexArr, column4, value) == true){
        invalidSudo = true;
      }
    }
    // column 5
    if( column == 5){
      if( checkInColumn(rowInp, columnIndexArr, column5, value) == true){
        invalidSudo = true;
      }
    }
    // column 6
    if( column == 6){
      if( checkInColumn(rowInp, columnIndexArr, column6, value) == true){
        invalidSudo = true;
      }
    }
    // column 7
    if( column == 7){
      if( checkInColumn(rowInp, columnIndexArr, column7, value) == true){
        invalidSudo = true;
      }
    }
    // column 8
    if( column == 8){
      if( checkInColumn(rowInp, columnIndexArr, column8, value) == true){
        invalidSudo = true;
      }
    }
    // column 9
    if( column == 9){
      if( checkInColumn(rowInp, columnIndexArr, column9, value) == true){
        invalidSudo = true;
      }
    }
    
    console.log('invalidSudo in column '+ invalidSudo)
    return invalidSudo
  }

  checkRegionPlacement(puzzleString, row, column, values) {
    let value = values.toString()
    const columnIndexArr = column - 1

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


    let rowInp = []

    if(row == 'A'){
      rowInp = row1
    } else if(row == 'B'){
      rowInp = row2
    } else if(row == 'C'){
      rowInp = row3
    } else if(row == 'D'){
      rowInp = row4
    } else if(row == 'E'){
      rowInp = row5
    } else if(row == 'F'){
      rowInp = row6
    } else if(row == 'G'){
      rowInp = row7
    } else if(row == 'H'){
      rowInp = row8
    } else if(row == 'I'){
      rowInp = row9
    }


    let invalidSudo = false

    // check validation
      // qube1
      if( (row == 'A' || row == 'B' || row == 'C') && ( column == 1 || column == 2 || column == 3) && rowInp[columnIndexArr] != value ){ 
        if( qube1st[0].includes( value ) == true ){ invalidSudo = true }
        if( qube1st[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube1st[2].includes( value ) == true ){ invalidSudo = true }        
        
      }

      // qube2
      if( (row == 'A' || row == 'B' || row == 'C') && ( column == 4 || column == 5 || column == 6) && rowInp[columnIndexArr] != value ){
        if( qube2nd[0].includes( value ) == true ){ invalidSudo = true }
        if( qube2nd[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube2nd[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube3
      if( (row == 'A' || row == 'B' || row == 'C') && ( column == 7 || column == 8 || column == 9) && rowInp[columnIndexArr] != value ){
        if( qube3rd[0].includes( value ) == true ){ invalidSudo = true }
        if( qube3rd[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube3rd[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube4
      if( (row == 'D' || row == 'E' || row == 'F') && ( column == 1 || column == 2 || column == 3) && rowInp[columnIndexArr] != value ){
        if( qube4th[0].includes( value ) == true ){ invalidSudo = true }
        if( qube4th[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube4th[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube5
      if( (row == 'D' || row == 'E' || row == 'F') && ( column == 4 || column == 5 || column == 6) && rowInp[columnIndexArr] != value ){
        if( qube5th[0].includes( value ) == true ){ invalidSudo = true }
        if( qube5th[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube5th[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube6
      if( (row == 'D' || row == 'E' || row == 'F') && ( column == 7 || column == 8 || column == 9) && rowInp[columnIndexArr] != value ){
        if( qube6th[0].includes( value ) == true ){ invalidSudo = true }
        if( qube6th[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube6th[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube7
      if( (row == 'G' || row == 'H' || row == 'I') && ( column == 1 || column == 2 || column == 3) && rowInp[columnIndexArr] != value ){
        if( qube7th[0].includes( value ) == true ){ invalidSudo = true }
        if( qube7th[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube7th[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube8
      if( (row == 'G' || row == 'H' || row == 'I') && ( column == 4 || column == 5 || column == 6) && rowInp[columnIndexArr] != value ){
        if( qube8th[0].includes( value ) == true ){ invalidSudo = true }
        if( qube8th[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube8th[2].includes( value ) == true ){ invalidSudo = true } 
      }

      // qube9
      if( (row == 'G' || row == 'H' || row == 'I') && ( column == 7 || column == 8 || column == 9) && rowInp[columnIndexArr] != value ){
        if( qube9th[0].includes( value ) == true ){ invalidSudo = true }
        if( qube9th[1].includes( value ) == true ){ invalidSudo = true }           
        if( qube9th[2].includes( value ) == true ){ invalidSudo = true } 
      }

      /*
      console.log('qube1st '+ qube1st[0]+' / '+qube1st[1]+' / '+qube1st[2])
      console.log('qube2nd '+ qube2nd[0]+' / '+qube2nd[1]+' / '+qube2nd[2])
      console.log('qube3rd '+ qube3rd[0]+' / '+qube3rd[1]+' / '+qube3rd[2])

      console.log('qube4th '+ qube4th[0]+' / '+qube4th[1]+' / '+qube4th[2])
      console.log('qube5th '+ qube5th[0]+' / '+qube5th[1]+' / '+qube5th[2])
      console.log('qube6th '+ qube6th[0]+' / '+qube6th[1]+' / '+qube6th[2])

      console.log('qube7th '+ qube7th[0]+' / '+qube7th[1]+' / '+qube7th[2])
      console.log('qube8th '+ qube8th[0]+' / '+qube8th[1]+' / '+qube8th[2])
      console.log('qube9th '+ qube9th[0]+' / '+qube9th[1]+' / '+qube9th[2])
      */
      console.log('invalidSudo region '+ invalidSudo)
      return invalidSudo
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

    const column1 = []
    const column2 = []
    const column3 = []
    const column4 = []
    const column5 = []
    const column6 = []
    const column7 = []
    const column8 = []
    const column9 = []


    function putInColumn(y, string){
      if( y==0 ){
        column1.push( string )
      }else if( y==1 ){
        column2.push( string )
      }else if( y==2 ){
        column3.push( string )
      }else if( y==3 ){
        column4.push( string )
      }else if( y==4 ){
        column5.push( string )
      }else if( y==5 ){
        column6.push( string )
      }else if( y==6 ){
        column7.push( string )
      }else if( y==7 ){
        column8.push( string )
      }else if( y==8 ){
        column9.push( string )
      }

    }



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

          // column
          putInColumn(y, puzzleString[stringCount])
          
        } else if( A2I[i] == 'B'){
          row2.push( puzzleString[stringCount] )

          // qube 1 - row 2
          if( y==0 || y==1 || y==2 ){ qube1st[1].push( puzzleString[stringCount] ) }
          // qube 2 - row 2
          if( y==3 || y==4 || y==5 ){ qube2nd[1].push( puzzleString[stringCount] ) }
          // qube 3 - row 2
          if( y==6 || y==7 || y==8 ){ qube3rd[1].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'C'){
          row3.push( puzzleString[stringCount] )

          // qube 1 - row 3
          if( y==0 || y==1 || y==2 ){ qube1st[2].push( puzzleString[stringCount] ) }
          // qube 2 - row 3
          if( y==3 || y==4 || y==5 ){ qube2nd[2].push( puzzleString[stringCount] ) }
          // qube 3 - row 3
          if( y==6 || y==7 || y==8 ){ qube3rd[2].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'D'){
          row4.push( puzzleString[stringCount] )

          // qube 4 - row 1
          if( y==0 || y==1 || y==2 ){ qube4th[0].push( puzzleString[stringCount] ) }
          // qube 5 - row 1
          if( y==3 || y==4 || y==5 ){ qube5th[0].push( puzzleString[stringCount] ) }
          // qube 6 - row 1
          if( y==6 || y==7 || y==8 ){ qube6th[0].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'E'){
          row5.push( puzzleString[stringCount] )

          // qube 4 - row 2
          if( y==0 || y==1 || y==2 ){ qube4th[1].push( puzzleString[stringCount] ) }
          // qube 5 - row 2
          if( y==3 || y==4 || y==5 ){ qube5th[1].push( puzzleString[stringCount] ) }
          // qube 6 - row 2
          if( y==6 || y==7 || y==8 ){ qube6th[1].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'F'){
          row6.push( puzzleString[stringCount] )

          // qube 4 - row 3
          if( y==0 || y==1 || y==2 ){ qube4th[2].push( puzzleString[stringCount] ) }
          // qube 5 - row 3
          if( y==3 || y==4 || y==5 ){ qube5th[2].push( puzzleString[stringCount] ) }
          // qube 6 - row 3
          if( y==6 || y==7 || y==8 ){ qube6th[2].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'G'){
          row7.push( puzzleString[stringCount] )

          // qube 7 - row 1
          if( y==0 || y==1 || y==2 ){ qube7th[0].push( puzzleString[stringCount] ) }
          // qube 8 - row 1
          if( y==3 || y==4 || y==5 ){ qube8th[0].push( puzzleString[stringCount] ) }
          // qube 9 - row 1
          if( y==6 || y==7 || y==8 ){ qube9th[0].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'H'){
          row8.push( puzzleString[stringCount] )

          // qube 7 - row 2
          if( y==0 || y==1 || y==2 ){ qube7th[1].push( puzzleString[stringCount] ) }
          // qube 8 - row 2
          if( y==3 || y==4 || y==5 ){ qube8th[1].push( puzzleString[stringCount] ) }
          // qube 9 - row 2
          if( y==6 || y==7 || y==8 ){ qube9th[1].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'I'){
          row9.push( puzzleString[stringCount] )

          // qube 7 - row 3
          if( y==0 || y==1 || y==2 ){ qube7th[2].push( puzzleString[stringCount] ) }
          // qube 8 - row 3
          if( y==3 || y==4 || y==5 ){ qube8th[2].push( puzzleString[stringCount] ) }
          // qube 9 - row 3
          if( y==6 || y==7 || y==8 ){ qube9th[2].push( puzzleString[stringCount] ) }

          // column
          putInColumn(y, puzzleString[stringCount])
        }

        stringCount++

      }

    }



    let invalidSudo = false

    // check validation
      // qube1
      for (let i=0; i < qube1st.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube1st[0][y] != '.'){
            if( qube1st[1].includes(qube1st[0][y]) == true ){ invalidSudo = true }
            if( qube1st[2].includes(qube1st[0][y]) == true ){ invalidSudo = true }
          }
          if(qube1st[1][y] != '.'){
            if( qube1st[2].includes(qube1st[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube2
      for (let i=0; i < qube2nd.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube2nd[0][y] != '.'){
            if( qube2nd[1].includes(qube2nd[0][y]) == true ){ invalidSudo = true }
            if( qube2nd[2].includes(qube2nd[0][y]) == true ){ invalidSudo = true }
          }
          if(qube2nd[1][y] != '.'){
            if( qube2nd[2].includes(qube2nd[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube3
      for (let i=0; i < qube3rd.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube3rd[0][y] != '.'){
            if( qube3rd[1].includes(qube3rd[0][y]) == true ){ invalidSudo = true }
            if( qube3rd[2].includes(qube3rd[0][y]) == true ){ invalidSudo = true }
          }
          if(qube3rd[1][y] != '.'){
            if( qube3rd[2].includes(qube3rd[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube4
      for (let i=0; i < qube4th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube4th[0][y] != '.'){
            if( qube4th[1].includes(qube4th[0][y]) == true ){ invalidSudo = true }
            if( qube4th[2].includes(qube4th[0][y]) == true ){ invalidSudo = true }
          }
          if(qube4th[1][y] != '.'){
            if( qube4th[2].includes(qube4th[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube5
      for (let i=0; i < qube5th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube5th[0][y] != '.'){
            if( qube5th[1].includes(qube5th[0][y]) == true ){ invalidSudo = true }
            if( qube5th[2].includes(qube5th[0][y]) == true ){ invalidSudo = true }
          }
          if(qube5th[1][y] != '.'){
            if( qube5th[2].includes(qube5th[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube6
      for (let i=0; i < qube6th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube6th[0][y] != '.'){
            if( qube6th[1].includes(qube6th[0][y]) == true ){ invalidSudo = true }
            if( qube6th[2].includes(qube6th[0][y]) == true ){ invalidSudo = true }
          }
          if(qube6th[1][y] != '.'){
            if( qube6th[2].includes(qube6th[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube7
      for (let i=0; i < qube7th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube7th[0][y] != '.'){
            if( qube7th[1].includes(qube7th[0][y]) == true ){ invalidSudo = true }
            if( qube7th[2].includes(qube7th[0][y]) == true ){ invalidSudo = true }
          }
          if(qube7th[1][y] != '.'){
            if( qube7th[2].includes(qube7th[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube8
      for (let i=0; i < qube8th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube8th[0][y] != '.'){
            if( qube8th[1].includes(qube8th[0][y]) == true ){ invalidSudo = true }
            if( qube8th[2].includes(qube8th[0][y]) == true ){ invalidSudo = true }
          }
          if(qube8th[1][y] != '.'){
            if( qube8th[2].includes(qube8th[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }

      // qube9
      for (let i=0; i < qube9th.length; i++ ){
        for(let y=0; y < 3; y++){

          if(qube9th[0][y] != '.'){
            if( qube9th[1].includes(qube9th[0][y]) == true ){ invalidSudo = true }
            if( qube9th[2].includes(qube9th[0][y]) == true ){ invalidSudo = true }
          }
          if(qube9th[1][y] != '.'){
            if( qube9th[2].includes(qube9th[1][y]) == true ){ invalidSudo = true }
          }          
        }
      }
    
    // rows
      function checkInRow(row){
        for(let i=0; i < row.length; i++){
          if(row[i] !== '.'){

            for(let y=0; y < row.length; y++){
              if( i!==y && row[i] == row[y]) {

                return true
              }
            }
          }
        }
      }

      // row 1 - A
      if( checkInRow(row1) == true){
        invalidSudo = true;
      }

      // row 2 - B
      if( checkInRow(row2) == true){
        invalidSudo = true;
      }

      // row 3 - C
      if( checkInRow(row3) == true){
        invalidSudo = true;
      }

      // row 4 - D
      if( checkInRow(row4) == true){
        invalidSudo = true;
      }

      // row 5 - E
      if( checkInRow(row5) == true){
        invalidSudo = true;
      }

      // row 6 - F
      if( checkInRow(row6) == true){
        invalidSudo = true;
      }

      // row 7 - G
      if( checkInRow(row7) == true){
        invalidSudo = true;
      }

      // row 8 - H
      if( checkInRow(row8) == true){
        invalidSudo = true;
      }

      // row 9 - I
      if( checkInRow(row9) == true){
        invalidSudo = true;
      }

    // columns
      function checkInColumn(column){
        for(let i=0; i < column.length; i++){
          if(column[i] !== '.'){

            for(let y=0; y < column.length; y++){
              if( i!==y && column[i] == column[y]) {

                return true
              }
            }
          }
        }
      }

      // column 1
      if( checkInColumn(column1) == true){
        invalidSudo = true;
      }
      // column 2
      if( checkInColumn(column2) == true){
        invalidSudo = true;
      }
      // column 3
      if( checkInColumn(column3) == true){
        invalidSudo = true;
      }
      // column 4
      if( checkInColumn(column4) == true){
        invalidSudo = true;
      }
      // column 5
      if( checkInColumn(column5) == true){
        invalidSudo = true;
      }
      // column 6
      if( checkInColumn(column6) == true){
        invalidSudo = true;
      }
      // column 7
      if( checkInColumn(column7) == true){
        invalidSudo = true;
      }
      // column 8
      if( checkInColumn(column8) == true){
        invalidSudo = true;
      }
      // column 9
      if( checkInColumn(column9) == true){
        invalidSudo = true;
      }
      
    
      
    
    /*
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

    console.log('column1 '+ column1)
    console.log('column2 '+ column2)
    console.log('column3 '+ column3)
    console.log('column4 '+ column4)
    console.log('column5 '+ column5)
    console.log('column6 '+ column6)
    console.log('column7 '+ column7)
    console.log('column8 '+ column8)
    console.log('column9 '+ column9)
    

    if(invalidSudo == true){
      console.log('invalid sudoku')
    }
    */

    
    return invalidSudo
    // 769235418851496372432178956174569283395842761628713549283657194516924837947381625
    
  }
}

module.exports = SudokuSolver;

