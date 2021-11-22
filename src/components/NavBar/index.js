import React from 'react';
import { colorPallet } from '../../styles/colors';
import { NavBarContainer, NavBarText } from './styles';

function NavBar() {
  return (
    <NavBarContainer color={colorPallet.aspargus}>
      <NavBarText color={colorPallet.belge}>Favorite Songs!</NavBarText>
    </NavBarContainer>
  );
}

export default NavBar;