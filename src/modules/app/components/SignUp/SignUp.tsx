import React, { useState } from "react";
import { FormData, FormImage, Title } from "./style";
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
} from "../Login/style";

import { useDispatch, useSelector } from "react-redux";
import { signupcheck } from "../../../../logic/actions/wallet";
const SignUp = () => {
  const [signupInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();
  const [isSignUp, setIsSignup] = useState(false);

  const { signUpData } = useSelector((state: any) => state.wallet);

  const handleSignUp = () => {
    dispatch(signupcheck(signupInfo));
  };

  return (
    <Container>
      <LoginFormLeft>
        <Img src="https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?fit=1200%2C800&ssl=1" />
      </LoginFormLeft>

      <LoginFormRight>
        <FormData>
          <LoginText>Sign up</LoginText>
          <Label>Name</Label>
          <Input
            type="text"
            value={signupInfo.name}
            placeholder="Name"
            onChange={(e) =>
              setSignUpInfo({ ...signupInfo, name: e.target.value })
            }
          />
          <Label>Email address</Label>
          <Input
            type="text"
            value={signupInfo.email}
            placeholder="Enter your Email"
            onChange={(e) =>
              setSignUpInfo({ ...signupInfo, email: e.target.value })
            }
          />
          <Label>Mobile Number</Label>
          <Input
            type="text"
            value={signupInfo.mobilenumber}
            placeholder="xxx-xxx-xxx"
            onChange={(e) =>
              setSignUpInfo({ ...signupInfo, mobilenumber: e.target.value })
            }
          />
          <Label>Password</Label>
          <Input
            type="password"
            value={signupInfo.password}
            placeholder="Type your password"
            onChange={(e) =>
              setSignUpInfo({ ...signupInfo, password: e.target.value })
            }
          />
          <Label>Confim password</Label>
          <Input
            type="text"
            value={signupInfo.confirmpassword}
            placeholder="Type your password"
            onChange={(e) =>
              setSignUpInfo({ ...signupInfo, confirmpassword: e.target.value })
            }
          />

          <Checkalign>
            <CheckBox type="checkbox" id="rememberMe" />
            <RememberLabel>
              Confirm{" "}
              <span>
                {" "}
                <a href="terms and conditions"> Terms and conditions</a>
              </span>{" "}
            </RememberLabel>
          </Checkalign>

          <Button onClick={handleSignUp}> Sign up</Button>
          <ExtraLinks>
            <ForgotPassLink href="#" id="forgot">
              Forgot Password?
            </ForgotPassLink>
            <NotaMember>
              Already member/{" "}
              <span>
                <a href="signup">Log In </a>{" "}
              </span>
            </NotaMember>
          </ExtraLinks>
          <Auth>
            <OR>OR</OR>

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
        </FormData>
      </LoginFormRight>
    </Container>
  );
};

export default SignUp;
