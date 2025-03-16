import React, { useState } from 'react'
import styled from 'styled-components'

import GamePlay from './GamePlay'

const NumberGenerator = ({
    selected , setSelected, error , setError
}) => {
    const arrNumber = [1,2,3,4,5,6]
    
  return (
    <NumberSelector>
    <p className="error">{error}</p>
    <div className="flex">
    {
        arrNumber.map((value,i) => <Box
        isSelected = {
            value === selected
        } 
        key ={i} 
        onClick={() => {
            setSelected(value)
            setError("")
        }}>{value}</Box>)
        
    }
    </div>
    <p className="select">Select Number</p>
    

    </NumberSelector>
)
}

export default NumberGenerator

const NumberSelector = styled.div`
display:flex;
flex-direction: column;
align-items: end;

    .flex{
        display: flex;
        gap:24px;
    }
    .select{
        font-size: 24px;
        font-weight:700;
    }
    .error{
        color:red;
    }
`

const Box = styled.div`
    height : 72px;
    width:72px;
    border : 1px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    cursor:pointer;
    background-color: ${(props) => props.isSelected? "black" : "white"};
    color : ${(props) => props.isSelected? "white" : "black"}
`