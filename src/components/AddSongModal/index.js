import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { colorPallet } from '../../styles/colors';
import { AddSongInput, AddSongModalContainer, AddSongModalText, AddSongModalButton, AddSongButtonContainer } from './styles';
import { createSong } from '../../actions/songs';

function AddSongModal({ onCloseModal, show }) {
  const dispatch = useDispatch();
  const [songData, setSongData] = useState({
    song: '',
    artist: '',
    url: '',
    image: '',
  });

  const handleSubmit = () => {
    dispatch(createSong(songData));
  };

  return (
    <>
      {show &&
        <AddSongModalContainer color={colorPallet.laurelGreen}>
          <AddSongModalText>Artist Name</AddSongModalText>
          <AddSongInput
            name="artist"
            type="text"
            value={songData.artist}
            onChange={(e) => setSongData({ ...songData, artist: e.target.value })}
            required
          />
          <AddSongModalText>Song Name</AddSongModalText>
          <AddSongInput
            name="song"
            type="text"
            value={songData.song}
            onChange={(e) => setSongData({ ...songData, song: e.target.value })}
            required
          />
          <AddSongModalText>Image Link</AddSongModalText>
          <AddSongInput
            name="image"
            type="url"
            value={songData.image}
            onChange={(e) => setSongData({ ...songData, image: e.target.value })}
            required
          />
          <AddSongModalText>YouTube URL</AddSongModalText>
          <AddSongInput
            name="url"
            type="url"
            value={songData.url}
            onChange={(e) => setSongData({ ...songData, url: e.target.value })}
            required
          />
          <AddSongButtonContainer>
            <AddSongModalButton
              color={colorPallet.fernGreen}
              onClick={handleSubmit}
              type="submit"
            >ADD</AddSongModalButton>
            <AddSongModalButton color={colorPallet.fernGreen}
              onClick={onCloseModal}>Close</AddSongModalButton>
          </AddSongButtonContainer>
        </AddSongModalContainer>
      }
    </>
  );
}

export default AddSongModal;