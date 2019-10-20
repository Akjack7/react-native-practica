import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});

// Pokemons
export const getPokemons = params => {
  const url = `/pokemon/?limit=${params.limit}&offset=${params.offset}`;
  console.log("URL CON PAGINACION", url)
  return instance.get(url);
};

// POKEMON
export const getPokemon = url => {
  console.log("url desde api",url)
  return instance.get(url);
};


