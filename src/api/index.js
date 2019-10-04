import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});

// Pokemons
export const getPokemons = () => {
  const url = '/pokemon/';
  return instance.get(url);
};

// CHARACTERS
/*export const getCharacters = params => {
  const paramStringify = qs.stringify(params, {skipNulls: true});
  const url = `/personajes?${paramStringify}`;
  return instance.get(url);
};

export const postCharacter = data => {
  const url = '/personajes';
  return instance.post(url, data);
};*/
