import React ,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberGenerator from './NumberGenerator'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'
import {scroller} from 'react-scroll'

const GamePlay = () => {
  const [score , setScore] = useState(0)
  const [selected , setSelected] = useState()
  const[currentDice , setCurrentDice] = useState(1);
  const[error , setError] = useState("")
  const[showRules , setShowRules] = useState(false)



  const scrollToSection = () => {
    scroller.scrollTo("section1", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };




  const generateRandom = () => {
    return Math.floor(Math.random() * 6 + 1)
}    

const rollDice = () => {

  if(!selected) {
    setError("You have not selected and number")
    return 
  }

  setError("")
    const randomNumber = generateRandom()

    setCurrentDice(randomNumber)

    if(selected === randomNumber){
      setScore((prev) => prev + randomNumber)
    }

     else{
      setScore((prev) => prev - 2)
    }

    setSelected(undefined)
}






  return (
    <MainContainer>
    <div className='top-section'>
    <TotalScore score={score}/>
    <NumberGenerator selected={selected} setSelected={setSelected} error={error} setError={setError}/>
    </div>
    <RollDice currentDice={currentDice} rollDice={rollDice}/>
    <div className="btns">
      <OutlineButton onClick={() => {
        setScore(0)
      }}>Reset</OutlineButton>
      <Button
      onClick ={() => {
        setShowRules((prev) => !prev)
        {scrollToSection}
      }
      }
      >
        {showRules ? "Hide" : "Show"} Rules</Button>
    </div>
    {showRules && <Rules/>}
    </MainContainer>
    
  )
}

export default GamePlay


const MainContainer = styled.main`
padding-top:70px;
  .top-section{
    display:flex;
    justify-content: space-around;
    align-items: end;
  

  }

  .btns{
    margin-top: 40px;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
  }
`