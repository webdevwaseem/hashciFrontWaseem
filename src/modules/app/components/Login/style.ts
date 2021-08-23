

import styled from 'styled-components';

export const Container=styled.div `
display :flex ;
flex-direction: row;
align-items: center;
justify-content:space-evenly;

`

export const Img=styled.img `
width: 527px;
height: 435px;
border: 1px solid #DEE5EF;
box-sizing: border-box;
border-radius: 4px;
align-self: center;
`
export const LoginText=styled.h1`

//width: 235px;
height: 36px;
//left: 0px;
//top: 0px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 120%;
display: flex;
align-items: center;
letter-spacing: -0.01em;
color: #000000;
`

export const Formcontainer=styled.div `

 display: flex;
 flex-direction:column;
 align-items: center;
 justify-content:center;
 width: 500px;
 height: 600px;

` 

export const Input = styled.input `
width: 380px;
height:30px;
left: 0px;

padding: 0.25em 0.5em;
background: #FFFFFF;
border-radius: 4px;
margin: 15px 0px;
border: 1px solid var(--input-border);


`
export const Text = styled.p`

width: 400px;
height: 44px;
//left: 0px;
//top: 47px;
padding: 2px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 105%;
color: #394A64;

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
export const Checkalign= styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin:8px 0;
`
export const CheckBox=styled.input `

left: 16.67%;
right: 16.67%;
top: 25%;
bottom: 29.17%;
border: 2px solid #FFFFFF;

`
export const ForgotPassLink=styled.a`

width: 140px;
height: 25px;
right: 492px;
top: 629px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;
text-align: right;
color: #5E2EBA;


`
 
export const RememberLabel= styled.label  `
width: 252px;
height: 20px;
left: 28px;
top: 0px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;
display: flex;
align-items: center;
color: #394A64;
padding: 5px;
& span {
  padding:8px;

}
`      
export const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 11px 16px;
position: static;
width: 400px;
height: 40px;
left: 0px;
top: 319px;
background: #5E2EBA;
border-radius: 4px;
font-size: 18px;

`
export const ExtraLinks =styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-self: flex-end;
margin: 8px 0;

`
export const NotaMember= styled.a `
width: 250px;
height: 20px;
right: 211px;
top: 629px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;
text-align: right;
color: #394A64;
padding:5px;



`       
export const Icon=styled.image ` 
      background: url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    `
    export const Image=styled.img  `
      height:100%;
     font-size: 40px;
     padding: 15px;
    
    `
   export const Auth=styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
   
   ` 
export const OR=styled.div  `
width: 20px;
height: 18px;
left: 610px;
top: 4px;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
margin: 8px 0;
/* or 18px */

   
   `     
export const ButtonAuth=styled.button` 
display: flex;
flex-direction: row;
align-items:center;
padding: 7px 10px;
font-size: larger;
justify-content: center;
text-align: center;
width: 400px;
height: 40px;
left: 0px;
top: 0px;
background: #F3EDFF;
border-radius: 4px;   
`
