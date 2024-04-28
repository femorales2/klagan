import React, { useEffect, useLayoutEffect } from 'react';
import { GetServerSideProps } from 'next';
import CharacterDetail from '@/components/CharacterDetail/CharacterDetail';
import styles from "./characterDetailPage.module.scss";
import CharacterComics from '@/components/CharacterComics/CharacterComics';
import { useCardContext } from '@/context/CardContext';
import { fetchCharacter, fetchCharacters } from '@/utils/api';

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

export const getStaticPaths = async () => {
  const response = await fetchCharacters({limit: 50});
  
  console.log(response);
  
  return {
    paths: [
      {
        params: {
          id: '1011334'
        }
      }
    ],
    fallback: true
  }
}

export const getStaticProps = async (context: {params: {id: string}}) => {
  /*console.log(context);
  const character = await fetchCharacter(context.params.id);*/
  
  return {
    props: {
      id: context.params.id
    }
  }
  
}

/*export const getServerSideProps: GetServerSideProps<ICharacterDetailPage, ICharacterDetailPage> = async (context) => {
  const id = context.params?.id;
  /!**
   * if there isn't id nor id is a number
   * we shall redirect to home
   *!/
  if (!id || isNaN(parseInt(id))) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  
  return {props: {id}};
}*/

export default Page;