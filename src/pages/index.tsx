import SearchInput from '@/components/SearchInput/SearchInput';
import styles from '@/styles/Home.module.scss';
import classNames from 'classnames';
import CardsWrapper from '@/components/CardsWrapper/CardsWrapper';

export default function Home() {
  return (
    <div className={classNames(styles.home)}>
      <SearchInput />
      <CardsWrapper />
    </div>
  );
}
