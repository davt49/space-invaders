document.addEventListener('DOMContentLoaded', ()=> {
  console.log('Hello')

  const board = document.querySelector('.board')
  const grid = []
  const height = 11
  const width = 20


  function makeGrid(){
    for(i = 0; i < width * height; i++){
      const square = document.createElement('div')
      square.classList.add('square')
      square.innerHTML = i
      grid.push(square)
      board.append(square)
    }
  }
  makeGrid()

  const player = 210
  grid[player].classList.add('player')

  const monster = [6,8,10,12,14,26,28,30,32,34]
  function makeMonsters(){
    for(i = 0; i < monster.length; i++){
      grid[`${monster[i]}`].classList.add('monster')
    }
  }
  makeMonsters()

  function laserTravel(){
    // const laspos = player - width
    // console.log(laspos)
    for (i = 1; i < 11; i++){
      grid[`${player - width * i}`].classList.add('laser')
    }
  }


  function handleKeyDown(e){
    switch(e.keyCode){
      case 32:
        console.log('shoot')
        // grid[`${player - width}`].classList.add('laser')
        laserTravel()
      break
      default:
    }
  }

  const test = [{name: 'harry', surname: 'potter', power:'two'},{name:'hermoine', surname: 'grainger', power:'one'}]
  console.log(test)
  console.log(test[0].name + ' ' + test[1].surname + ' ' +test[0].power)
  
  window.addEventListener('keypress', handleKeyDown)  

})