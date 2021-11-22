import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteSong, getSongs } from '../../actions/songs';
import {
  HomeBandsContainer,
  HomeContainer,
  AddSongButton,
  HomeButtonContainer,
  HomeModalContainer
} from './styles';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import { colorPallet } from '../../styles/colors';
import AddSongModal from '../../components/AddSongModal';
import UpdateSongModal from '../../components/UpdateSongModal';

function Home() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const [show, setShow] = useState(false);
  const [showModalSongInfo, setShowModalSongInfo] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleClose = () => setShow(false);
  const handleCloseSongModal = () => setShowModalSongInfo(false);

  const showSong = () => {
    setShow(true);
  };

  const showModalSong = useCallback((song) => {
    setModalData(song);
    setShowModalSongInfo(true);
  }, []);

  console.log('songs::', songs);
  console.log('ModalData', modalData);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <HomeContainer color={colorPallet.teaGreen}>
        <HomeButtonContainer onClick={showSong}>
          <AddSongButton color={colorPallet.belge}>Add a New Song!</AddSongButton>
        </HomeButtonContainer>
        <HomeModalContainer>
          <AddSongModal
            onCloseModal={handleClose}
            show={show}
          />
        </HomeModalContainer>
        <HomeBandsContainer>
          {songs.map((song) => (
            <Banner
              key={song._id}
              artist={song.artist}
              image={song.image}
              song={song.song}
              url={song.url}
              onDelete={() => dispatch(deleteSong(song._id))}
              onUpdate={() => showModalSong(song)}
            />
          ))}
          <UpdateSongModal
            show={showModalSongInfo}
            data={modalData} 
            onCloseModal={handleCloseSongModal}
            key={modalData._id}
            />
        </HomeBandsContainer>
      </HomeContainer>
    </>
  );
}

export default Home;