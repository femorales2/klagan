import { Thumbnail } from '@/type/character';

export type ComicType = {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  dates: ComicDate[];
}

export type ComicDate = {
  date: string;
  type: string;
}

export type ComicResponse = {
  data: {
    results: ComicType[];
  }
}