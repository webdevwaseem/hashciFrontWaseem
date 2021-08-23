import React from "react";
import {
  Navdiv,
  NavFirst,
  Logoimg,
  NavSecond,
  NavSearchbar,
  PointsDiv,
  Pointsimg,
  Navtext,
  Bellimg,
  Userimg,
  Flexdiv,
  NavBelow,
  BelowText,
  BelowFilter,
  BelowH3,
} from "./style";

function navbar() {
  return (
    <div>
      <Navdiv>
        <NavFirst>
          <Logoimg src="https://i.pinimg.com/originals/f9/11/d3/f911d38579709636499618b6b3d9b6f6.jpg" />
          <Navtext>Logo</Navtext>
        </NavFirst>
        <NavSecond>
          <NavSearchbar placeholder="Search" />
          <PointsDiv>
            <Flexdiv>
              <Pointsimg src="https://i.pinimg.com/originals/f9/11/d3/f911d38579709636499618b6b3d9b6f6.jpg" />
              <Navtext>30</Navtext>
            </Flexdiv>

            <Bellimg src="https://i.pinimg.com/originals/f9/11/d3/f911d38579709636499618b6b3d9b6f6.jpg" />

            <Flexdiv>
              <Navtext>Rana</Navtext>

              <Userimg src="https://i.pinimg.com/originals/f9/11/d3/f911d38579709636499618b6b3d9b6f6.jpg" />
            </Flexdiv>
          </PointsDiv>
        </NavSecond>
      </Navdiv>
      <NavBelow>
        <BelowText>
          <BelowH3>Claim Varynt Token</BelowH3>
          <BelowH3>Manage Collection</BelowH3>
        </BelowText>
        <BelowFilter>Filter</BelowFilter>
      </NavBelow>
    </div>
  );
}

export default navbar;
