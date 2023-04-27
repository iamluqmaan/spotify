import React from 'react'
import styled from 'styled-components'
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';
import Volume from './Volume';
export default function Footer() {
  return (
    <Container>
      <span className='currentTrack'><CurrentTrack /></span>
      <span className='PlayerControls'> <PlayerControls /> </span>
      <span className='volume'><Volume /></span>
    </Container>
  )
}
const Container = styled.div`
background-color: #181818;
min-height: 100%;
border-top: 1px solid #282828;
display: grid;
grid-wrap: wrap;
grid-template-columns: 1fr 2fr 1fr;
align-items:center;
justify-content: center;
padding: 0 1rem;

@media screen and (max-width: 700px){
 .volume{
  display: none;
 }
 
}
`;

