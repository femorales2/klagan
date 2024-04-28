import React, { useMemo, useEffect } from 'react';
import Image from 'next/image';
import Like from '@/components/Like/Like';
import Triangle from '@/components/Triangle/Triangle';
import useRequester from '@/hooks/useRequester';
import { Character } from '@/type/character';
import { fetchCharacter } from '@/utils/api';
import styles from './characterDetail.module.scss';
import { useCardContext } from '@/context/CardContext';

const CharacterDetail = () => {
  const {selectedId: id, setSelectedId} = useCardContext();
  const { result: character, loading } = useRequester<Character | undefined>({
    requestCallback: () => fetchCharacter(id),
    enabled: Boolean(id)
  });
  
  useEffect(() => {
    
    return () => {
      setSelectedId("");
    }
  }, [setSelectedId]);
  
  const description = useMemo(() => {
    /**
     * there are some characters that doesn't have a description,
     * so to not left this content empty let's default to a
     * hardcoded description
     */
    return character?.description
      ? character.description
      : "Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime, Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe."
  }, [character?.description]);
  
  if (!character) return;
  return (
    <div className={styles.characterContent}>
        <span className={styles.photo}>
          <Image width={320} height={320} src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                 alt={character.name} />
        </span>
      <span className={styles.content}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
            {character.name}
            </h1>
            {id && <Like characterId={parseInt(id.toString())} size={24} />}
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </span>
      <Triangle size={24} />
    </div>
  );
};

export default CharacterDetail;