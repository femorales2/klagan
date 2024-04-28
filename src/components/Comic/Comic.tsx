import React from 'react';
import styles from './Comic.module.scss';
import { ComicDate } from '@/type/ComicType';
import Image from 'next/image';

interface IComic {
  title: string;
  thumb: string;
  issueDate?: ComicDate;
}

const Comic = ({ title, thumb, issueDate }: IComic) => {
  return (
    <div className={styles.comic}>
      <div>
        <Image src={thumb} alt={title} width={180} height={268} />
      </div>
      <div className={styles.detail}>
        <div className={styles.title}>{title}</div>
        {issueDate ? (
          <div className={styles.year}>
            {new Date(issueDate.date).getFullYear()}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Comic;
