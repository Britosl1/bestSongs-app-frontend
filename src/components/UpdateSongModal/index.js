import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSong } from '../../actions/songs';

import { colorPallet } from '../../styles/colors';
import {
  UpdateSongButtonContainer,
  UpdateSongInput,
  UpdateSongModalButton,
  UpdateSongModalText,
  UpdateSongModalContainer
} from './styles';

function UpdateSongModal({ show, data, onCloseModal }) {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState({
    song: data.song,
    artist: data.artist,
    url: data.url,
    image: data.image,
  });

  const onUpdate = (id) => {
    dispatch(updateSong(id, songData));
  };

  return (
    <>
      {show &&
        <UpdateSongModalContainer color={colorPallet.laurelGreen}>
          <UpdateSongModalText>Artist Name</UpdateSongModalText>
          <UpdateSongInput
            name="artist"
            type="text"
            value={songData.artist}
            placeholder={data.artist}
            onChange={(e) => setSongData({ ...songData, artist: e.target.value })}
            required
          />
          <UpdateSongModalText>Song Name</UpdateSongModalText>
          <UpdateSongInput
            name="song"
            type="text"
            value={songData.song}
            placeholder={data.song}
            onChange={(e) => setSongData({ ...songData, song: e.target.value })}
            required
          />
          <UpdateSongModalText>Image Link</UpdateSongModalText>
          <UpdateSongInput
            name="image"
            type="url"
            value={songData.image}
            placeholder={data.image}
            onChange={(e) => setSongData({ ...songData, image: e.target.value })}
            required
          />
          <UpdateSongModalText>YouTube URL</UpdateSongModalText>
          <UpdateSongInput
            name="url"
            type="url"
            value={songData.url}
            placeholder={data.url}
            onChange={(e) => setSongData({ ...songData, url: e.target.value })}
            required
          />
          <UpdateSongButtonContainer>
            <UpdateSongModalButton
              color={colorPallet.fernGreen}
              onClick={() => onUpdate(data._id)}
              type="submit"
            >UPDATE</UpdateSongModalButton>
            <UpdateSongModalButton color={colorPallet.fernGreen}
              onClick={onCloseModal}>Close</UpdateSongModalButton>
          </UpdateSongButtonContainer>
        </UpdateSongModalContainer>
      }
    </>
  );
}

export default UpdateSongModal;