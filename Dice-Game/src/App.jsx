import { useState } from 'react'
import styled from 'styled-components'
import Home from './components/Home'
import GamePlay from './components/GamePlay';


function App() {
  const[isGameStarted , setisGameStarted] = useState(true);

  const toggleGame = () => {
    setisGameStarted((prev) => !prev) 
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay/>:<Home toggle={toggleGame}/>
    }
    </>
  )
}

export default App  
