import React from 'react';

import {
  BannerContainer,
  BannerImage,
  BannerBandName,
  BannerSongName,
  BannerSongURL,
  BandInfoContainer,
  BannerButton,
  BandButtonContainer
} from './styles';
import { colorPallet } from '../../styles/colors';

function Banner({ song, artist, url, image, onDelete, onUpdate }) {

  return (
    <BannerContainer color={colorPallet.fernGreen}>
      <div>
        <BandInfoContainer>
          <BannerImage src={image} />
          <BannerBandName color={colorPallet.teaGreen}>{artist}</BannerBandName>
          <BannerSongName color={colorPallet.belge}>{song}</BannerSongName>
          <BannerSongURL target="_blank" color={colorPallet.teaGreen} href={url}>Song Link</BannerSongURL>
        </BandInfoContainer>
      </div>
      <BandButtonContainer>
        <BannerButton
          color={colorPallet.mossGreen}
          onClick={onUpdate}
        >
          Update</BannerButton>
        <BannerButton
          color={colorPallet.mossGreen}
          onClick={onDelete}
        >
          Delete</BannerButton>
      </BandButtonContainer>
    </BannerContainer>
  );
}

export default Banner;