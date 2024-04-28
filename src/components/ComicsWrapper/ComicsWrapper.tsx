import React from 'react';
import Comic from '@/components/Comic/Comic';
import styles from './comicsWrapper.module.scss';
import useRequester from '@/hooks/useRequester';
import { fetchCharacterComics } from '@/utils/api';
import { useCardContext } from '@/context/CardContext';
import { ComicDate, ComicResponse } from '@/type/ComicType';

const ComicsWrapper = () => {
  const { selectedId: id } = useCardContext();
  const { result, loading } = useRequester<ComicResponse>({
    requestCallback: () => fetchCharacterComics({ id }),
    enabled: Boolean(id)
  });

  if (loading) return;

  return (
    <div className={styles.wrapper}>
      {result?.data.results.map((comic) => (
        <Comic
          key={comic.id}
          title={comic.title}
          thumb={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          issueDate={comic.dates.find(
            (date: ComicDate) => date.type === 'onsaleDate'
          )}
        />
      ))}
    </div>
  );
};

export default ComicsWrapper;
