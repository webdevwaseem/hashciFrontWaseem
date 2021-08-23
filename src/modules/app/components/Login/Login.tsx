
import { Logincheck } from '../../../../logic/actions/wallet';

import React,{useState} from 'react';
import {Formcontainer,
  Checkalign,ForgotPassLink,
  ExtraLinks,Img,Container,
  Input ,Label, 
  LoginText, Text, 
  Button, 
  CheckBox, RememberLabel, 
  NotaMember,
  Icon,Image,
  ButtonAuth,
 OR,
 Auth 
} from './style';

import { useDispatch,useSelector } from 'react-redux';


const Login =() =>
{
  const dispatch = useDispatch()
  const [loginInfo, setLoginInfo]=useState({email:'', password:''})
  const [rememberme, setRememberMe]=useState(false)
  const { loginData } = useSelector(
    (state: any) => state.wallet
  );
 const checklogin = (event: any)=>
 {


dispatch(Logincheck(loginInfo))

 }
 const checkRememberMe=() =>
 {
   setRememberMe(!rememberme)

 }
  return(
 <Container>
     <Img src={"images.png"}  />
     <Formcontainer>
       <LoginText>Login</LoginText>
      <Text>Lorem ipsum dolor sit amet, 
       consectetur adipiscing elit. 
       Sed semper et nisl nec lobortis. 
       Nullam quis nibh nec sapien</Text>
     <Label>Email address</Label>
    <Input type="text"  value={loginInfo.email}
     // onChange={ e =>(setLoginInfo({...loginInfo, email:e.target.value}) )} 
       /> 
    <Label>Password</Label>     
     <Input type="password" value={loginInfo.password} 
     //onChange={ e =>(setLoginInfo({...loginInfo, password:e.target.value}) )} 
     />

<Checkalign>
<CheckBox type="checkbox" id="rememberMe"  onClick={checkRememberMe}/> 
 <RememberLabel>Remember me</RememberLabel>
 </Checkalign>

 <Button onClick={checklogin}>Sign In</Button>
<ExtraLinks> 
 <ForgotPassLink href="#" id="forgot">Forgot Password?</ForgotPassLink>
 <NotaMember>Not a member/</NotaMember>  
 </ExtraLinks>
   <Auth>
  <OR>OR</OR>
  
      {console.log("login data",loginData)}
     
     <ButtonAuth><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> 
        Sign In with Google</ButtonAuth>
        </Auth>
    
    </Formcontainer>
</Container>

 )



}

export default Login