import React,{useState} from 'react';
import { FormData, Container, FormImage,Label, Input, Title } from './style';
import { Checkalign, CheckBox,Auth,ForgotPassLink,RememberLabel,
    NotaMember, Button,ButtonAuth,Image, ExtraLinks, OR } from '../Login/style';

    import { useDispatch, useSelector } from 'react-redux';
import { signupcheck } from '../../../../logic/actions/wallet';
const SignUp=() =>
{
const [signupInfo, setSignUpInfo]=useState({name:"",email:'',
                                            mobilenumber:'',
                                            password:'',
                                            confirmpassword:''})
const dispatch=useDispatch();
const [isSignUp, setIsSignup]=useState(false)

const { signUpData } = useSelector(
    (state: any) => state.wallet
  );

const handleSignUp=() =>
{
  dispatch(signupcheck(signupInfo))



}

    return(
 
  <Container>

   <FormImage src={"/images.png"} />
  <FormData>
    <Title>Sign up</Title>
  <Label>Name</Label>
  <Input type="text"  value={signupInfo.name}
      onChange={ e =>(setSignUpInfo({...signupInfo, name:e.target.value}) )}   /> 
    <Label>Email address</Label>     
     <Input type="text" value={signupInfo.email} 
     onChange={ e =>(setSignUpInfo({...signupInfo, email:e.target.value}) )} />
   <Label>Mobile Number</Label>
   <Input type="text"  value={signupInfo.mobilenumber}
      onChange={ e =>(setSignUpInfo({...signupInfo, mobilenumber:e.target.value}) )}   /> 
    <Label>Password</Label>     
     <Input type="password" value={signupInfo.password} 
     onChange={ e =>(setSignUpInfo({...signupInfo, password:e.target.value}) )} />
<Label>Confim password</Label>
<Input type="text"  value={signupInfo.confirmpassword}
      onChange={ e =>(setSignUpInfo({...signupInfo, confirmpassword:e.target.value}) )}   /> 

<Checkalign>
<CheckBox type="checkbox" id="rememberMe" /> 
 <RememberLabel>Confirm <span> <a href="terms and conditions"> Terms and conditions</a></span> </RememberLabel>
 </Checkalign>

 <Button onClick={handleSignUp}> Sign In</Button>
<ExtraLinks> 
 <ForgotPassLink href="#" id="forgot">Forgot Password?</ForgotPassLink>
 <NotaMember>Already member/ <span><a href="signup">Log In </a> </span></NotaMember>  
 </ExtraLinks>
   <Auth>
  <OR>OR</OR>
  
     
     
     <ButtonAuth><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> 
        Sign In with Google</ButtonAuth>
    
        </Auth>



    </FormData> 



  </Container>
 
  
 )



}

export default SignUp