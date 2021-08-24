import styled  from "styled-components";

export const Container=styled.div `
display: flex;
flex-direction:column;
align-items:center;
justify-content:flex-end;


`
export const Button = styled.button`
//display: flex;
//flex-direction: column;
align-items: center;
padding: 11px 16px;
position: static;
width: 200px;
height: 45px;
left: 0px;
top: 319px;
margin-left: 10px;
background: #eeee;
border-radius: 4px;
font-size: 20px;
`
export const Form=styled.form `
display: flex;
flex-direction: column;
justify-content:center;
align-items:flex-start;



`
export const PrevImageDiv=styled.div `
position: relative;
//padding: 20px 40px 40px;
//max-width: 2640px;
display: flex;
flex-direction: row;
align-items: stretch    ;
justify-content: end;

img {
position: static ;

background-color: red;
}
`   

export const Title=styled.h1 `
font-size: 18px;
padding:2px;
font-family: 'Inter', sans-serif;
font-weight:bold;




`
export const Input= styled.input `
width: ${props => props.width};
height:40px;
left: 0px;
padding: 0.25em 0.5em;
background: #fff;
border-radius: 4px;
margin:10px 0;
box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
border: 1px solid var(--input-border);
box-sizing: border-box;

`
export const FileLabel=styled.label `
    display: inline-block;
    padding: 6px 12px;
    margin: 10px 0;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 700;
`
export const FileInput=styled.input `
border-radius: 4px;
margin: 15px 5px;
padding: 5px;
border: 1px solid var(--input-border);


`
export const ThemeField=styled.input `

width:300px;
height:90px;
left: 0px;
padding: 0.25em 0.5em;
background: #fff;
border-radius: 4px;
margin:10px 0;
box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
border: 1px solid var(--input-border);
box-sizing: border-box;


`
export const ErrorMessage = styled.h4 `

font-size: 18px;
font-family: 'Inter', sans-serif;


`
export const InputGroup=styled.div`
display: flex;

flex-direction: row;
justify-content: space-evenly;
align-items: center;

`
export const ButtonsGroup =styled.div `

display: flex;
flex-direction: row;
align-items:flex-start;



`

export const ComponentInfo=styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-end;
 justify-content: space-around;


`
export const UploadLabel=styled.label `
font-size: 24px;
font-weight: bolder;

margin:15px;
font-family:'Inter', sans-serif;



`