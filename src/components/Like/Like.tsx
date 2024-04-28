import React, { useMemo, MouseEvent } from 'react';
import { useCardContext } from '@/context/CardContext';
import EmptyHeart from '@/components/EmptyHeart/EmptyHeart';
import Heart from '@/components/Heart/Heart';

interface ILike {
  characterId: number | string;
  size?: number;
}

const Like = ({characterId, size = 10}: ILike) => {
  const {toggleFavorite, favorites} = useCardContext();
  
  const isFavorite = useMemo(() => favorites.some(favorite => favorite.id === characterId), [favorites, characterId]);
  
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    toggleFavorite({id: characterId});
  }
  
  return (
    <span onClick={handleClick}>
      {isFavorite ? <Heart width={size} height={size} /> : <EmptyHeart width={size} height={size} />}
    </span>
  );
};

export default Like;