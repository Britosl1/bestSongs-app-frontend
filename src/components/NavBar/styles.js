import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavBarText = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.color}
`