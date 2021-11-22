import axios from 'axios';

const url = 'http://localhost:5000/songs';

export const fetchSongs = () => axios.get(url);
export const createSongs = (newSong) => axios.post(url, newSong);
export const updateSongs = (id, updatedSong) => axios.put(`${url}/${id}`, updatedSong);
export const deleteSongs = (id) => axios.delete(`${url}/${id}`);