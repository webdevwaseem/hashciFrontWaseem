import styled from "styled-components";

export const Container=styled.div`

display :flex ;
flex-direction: row;
align-items:center;
justify-content: space-evenly;


`
export const Title=styled.h1`
width: 109px;
height: 36px;
left: 0px;
top: 0px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 120%;
/* identical to box height, or 36px */

display: flex;
align-items: center;
justify-content: flex-start;
letter-spacing: -0.01em;

color: #000000;

`
export const FormImage=styled.img `
width: 527px;
height: 640px;
left: calc(50% - 527px/2 - 280.5px);
top: calc(50% - 693px/2 - 45.5px);
align-self: center;
`

export const FormData=styled.div `

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 0px;
width: 400px;
height: 902px;


`
export const Input = styled.input `
width: 380px;
height:30px;
left: 0px;
padding: 0.25em 0.5em;
background: #eeee;
border-radius: 4px;
margin: 15px 0px;
border: 1px solid var(--input-border);
`

export const Label =styled.label`
//width: 81px;
height: 16px;
//left: 0px;
//top: 0px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 130%;
color: #051226;
`