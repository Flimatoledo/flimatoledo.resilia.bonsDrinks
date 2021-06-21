import styled from "styled-components";

export const NavBarContainer = styled.header`
  background-color: lightcoral;
`;

export const NavBarContent = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  height: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    font-weight: bold;
    text-align: center;
  }
`;
