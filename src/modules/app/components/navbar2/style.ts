import styled from "styled-components";

export const Navdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #06397e;
  padding: 18px 25px;
`;

export const NavFirst = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavSecond = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logoimg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const NavSearchbar = styled.input`
  width: 50%;
  padding: 10px;
  background-color: transparent;
  color: black;
  border: 2px solid white;
  margin-right: 10px;
  border-radius: 10px;

  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none !important;
  }
`;

export const PointsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;

export const Pointsimg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Navtext = styled.text`
  color: white;
  font-size: 14px;
`;

export const Bellimg = styled.img`
  width: 20px;
  height: 20px;
`;
export const Userimg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
`;
export const Flexdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavBelow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const BelowText = styled.div`
  display: flex;
  color: black;
  font-size: 11px;
`;

export const BelowH3 = styled.h3`
  margin-right: 12px;
  font-weight: 500;
`;

export const BelowFilter = styled.div`
  color: black;
  margin-right: 12px;
  font-weight: 500;
  font-size: 13px;
`;
