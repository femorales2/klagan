import { CharacterResponse, CharactersParams } from '@/type/character';
import { endpoints } from '@/constants/api';
import md5 from 'md5';

export const fetchCharacters = async ({limit = 50, offset = 0, ssr = false}: {limit: number, offset?: number, ssr?: boolean}): Promise<CharacterResponse> => {
  let params: CharactersParams = {
    limit: limit.toString(),
    offset: offset.toString(),
    apikey: process.env.MARVEL_PUBLIC_TOKEN!,
  }
  
  const ts = Date.now();
  if (ssr) {
    params.ts = ts.toString();
    params.hash = getHash(ts);
  }
  
  try {
    const response = await fetch(`${endpoints.characters}?${new URLSearchParams(params)}`);
    
    return response.json();
  } catch (e) {
    console.error('there was an error fetching characters', e);
    
    return await Promise.reject(e);
  }
  
}

export const fetchCharacter = async (id: string) => {
  try {
    const response = await fetch(`${endpoints.characters}/${id}?${new URLSearchParams({
      apikey: process.env.MARVEL_PUBLIC_TOKEN!
    })}`);
    const characterResponse: CharacterResponse = await response.json();
    const [character] = characterResponse.data.results;
    return character;
  } catch (e) {
    console.error('there was an error fetching a character', e);
    return await Promise.reject(e);
  }
}

export const fetchCharacterComics = async ({id, limit = 20, offset = 0}: {id: string, limit?: number, offset?: number}) => {
  try {
    const response = await fetch(`${endpoints.characters}/${id}/comics?${new URLSearchParams({
      apikey: process.env.MARVEL_PUBLIC_TOKEN!,
      limit: limit.toString(),
      offset: offset.toString(),
      orderBy: "onsaleDate"
    })}`);
    
    return await response.json();
  } catch (e) {
    console.error('there was an error fetching comics', e);
    return await Promise.reject(e);
  }
}

export const getHash = (ts: number) => md5(`${ts}${process.env.MARVEL_PRIVATE_TOKEN}${process.env.MARVEL_PUBLIC_TOKEN}`);