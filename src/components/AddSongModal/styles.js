import styled from "styled-components";

export const AddSongModalContainer = styled.div`
  padding: 20px;
  height: auto;
  width: 240px;
  background-color: ${props => props.color};
  border-radius: 8px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const AddSongModalText = styled.p` 
  font-weight: 300;
  font-size: 14px;
  color: black;
`

export const AddSongInput = styled.input` 
  height: 30px;
  width: 80%;
  border-radius: 4px;
  border: none;
`
export const AddSongButtonContainer = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  margin-top: 30px;
  width: 80%;
`

export const AddSongModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${props => props.color};
  height: 20px;
  width: 60px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  text-decoration: none;
  :hover {
		box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.3);
		cursor: pointer;
    -webkit-transform: translateY(-3px);
	  transform: translateY(-3px);
    color: #718355;
	}
`