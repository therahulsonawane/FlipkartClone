import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
`;

function NavBar() {
  return (
    <Component>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="nav" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
}

export default NavBar;
