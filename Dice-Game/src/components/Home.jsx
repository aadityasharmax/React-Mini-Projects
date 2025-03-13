import React from 'react'
import styled from 'styled-components'

function Home({toggle}) {
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt="" />
      </div>

      <div className='content'>
        <h1>
          DICE GAME
        </h1>

        <Button onClick={toggle}>Play Now</Button>
      </div>
      
    </Container>
  )
}

export default Home

const Container = styled.div`
  max-width:1180px;
  height : 100vh;
  display : flex;
  gap:50px;
  margin : 0 auto;
  align-items: center;

  .content { 
  h1{
    font-size: 96px;
    white-space: nowrap;
  }
  }


  img{
    height:500px;
    width:600px;
  }
`

const Button = styled.button`
  color:white;
  padding : 10px 18px;
  background : #000000;
  border-radius: 5px;
  min-width : 120px;
  border : none;
  font-size : 16px;
  border : 1px solid transparent;
  transition: 0.4s background ease-in;
  &:hover{
    background-color: white;
    color:black;
    border : 1px solid black;
    transition: 0.3s background ease-in;
    cursor:pointer;
  }
`