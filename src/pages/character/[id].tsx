import React, { useEffect } from 'react';
import CharacterDetail from '@/components/CharacterDetail/CharacterDetail';
import styles from './characterDetailPage.module.scss';
import CharacterComics from '@/components/CharacterComics/CharacterComics';
import { useCardContext } from '@/context/CardContext';
import { fetchCharacters } from '@/utils/api';

interface ICharacterDetailPage {
  [index: string]: string;
  id: string;
}

const Page = ({ id }: ICharacterDetailPage) => {
  const { setSelectedId } = useCardContext();

  useEffect(() => {
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
  const response = await fetchCharacters({ limit: 50, ssr: true });
  const paths = response.data.results.map((character) => ({
    params: {
      id: character.id.toString()
    }
  }));

  return {
    paths: paths,
    /**
     * if path was not pre-generated and build time let's give a chance to look for characters beyond first 50's
     */
    fallback: 'blocking'
  };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  return {
    props: {
      id: context.params.id
    }
  };
};

export default Page;
