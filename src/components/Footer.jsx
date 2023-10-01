import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      &copy; 2023 Your Company Name. All Rights Reserved.
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;
