import React from 'react';
import styles from './navLikes.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import LikeIcon from '../../../public/assets/img/Heart_icon.svg';
import { useCardContext } from '@/context/CardContext';
import { useRouter } from 'next/router';

const NavLikes = () => {
  const router = useRouter();
  const {favorites, setEnableFavoriteView, enabledFavoriteView} = useCardContext();
  return (
    <div className={classNames(styles.navLikes)} onClick={() => {
      setEnableFavoriteView(!enabledFavoriteView);
      router.push("/");
    }}>
      <Image src={LikeIcon} alt="Favorites" className={classNames(styles.likeIcon)} />
      <span>{favorites.length}</span>
    </div>
  );
};

export default NavLikes;