import React, { useMemo } from 'react';
import Card from '@/components/Card/Card';
import classNames from 'classnames';
import { useCardContext } from '@/context/CardContext';
import { useRouter } from 'next/router';
import styles from './CardsWrapper.module.scss';
import { getFavoritesIds } from '@/utils/character';

const CardsWrapper = () => {
  const { data, search, favorites, enabledFavoriteView,  } = useCardContext();
  const router = useRouter();
  
  const favoritesIds = useMemo(() => getFavoritesIds(favorites), [favorites]);
  
  return (
    <div className={classNames(styles.wrapper)}>
      {data.results
        ?.filter(character => !enabledFavoriteView || favoritesIds.includes(character.id))
        ?.filter((character) =>
          character.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            thumb={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            onClick={() => router.push(`/character/${character.id}`)}
          />
        ))}
    </div>
  );
};

export default CardsWrapper;
