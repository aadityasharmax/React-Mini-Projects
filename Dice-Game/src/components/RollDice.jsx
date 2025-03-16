import React , {useState} from 'react'
import styled from 'styled-components'
import GamePlay from './GamePlay'

const RollDice = ({
    currentDice , rollDice
}) => {

    

    
    

  return (
    <DiceContainer>
        <div  
        onClick={() => rollDice()
            
        } className="dice">
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to Roll</p>
        
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top : 48px;
    display:flex;
    flex-direction: column;
    align-items:center;

    .dice{
        cursor:pointer;
    }

    p{
        font-size:24px;
        font-weight:500;
    }
`

