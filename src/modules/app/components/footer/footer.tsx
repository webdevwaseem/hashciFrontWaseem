import React, { useState } from "react";
import history from "../history";
import { Paths } from "../routes/types";
import { FooterContainer, FooterFlex, NavTabsFooter, NavTab } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <NavTabsFooter>
        <NavTab>Home</NavTab>
        <NavTab>Swap</NavTab>
        <NavTab>Pool</NavTab>
        <NavTab>Farming</NavTab>
      </NavTabsFooter>

      <FooterFlex>
        {/* <a target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/twitter.svg").default}
            alt=""
          />
        </a>
        <a target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/telegram.svg").default}
            alt=""
          />
        </a>
        <a target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/youTube.svg").default}
            alt=""
          />
        </a> */}
      </FooterFlex>
    </FooterContainer>
  );
};

export default Footer;
