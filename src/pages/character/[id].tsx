import React, { useEffect, useLayoutEffect } from 'react';
import { GetServerSideProps } from 'next';
import CharacterDetail from '@/components/CharacterDetail/CharacterDetail';
import styles from "./characterDetailPage.module.scss";
import CharacterComics from '@/components/CharacterComics/CharacterComics';
import { useCardContext } from '@/context/CardContext';

interface ICharacterDetailPage {
  [index: string]: string;
  id: string;
}

const Page = ({id}: ICharacterDetailPage) => {
  
  const {setSelectedId} = useCardContext();
  
  useLayoutEffect(() => {
    console.log("page id hook", id);
    setSelectedId(id);
  }, [id, setSelectedId]);
  
  return (
    <section className={styles.container}>
      <CharacterDetail />
      <CharacterComics />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<ICharacterDetailPage, ICharacterDetailPage> = async (context) => {
  const id = context.params?.id;
  /**
   * if there isn't id nor id is a number
   * we shall redirect to home
   */
  if (!id || isNaN(parseInt(id))) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  
  return {props: {id}};
}

export default Page;