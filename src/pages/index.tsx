import SearchInput from '@/components/SearchInput/SearchInput';
import styles from '@/styles/Home.module.scss';
import classNames from 'classnames';
import CardsWrapper from '@/components/CardsWrapper/CardsWrapper';
import { useCardContext } from '@/context/CardContext';

export default function Home() {
  const {enabledFavoriteView} = useCardContext();
  return (
    <div className={classNames(styles.home)}>
      {
        enabledFavoriteView && (
          <h2>Favorites</h2>
        )
      }
      <SearchInput />
      <CardsWrapper />
    </div>
  );
}
