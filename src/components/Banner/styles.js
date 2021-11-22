import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 380px;
  width: 200px;
  max-width: 60%;
  background-color: ${props => props.color};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 8px 8px 16px 8px;
`

export const BandInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BandButtonContainer = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  margin-top: 30px;
  width: 80%;
`

export const BannerImage = styled.img`
  justify-self: center;
  border-radius: 10px;
  width: 100%;
  height: 40%;
`

export const BannerBandName = styled.h2`
  color: ${props => props.color};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: -10px;
`

export const BannerSongName = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
`
export const BannerSongURL = styled.a`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 300;
  border-radius: 4px;
  background-color: #87986A;
  padding: 8px;
  text-decoration: none;
  :hover{
    box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.3);
		cursor: pointer;
    -webkit-transform: translateY(-3px);
	  transform: translateY(-3px);
    color: #718355;
  }
`

export const BannerButton = styled.button`
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
