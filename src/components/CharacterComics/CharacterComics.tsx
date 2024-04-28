import React from 'react';
import styles from './characterComics.module.scss';
import ComicsWrapper from '@/components/ComicsWrapper/ComicsWrapper';

const CharacterComics = () => {
  return (
    <div className={styles.comicContent}>
      <h1 className={styles.title}>comics</h1>
      <ComicsWrapper />
    </div>
  );
};

export default CharacterComics;