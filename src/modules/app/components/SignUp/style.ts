import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 30px;
  font-weight: 700;
  /* identical to box height, or 36px */
`;
export const FormImage = styled.img`
  width: 100%;
  height: 65vh;

  background-size: contain;
`;
export const SignupFormLeft = styled.div`
  width: 50%;
`;

export const SignUpFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
`;

export const Img = styled.img`
  width: 100%;
  height: 65vh;

  background-size: contain;
`;
export const LoginText = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 30px;
  font-weight: 700;
`;

export const LoginFormLeft = styled.div`
  width: 50%;
`;

export const LoginFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
`;

export const Input = styled.input`
  width: 83%;
  height: 30px;
  background-color: #fff;
  border-radius: 4px;
  margin: 15px 0;
  padding: 5px 3%;
  border: 0.5px solid grey;
`;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #000;
`;
export const Checkalign = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const CheckBox = styled.input`
  padding: 20px;
`;
export const ForgotPassLink = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #5e2eba;
`;

export const RememberLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #06387d;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px;
  width: 90%;
  height: 40px;
  background: #06387d;
  color: white;
  border-radius: 4px;
  font-size: 15px;
  border: none;
`;
export const ExtraLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  margin: 20px 0;
`;
export const NotaMember = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #394a64;
`;
export const Icon = styled.image`
  background: url("/identity/sign-in/g-normal.png") transparent 5px 50%
    no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
`;
export const Image = styled.img`
  height: 65%;
  padding-right: 10px;
`;
export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
export const OR = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 13px;
  margin: 12px 0;
  color: #000;
  /* or 18px */
`;
export const ButtonAuth = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 600;
  color: blue;
  justify-content: center;
  width: 48%;
  height: 40px;
  background: #efebeb;
  border-radius: 4px;
  border: none;
`;

export const AppleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  justify-content: center;
  width: 48%;
  height: 40px;
  background: #000;
  border-radius: 4px;
  border: none;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px;
  width: 400px;
  height: 902px;
`;
