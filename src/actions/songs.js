import * as api from '../services/api';

export const getSongs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSongs();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log('Error:', error);
  }
};

export const createSong = (song) => async (dispatch) => {
  try {
    const { data } = await api.createSongs(song);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log('Error:', error);
  }
};

export const updateSong = (id, song) => async (dispatch) => {
  try {
    const { data } = await api.updateSongs(id, song);

    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log('Error:', error);
  }
}

export const deleteSong = (id) => async (dispatch) => {
  try {
    await api.deleteSongs(id);
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log('Error:', error);
  }
}