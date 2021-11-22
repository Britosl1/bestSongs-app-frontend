import styled from "styled-components";

export const HomeBandsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

export const HomeContainer = styled.div`
  background-color: ${props => props.color};
  height: 100%;
`

export const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const HomeModalContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AddSongButton = styled.button`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 300;
  border-radius: 4px;
  background-color: #87986A;
  padding: 8px;
  text-decoration: none;
  border: none;
  width: 200px;
  height: 50px;
  :hover{
    box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.3);
		cursor: pointer;
    -webkit-transform: translateY(-3px);
	  transform: translateY(-3px);
    color: #718355;
  }
`