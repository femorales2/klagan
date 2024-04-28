import { Character } from '@/type/character';

export const getFavoritesIds = (favorites: Character[]) => {
  
  return favorites.map(favorite => favorite.id);
  
}