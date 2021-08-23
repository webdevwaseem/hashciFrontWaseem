import { Logincheck } from "../../../../logic/actions/wallet";

import React, { useState } from "react";
import {
  LoginFormLeft,
  LoginFormRight,
  Checkalign,
  ForgotPassLink,
  ExtraLinks,
  Img,
  Container,
  Input,
  Label,
  LoginText,
  Button,
  CheckBox,
  RememberLabel,
  NotaMember,
  Image,
  ButtonAuth,
  OR,
  Auth,
  ButtonDiv,
  AppleButton,
} from "./style";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [rememberme, setRememberMe] = useState(false);
  const { loginData } = useSelector((state: any) => state.wallet);
  const checklogin = (event: any) => {
    dispatch(Logincheck(loginInfo));
  };
  const checkRememberMe = () => {
    setRememberMe(!rememberme);
  };
  return (
    <Container>
      <LoginFormLeft>
        <Img src="https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?fit=1200%2C800&ssl=1" />
      </LoginFormLeft>

      <LoginFormRight>
        <LoginText>Login</LoginText>

        <Label>Email address</Label>
        <Input
          type="text"
          value={loginInfo.email}
          // onChange={ e =>(setLoginInfo({...loginInfo, email:e.target.value}) )}
          placeholder="Type your Email"
        />
        <Label>Password</Label>
        <Input
          type="password"
          value={loginInfo.password}
          placeholder="Type your Password"
          //onChange={ e =>(setLoginInfo({...loginInfo, password:e.target.value}) )}
        />

        <Checkalign>
          <CheckBox type="checkbox" id="rememberMe" onClick={checkRememberMe} />
          <RememberLabel>Remember me</RememberLabel>
        </Checkalign>

        <Button onClick={checklogin}>Sign In</Button>
        <ExtraLinks>
          <ForgotPassLink href="#" id="forgot">
            Forgot Password?
          </ForgotPassLink>
          <NotaMember>Not a member?</NotaMember>
        </ExtraLinks>
        <Auth>
          <OR>OR</OR>

          {console.log("login data", loginData)}

          <ButtonDiv>
            <ButtonAuth>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
              Continue with Google
            </ButtonAuth>
            <AppleButton>
              <Image src="https://lh3.googleusercontent.com/proxy/cu36q0TSkpDHrTe9FB06af4JwIhGEHkGocAB8MxUMqaaZ54W2NF1YKEG_OGrp-9k9g1w8enG-f1P84QnlWMzlP2h1ZkAjew" />
              Continue with Apple
            </AppleButton>
          </ButtonDiv>
        </Auth>
      </LoginFormRight>
    </Container>
  );
};

export default Login;
