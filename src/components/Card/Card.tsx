import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Character } from '@/type/character';
import Triangle from '@/components/Triangle/Triangle';
import Like from '@/components/Like/Like';
import styles from './Card.module.scss';

interface ICard extends Pick<Character, 'id' | 'name'> {
  thumb: string;
  onClick?(): void;
  onLikeClick?(e: React.MouseEvent<HTMLSpanElement>): void;
}

const Card = ({ id, name, thumb, onClick }: ICard) => {
  return (
    <div className={classNames(styles.card)} onClick={onClick}>
      <Image
        src={thumb}
        alt="character"
        className={classNames(styles.cardImage)}
        width={188}
        height={189}
      />
      <div className={classNames(styles.cardDetail)}>
        <span className={classNames(styles.hoverAnim)} />
        <div className={classNames(styles.character)}>
          <span>{name}</span>
          <Like characterId={id} size={13} />
        </div>
        <Triangle />
      </div>
    </div>
  );
};

export default Card;
