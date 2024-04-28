import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import useRequester from '@/hooks/useRequester';
import { fetchCharacters } from '@/utils/api';
import { Character, CharacterResponse } from '@/type/character';

interface ICardContext {
  data: CharacterResponse["data"],
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  favorites: Character[];
  selectedId: string;
  toggleFavorite(character: Partial<Character>): void;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

const CardContext = createContext<ICardContext>({} as unknown as ICardContext);

export const useCardContext = () => useContext(CardContext);

const CardContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardData, setCardData] = useState<ICardContext["data"]>({results: []});
  const [limit, setLimit] = useState<number>(50);
  const [search, setSearch] = useState<string>('');
  const [selectedId, setSelectedId] = useState<string>("");
  const [favorites, setFavorites] = useState<Character[]>([]);
  const { result, loading } = useRequester<CharacterResponse>({
    requestCallback: () => fetchCharacters({ limit }),
  });
  
  const toggleFavorite = (character: Character) => {
    const exists = favorites.some(favorite => favorite.id === character.id);
    if (exists) {
      setFavorites(favorites.filter(favorite => favorite.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  }
  
  useEffect(() => {
    if (!loading && result?.data.results.length) {
      setCardData(result.data);
    }
  }, [loading, result]);

  return (
    <CardContext.Provider
      value={{
        data: cardData,
        search,
        setSearch,
        favorites,
        toggleFavorite,
        selectedId,
        setSelectedId
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
