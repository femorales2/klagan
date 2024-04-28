import React, { useMemo } from 'react';
import styles from './SearchInput.module.scss';
import Input from '@/components/Input/Input';
import classNames from 'classnames';
import Image from 'next/image';
import searchIcon from '../../../public/assets/img/magnifiying_glass.png';
import { useCardContext } from '@/context/CardContext';

interface ISearchInput {}

const SearchInput = (props: ISearchInput) => {
  const { data, search, setSearch } = useCardContext();
  
  const results = useMemo(() => (Boolean(search)
    ? data.results.filter(char => char.name.toLowerCase().includes(search)).length
    : data.count) ?? 0,
    [data.count, data.results, search]);
  
  return (
    <div className={classNames(styles.searchWrapper)}>
      <div className={classNames(styles.searchInput)}>
        <div className={styles.inputWrapper}>
          <Image src={searchIcon} alt="saerch" />
          <Input
            placeholder="SEARCH A CHARACTER..."
            className={classNames(styles.input)}
            value={search}
            onChange={(el) => setSearch(el.target.value)}
          />
        </div>
        <hr />
      </div>
      <span className={classNames(styles.results)}>
        {results}{' '}
        RESULT{results === 0 || results > 1 ? "S" : ""}
      </span>
    </div>
  );
};

export default SearchInput;