import { PUBLIC_KEY } from '@/constants/api';

export type Character = {
  id: number | string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: {
    available: number;
    items: Comic[];
  }
}

export type Comic = {
  name: string;
  resourceURI: string;
}

export type CharacterResponse = {
  data: {
    results: Character[];
    count?: number;
  }
}

export type Thumbnail = {
  path: string;
  extension: string;
}

export type ParamsType = {
  apikey: string;
  limit: string;
  offset: string;
  hash?: string;
  ts?: string;
}