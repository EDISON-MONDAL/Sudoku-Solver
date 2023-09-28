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
      /*
      if(row[column] != value){ console.log('jjjjjjjj '+ row+' col '+ row[column]+ ' val '+ value)
        return row.includes( value )
      }
      */
      const match = []
      for(let i=0; i < row.length; i++){
        if( row[i] == value){
          match.push( value )
        }
      }  
      // console.log('match length '+ match.length)
      
      if(match.length > 1){
        return true
      } else if (match.length == 1 && row[column] != value){ 
        return true
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
    

    // console.log('invalidSudo in row '+ invalidSudo)
    return invalidSudo
  }

  checkRowPlacementInverse(puzzleString, row, column, values) {
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
      /*
      if(row[column] != value){ console.log('jjjjjjjj '+ row+' col '+ row[column]+ ' val '+ value)
        return row.includes( value )
      }
      */
      const match = []
      for(let i=0; i < row.length; i++){
        if( row[i] == value){
          match.push( value )
        }
      }  
      // console.log('match length '+ match.length)
      
      if(match.length > 1){
        return true
      } else if (match.length == 1 && row[column] != value){ 
        return true
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
    

    // console.log('invalidSudo in row '+ invalidSudo)
    return invalidSudo
  }

  checkColPlacement(puzzleString, row, column, values) {
    let value = values.toString()

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
          // column
          putInColumn(y, puzzleString[stringCount])
          
        } else if( A2I[i] == 'B'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'C'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'D'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'E'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'F'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'G'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'H'){
          // column
          putInColumn(y, puzzleString[stringCount])

        } else if( A2I[i] == 'I'){
          // column
          putInColumn(y, puzzleString[stringCount])
        }

        stringCount++

      }

    }



    let invalidSudo = false

    //console.log('column one '+ column1)

    // columns
    function checkInColumn(row, column, value){ 
      
      const match = []
      for(let i=0; i < column.length; i++){
        if( column[i] == value){
          match.push( value )
        }
      }  
      //console.log('match length column '+ match.length)
      
      if(match.length > 1){
        return true
      } else if (match.length == 1 && column[row] != value){
        return true
      }
    }


    let rowInp

    if(row == 'A'){
      rowInp = 0
    } else if(row == 'B'){
      rowInp = 1
    } else if(row == 'C'){
      rowInp = 2
    } else if(row == 'D'){
      rowInp = 3
    } else if(row == 'E'){
      rowInp = 4
    } else if(row == 'F'){
      rowInp = 5
    } else if(row == 'G'){
      rowInp = 6
    } else if(row == 'H'){
      rowInp = 7
    } else if(row == 'I'){
      rowInp = 8
    }


    // column 1
    if( column == 1){
      if( checkInColumn(rowInp, column1, value) == true){
        invalidSudo = true;
      }
    }
    // column 2
    if( column == 2){
      if( checkInColumn(rowInp, column2, value) == true){
        invalidSudo = true;
      }
    }
    // column 3
    if( column == 3){
      if( checkInColumn(rowInp, column3, value) == true){
        invalidSudo = true;
      }
    }
    // column 4
    if( column == 4){
      if( checkInColumn(rowInp, column4, value) == true){
        invalidSudo = true;
      }
    }
    // column 5
    if( column == 5){
      if( checkInColumn(rowInp, column5, value) == true){
        invalidSudo = true;
      }
    }
    // column 6
    if( column == 6){
      if( checkInColumn(rowInp, column6, value) == true){
        invalidSudo = true;
      }
    }
    // column 7
    if( column == 7){
      if( checkInColumn(rowInp, column7, value) == true){
        invalidSudo = true;
      }
    }
    // column 8
    if( column == 8){
      if( checkInColumn(rowInp, column8, value) == true){
        invalidSudo = true;
      }
    }
    // column 9
    if( column == 9){
      if( checkInColumn(rowInp, column9, value) == true){
        invalidSudo = true;
      }
    }
    
    //console.log('invalidSudo in column '+ invalidSudo)
    return invalidSudo
  }



  checkRegionPlacement(puzzleString, row, column, values) {
    let value = values.toString()

    
    const qube1st = []
    const qube2nd = []
    const qube3rd = []

    const qube4th = []
    const qube5th = []
    const qube6th = []

    const qube7th = []
    const qube8th = []
    const qube9th = []

    let stringCount = 0
    
    const A2I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i=0; i < A2I.length; i++ ){

      for(let y=0; y < 9; y++){

        if( A2I[i] == 'A'){
          // qube 1 - row 1
          if( y==0 || y==1 || y==2 ){ qube1st.push( puzzleString[stringCount] ) }
          // qube 2 - row 1
          if( y==3 || y==4 || y==5 ){ qube2nd.push( puzzleString[stringCount] ) }
          // qube 3 - row 1
          if( y==6 || y==7 || y==8 ){ qube3rd.push( puzzleString[stringCount] ) }
          
        } else if( A2I[i] == 'B'){
          // qube 1 - row 2
          if( y==0 || y==1 || y==2 ){ qube1st.push( puzzleString[stringCount] ) }
          // qube 2 - row 2
          if( y==3 || y==4 || y==5 ){ qube2nd.push( puzzleString[stringCount] ) }
          // qube 3 - row 2
          if( y==6 || y==7 || y==8 ){ qube3rd.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'C'){
          // qube 1 - row 3
          if( y==0 || y==1 || y==2 ){ qube1st.push( puzzleString[stringCount] ) }
          // qube 2 - row 3
          if( y==3 || y==4 || y==5 ){ qube2nd.push( puzzleString[stringCount] ) }
          // qube 3 - row 3
          if( y==6 || y==7 || y==8 ){ qube3rd.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'D'){
          // qube 4 - row 1
          if( y==0 || y==1 || y==2 ){ qube4th.push( puzzleString[stringCount] ) }
          // qube 5 - row 1
          if( y==3 || y==4 || y==5 ){ qube5th.push( puzzleString[stringCount] ) }
          // qube 6 - row 1
          if( y==6 || y==7 || y==8 ){ qube6th.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'E'){
          // qube 4 - row 2
          if( y==0 || y==1 || y==2 ){ qube4th.push( puzzleString[stringCount] ) }
          // qube 5 - row 2
          if( y==3 || y==4 || y==5 ){ qube5th.push( puzzleString[stringCount] ) }
          // qube 6 - row 2
          if( y==6 || y==7 || y==8 ){ qube6th.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'F'){
          // qube 4 - row 3
          if( y==0 || y==1 || y==2 ){ qube4th.push( puzzleString[stringCount] ) }
          // qube 5 - row 3
          if( y==3 || y==4 || y==5 ){ qube5th.push( puzzleString[stringCount] ) }
          // qube 6 - row 3
          if( y==6 || y==7 || y==8 ){ qube6th.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'G'){
          // qube 7 - row 1
          if( y==0 || y==1 || y==2 ){ qube7th.push( puzzleString[stringCount] ) }
          // qube 8 - row 1
          if( y==3 || y==4 || y==5 ){ qube8th.push( puzzleString[stringCount] ) }
          // qube 9 - row 1
          if( y==6 || y==7 || y==8 ){ qube9th.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'H'){
          // qube 7 - row 2
          if( y==0 || y==1 || y==2 ){ qube7th.push( puzzleString[stringCount] ) }
          // qube 8 - row 2
          if( y==3 || y==4 || y==5 ){ qube8th.push( puzzleString[stringCount] ) }
          // qube 9 - row 2
          if( y==6 || y==7 || y==8 ){ qube9th.push( puzzleString[stringCount] ) }

        } else if( A2I[i] == 'I'){
          // qube 7 - row 3
          if( y==0 || y==1 || y==2 ){ qube7th.push( puzzleString[stringCount] ) }
          // qube 8 - row 3
          if( y==3 || y==4 || y==5 ){ qube8th.push( puzzleString[stringCount] ) }
          // qube 9 - row 3
          if( y==6 || y==7 || y==8 ){ qube9th.push( puzzleString[stringCount] ) }
        }

        stringCount++

      }

    }

    
    let invalidSudo = false

    
    // check validation
      // qube1
      if( (row == 'A' || row == 'B' || row == 'C') && ( column == 1 || column == 2 || column == 3) ){ 
        
        let index = 0
        if( row == 'A' && column == 1 ){
          index = 0
        } else if( row == 'A' && column == 2 ){
          index = 1
        } else if( row == 'A' && column == 3 ){
          index = 2
        } else if( row == 'B' && column == 1 ){
          index = 3
        } else if( row == 'B' && column == 2 ){
          index = 4
        } else if( row == 'B' && column == 3 ){
          index = 5
        } else if( row == 'C' && column == 1 ){
          index = 6
        } else if( row == 'C' && column == 2 ){
          index = 7
        } else if( row == 'C' && column == 3 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube1st.length; i++){
          if( qube1st[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube1st '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube1st[index] != value){
          return true
        }
      }

      // qube2
      if( (row == 'A' || row == 'B' || row == 'C') && ( column == 4 || column == 5 || column == 6) ){
       
        let index = 0
        if( row == 'A' && column == 4 ){
          index = 0
        } else if( row == 'A' && column == 5 ){
          index = 1
        } else if( row == 'A' && column == 6 ){
          index = 2
        } else if( row == 'B' && column == 4 ){
          index = 3
        } else if( row == 'B' && column == 5 ){
          index = 4
        } else if( row == 'B' && column == 6 ){
          index = 5
        } else if( row == 'C' && column == 4 ){
          index = 6
        } else if( row == 'C' && column == 5 ){
          index = 7
        } else if( row == 'C' && column == 6 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube2nd.length; i++){
          if( qube2nd[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube2nd '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube2nd[index] != value){
          return true
        }
      }

      // qube3
      if( (row == 'A' || row == 'B' || row == 'C') && ( column == 7 || column == 8 || column == 9) ){
        let index = 0
        if( row == 'A' && column == 7 ){
          index = 0
        } else if( row == 'A' && column == 8 ){
          index = 1
        } else if( row == 'A' && column == 9 ){
          index = 2
        } else if( row == 'B' && column == 7 ){
          index = 3
        } else if( row == 'B' && column == 8 ){
          index = 4
        } else if( row == 'B' && column == 9 ){
          index = 5
        } else if( row == 'C' && column == 7 ){
          index = 6
        } else if( row == 'C' && column == 8 ){
          index = 7
        } else if( row == 'C' && column == 9 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube3rd.length; i++){
          if( qube3rd[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube3rd '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube3rd[index] != value){
          return true
        }
      }

      // qube4
      if( (row == 'D' || row == 'E' || row == 'F') && ( column == 1 || column == 2 || column == 3) ){
        
        let index = 0
        if( row == 'D' && column == 1 ){
          index = 0
        } else if( row == 'D' && column == 2 ){
          index = 1
        } else if( row == 'D' && column == 3 ){
          index = 2
        } else if( row == 'E' && column == 1 ){
          index = 3
        } else if( row == 'E' && column == 2 ){
          index = 4
        } else if( row == 'E' && column == 3 ){
          index = 5
        } else if( row == 'F' && column == 1 ){
          index = 6
        } else if( row == 'F' && column == 2 ){
          index = 7
        } else if( row == 'F' && column == 3 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube4th.length; i++){
          if( qube4th[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube4th '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube4th[index] != value){
          return true
        }
      }

      // qube5
      if( (row == 'D' || row == 'E' || row == 'F') && ( column == 4 || column == 5 || column == 6) ){
        
        let index = 0
        if( row == 'D' && column == 4 ){
          index = 0
        } else if( row == 'D' && column == 5 ){
          index = 1
        } else if( row == 'D' && column == 6 ){
          index = 2
        } else if( row == 'E' && column == 4 ){
          index = 3
        } else if( row == 'E' && column == 5 ){
          index = 4
        } else if( row == 'E' && column == 6 ){
          index = 5
        } else if( row == 'F' && column == 4 ){
          index = 6
        } else if( row == 'F' && column == 5 ){
          index = 7
        } else if( row == 'F' && column == 6 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube5th.length; i++){
          if( qube5th[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube5th '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube5th[index] != value){
          return true
        }
      }

      // qube6
      if( (row == 'D' || row == 'E' || row == 'F') && ( column == 7 || column == 8 || column == 9) ){
                 
        let index = 0
        if( row == 'D' && column == 7 ){
          index = 0
        } else if( row == 'D' && column == 8 ){
          index = 1
        } else if( row == 'D' && column == 9 ){
          index = 2
        } else if( row == 'E' && column == 7 ){
          index = 3
        } else if( row == 'E' && column == 8 ){
          index = 4
        } else if( row == 'E' && column == 9 ){
          index = 5
        } else if( row == 'F' && column == 7 ){
          index = 6
        } else if( row == 'F' && column == 8 ){
          index = 7
        } else if( row == 'F' && column == 9 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube6th.length; i++){
          if( qube6th[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube6th '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube6th[index] != value){
          return true
        }
      }

      // qube7
      if( (row == 'G' || row == 'H' || row == 'I') && ( column == 1 || column == 2 || column == 3) ){
                          
        let index = 0
        if( row == 'G' && column == 1 ){
          index = 0
        } else if( row == 'G' && column == 2 ){
          index = 1
        } else if( row == 'G' && column == 3 ){
          index = 2
        } else if( row == 'H' && column == 1 ){
          index = 3
        } else if( row == 'H' && column == 2 ){
          index = 4
        } else if( row == 'H' && column == 3 ){
          index = 5
        } else if( row == 'I' && column == 1 ){
          index = 6
        } else if( row == 'I' && column == 2 ){
          index = 7
        } else if( row == 'I' && column == 3 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube7th.length; i++){
          if( qube7th[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube7th '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube7th[index] != value){
          return true
        }
      }

      // qube8
      if( (row == 'G' || row == 'H' || row == 'I') && ( column == 4 || column == 5 || column == 6) ){
        
        let index = 0
        if( row == 'G' && column == 4 ){
          index = 0
        } else if( row == 'G' && column == 5 ){
          index = 1
        } else if( row == 'G' && column == 6 ){
          index = 2
        } else if( row == 'H' && column == 4 ){
          index = 3
        } else if( row == 'H' && column == 5 ){
          index = 4
        } else if( row == 'H' && column == 6 ){
          index = 5
        } else if( row == 'I' && column == 4 ){
          index = 6
        } else if( row == 'I' && column == 5 ){
          index = 7
        } else if( row == 'I' && column == 6 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube8th.length; i++){
          if( qube8th[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube8th '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube8th[index] != value){
          return true
        }
      }

      // qube9
      if( (row == 'G' || row == 'H' || row == 'I') && ( column == 7 || column == 8 || column == 9) ){
        
        let index = 0
        if( row == 'G' && column == 7 ){
          index = 0
        } else if( row == 'G' && column == 8 ){
          index = 1
        } else if( row == 'G' && column == 9 ){
          index = 2
        } else if( row == 'H' && column == 7 ){
          index = 3
        } else if( row == 'H' && column == 8 ){
          index = 4
        } else if( row == 'H' && column == 9 ){
          index = 5
        } else if( row == 'I' && column == 7 ){
          index = 6
        } else if( row == 'I' && column == 8 ){
          index = 7
        } else if( row == 'I' && column == 9 ){
          index = 8
        }


        const match = []
        for(let i=0; i < qube9th.length; i++){
          if( qube9th[i] == value){
            match.push( value )
          }
        }  
        //console.log('match length qube9th '+ match.length)
        
        if(match.length > 1){
          return true
        } else if (match.length == 1 && qube9th[index] != value){
          return true
        }
      }

      
      //console.log('invalidSudo region '+ invalidSudo)
      return invalidSudo
  }


  solve(puzzleString) {
    let row1 = []
    let row2 = []
    let row3 = []
    let row4 = []
    let row5 = []
    let row6 = []
    let row7 = []
    let row8 = []
    let row9 = []


    function splitPuzzle(string){
      let stringCount = 0
      
      const A2I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
      for (let i=0; i < A2I.length; i++ ){

        for(let y=0; y < 9; y++){

          if( A2I[i] == 'A'){
            row1.push( string[stringCount] )
            
          } else if( A2I[i] == 'B'){
            row2.push( string[stringCount] )

          } else if( A2I[i] == 'C'){
            row3.push( string[stringCount] )

          } else if( A2I[i] == 'D'){
            row4.push( string[stringCount] )

          } else if( A2I[i] == 'E'){
            row5.push( string[stringCount] )

          } else if( A2I[i] == 'F'){
            row6.push( string[stringCount] )

          } else if( A2I[i] == 'G'){
            row7.push( string[stringCount] )

          } else if( A2I[i] == 'H'){
            row8.push( string[stringCount] )

          } else if( A2I[i] == 'I'){
            row9.push( string[stringCount] )
          }

          stringCount++

        }
      }
    }
    splitPuzzle( puzzleString )
    
    
    let fullString = ''
    let string2Submit = ''

    function allArray(){
      // Put all the arrays into an array
      const allRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

      // Join all the arrays into one string
      fullString = allRows.map(row => row.join("")).join("");
    }    



    let selectRow
    let reverseRow

    const rowName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for(let g=0; g < 2; g++){ // rowName.length   
      for(let i=0; i < 9; i++){

        allArray()
        
        row1 = []
        row2 = []
        row3 = []
        row4 = []
        row5 = []
        row6 = []
        row7 = []
        row8 = []
        row9 = []
        
        splitPuzzle( fullString )


        if(rowName[g] == 'A'){
          selectRow = row1
        } else if(rowName[g] == 'B'){
          selectRow = row2
        } else if(rowName[g] == 'C'){
          selectRow = row3
        } else if(rowName[g] == 'D'){
          selectRow = row4
        } else if(rowName[g] == 'E'){
          selectRow = row5
        } else if(rowName[g] == 'F'){
          selectRow = row6
        } else if(rowName[g] == 'G'){
          selectRow = row7
        } else if(rowName[g] == 'H'){
          selectRow = row8
        } else if(rowName[g] == 'I'){
          selectRow = row9
        }
  
        
        console.log('fullString '+ fullString)

        
        console.log('^^^^^^^^^^^^^ ' + selectRow[i])
        console.log('vvvvvvvvv ' + rowName[g])
        console.log(i+1 +' iiiiiiiiiiiii ')
        

        
        if( selectRow[i] != '.'){
          const checkInRow = this.checkRowPlacement(fullString, rowName[g], i+1, selectRow[i])
          const checkInCol = this.checkColPlacement(fullString, rowName[g], i+1, selectRow[i])
          const checkInRegion = this.checkRegionPlacement(fullString, rowName[g], i+1, selectRow[i])
          console.log('---------------- ' + checkInRow)
          console.log('>>>>>>>>>>>>>> ' + checkInCol)
          console.log('```````````` ' + checkInRegion)

          if(checkInRow == true || checkInCol == true || checkInRegion == true){
            console.log('invalid puzzle')
            return
          }   
        }
        else {
          for(let m=0; m < 9; m++){
            const checkInRow = this.checkRowPlacement(fullString, rowName[g], i+1, m+1)
            const checkInCol = this.checkColPlacement(fullString, rowName[g], i+1, m+1)
            const checkInRegion = this.checkRegionPlacement(fullString, rowName[g], i+1, m+1)
            /*
            if(i+1 == 8){
              console.log('b11111111 ' + checkInRow)
              console.log('b22222222 ' + checkInCol)
              console.log('b33333333 ' + checkInRegion)
            }
            */
            

            if(checkInRow == false && checkInCol == false && checkInRegion == false){
              console.log('added val ')
              console.log(m+1)
              
              selectRow[i] = m+1

              break           
            } 
          }        
        }
        

        

        // end of loop
        if( i+1 == 9){           
          if(selectRow.includes('.') == false){
            allArray()

            string2Submit = fullString

            if(rowName[g] == 'A'){
              row1 = selectRow
            } else if(rowName[g] == 'B'){
              row2 = selectRow
            } else if(rowName[g] == 'C'){
              row3 = selectRow
            } else if(rowName[g] == 'D'){
              row4 = selectRow
            } else if(rowName[g] == 'E'){
              row5 = selectRow
            } else if(rowName[g] == 'F'){
              row6 = selectRow
            } else if(rowName[g] == 'G'){
              row7 = selectRow
            } else if(rowName[g] == 'H'){
              row8 = selectRow
            } else if(rowName[g] == 'I'){
              row9 = selectRow
            }
          } else {
            console.log('second rowwwwwwwwwww')

            fullString = string2Submit

            // reverseLoop( rowName[g] )
            for(let v=9; v > 0; v--){ console.log(v-1 + ' iteration ')
        
              allArray()
              
              row1 = []
              row2 = []
              row3 = []
              row4 = []
              row5 = []
              row6 = []
              row7 = []
              row8 = []
              row9 = []
              
              splitPuzzle( fullString )
              
                      
              if(rowName[g] == 'A'){
                selectRow = row1
              } else if(rowName[g] == 'B'){
                selectRow = row2
              } else if(rowName[g] == 'C'){
                selectRow = row3
              } else if(rowName[g] == 'D'){
                selectRow = row4
              } else if(rowName[g] == 'E'){
                selectRow = row5
              } else if(rowName[g] == 'F'){
                selectRow = row6
              } else if(rowName[g] == 'G'){
                selectRow = row7
              } else if(rowName[g] == 'H'){
                selectRow = row8
              } else if(rowName[g] == 'I'){
                selectRow = row9
              }
              
        
              //console.log('fullString '+ fullString)
              
              console.log('reverse looooooop')
              console.log('^^^^^^^^^^^^^ ' + selectRow[v-1])
              console.log('vvvvvvvvv ' + rowName[g])
              console.log(v-1 +' iiiiiiiiiiiii ')

              
              
              if( selectRow[v-1] != '.'){          
                const checkInRow = this.checkRowPlacement(fullString, rowName[g], v-1, selectRow[v-1])
                const checkInCol = this.checkColPlacement(fullString, rowName[g], v-1, selectRow[v-1])
                const checkInRegion = this.checkRegionPlacement(fullString, rowName[g], v-1, selectRow[v-1])
                console.log('reverse ---------------- ' + checkInRow)
                console.log('reverse >>>>>>>>>>>>>> ' + checkInCol)
                console.log('reverse ```````````` ' + checkInRegion)
                
                
                if(checkInRow == true || checkInCol == true || checkInRegion == true){
                  console.log('invalid puzzle')
                  return
                }   
                
              }
              else {
                
                for(let m=0; m < 9; m++){
                  const checkInRow = this.checkRowPlacement(fullString, rowName[g], v-1, m+1)
                  const checkInCol = this.checkColPlacement(fullString, rowName[g], v-1, m+1)
                  const checkInRegion = this.checkRegionPlacement(fullString, rowName[g], v-1, m+1)
        
                  
                    console.log('reverse b11111111 ' + checkInRow)
                    console.log('reverse b22222222 ' + checkInCol)
                    console.log('reverse b33333333 ' + checkInRegion)
                  
                  
        
                  if(checkInRow == false && checkInCol == false && checkInRegion == false){
                    console.log('added val ')
                    console.log(m+1)
                    
                    selectRow[v-1] = m+1
        
                    break           
                  } 
                } 
                      
              }
              
              
              
              /*
              // end of loop
              if( i+1 == 1){
                if(selectRow.includes('.') == false){
                  if(rowName[g] == 'A'){
                    row1 = selectRow
                  } else if(rowName[g] == 'B'){
                    row2 = selectRow
                  } else if(rowName[g] == 'C'){
                    row3 = selectRow
                  } else if(rowName[g] == 'D'){
                    row4 = selectRow
                  } else if(rowName[g] == 'E'){
                    row5 = selectRow
                  } else if(rowName[g] == 'F'){
                    row6 = selectRow
                  } else if(rowName[g] == 'G'){
                    row7 = selectRow
                  } else if(rowName[g] == 'H'){
                    row8 = selectRow
                  } else if(rowName[g] == 'I'){
                    row9 = selectRow
                  }
                }
              }
              */
            }

            console.log('updated row '+ selectRow )


          }
                    
        }
        
      }
    }

    
    console.log('return puzzzz '+ fullString )
    console.log('revurse puzzzzz '+ string2Submit )
    
    function reverseLoop( rowName ){       
      for(let i=9; i > 0; i--){ console.log(i-1 + ' iteration ')
        
        allArray()
        
        row1 = []
        row2 = []
        row3 = []
        row4 = []
        row5 = []
        row6 = []
        row7 = []
        row8 = []
        row9 = []
        
        splitPuzzle( string2Submit )
        
                
        if(rowName == 'A'){
          selectRow = row1
        } else if(rowName == 'B'){
          selectRow = row2
        } else if(rowName == 'C'){
          selectRow = row3
        } else if(rowName == 'D'){
          selectRow = row4
        } else if(rowName == 'E'){
          selectRow = row5
        } else if(rowName == 'F'){
          selectRow = row6
        } else if(rowName == 'G'){
          selectRow = row7
        } else if(rowName == 'H'){
          selectRow = row8
        } else if(rowName == 'I'){
          selectRow = row9
        }
        
  
        //console.log('fullString '+ fullString)
        
        console.log('reverse looooooop')
        console.log('^^^^^^^^^^^^^ ' + selectRow[i-1])
        console.log('vvvvvvvvv ' + rowName)
        console.log(i-1 +' iiiiiiiiiiiii ')

        
        
        if( selectRow[i-1] != '.'){          
          // const checkInRow = this.checkRowPlacement(fullString, rowName, i-1, selectRow[i-1])
          // const checkInCol = this.checkColPlacement(fullString, rowName, i-1, selectRow[i-1])
          // const checkInRegion = this.checkRegionPlacement(fullString, rowName, i-1, selectRow[i-1])
          // console.log('reverse ---------------- ' + checkInRow)
          // console.log('reverse >>>>>>>>>>>>>> ' + checkInCol)
          // console.log('reverse ```````````` ' + checkInRegion)
          
          /*
          if(checkInRow == true || checkInCol == true || checkInRegion == true){
            console.log('invalid puzzle')
            return
          }   
          */
        }
        else {
          /*
          for(let m=0; m < 9; m++){
            const checkInRow = this.checkRowPlacement(fullString, rowName, i-1, m+1)
            const checkInCol = this.checkColPlacement(fullString, rowName, i-1, m+1)
            const checkInRegion = this.checkRegionPlacement(fullString, rowName, i-1, m+1)
  
            
              console.log('reverse b11111111 ' + checkInRow)
              console.log('reverse b22222222 ' + checkInCol)
              console.log('reverse b33333333 ' + checkInRegion)
            
            
  
            if(checkInRow == false && checkInCol == false && checkInRegion == false){
              console.log('added val ')
              console.log(m+1)
              
              selectRow[i-1] = m+1
  
              break           
            } 
          } 
          */       
        }
        
        
        
        /*
        // end of loop
        if( i+1 == 1){
          if(selectRow.includes('.') == false){
            if(rowName[g] == 'A'){
              row1 = selectRow
            } else if(rowName[g] == 'B'){
              row2 = selectRow
            } else if(rowName[g] == 'C'){
              row3 = selectRow
            } else if(rowName[g] == 'D'){
              row4 = selectRow
            } else if(rowName[g] == 'E'){
              row5 = selectRow
            } else if(rowName[g] == 'F'){
              row6 = selectRow
            } else if(rowName[g] == 'G'){
              row7 = selectRow
            } else if(rowName[g] == 'H'){
              row8 = selectRow
            } else if(rowName[g] == 'I'){
              row9 = selectRow
            }
          }
        }
        */
      }      
    }
    // return invalidSudo
    // 769235418851496372432178956174569283395842761628713549283657194516924837947381625
    
  }

  
}

module.exports = SudokuSolver;

