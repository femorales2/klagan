import { describe, expect, it, jest } from '@jest/globals';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Like from '@/components/Like/Like';
import { CardContext, ICardContext } from '@/context/CardContext';
import { Character } from '@/type/character';

describe('<Like />', () => {
  it('should render', () => {
    const {container} = render(
      <CardContext.Provider value={{
        favorites: [
          {
            id: 1
          }
        ],
      } as ICardContext}>
        <Like characterId={1} />
      </CardContext.Provider>
    );
    
    expect(container).toMatchSnapshot();
  });
  
  it('should call toggleFavorite', () => {
    const toggleFavorite = jest.fn();
    const {container} = render(
      <CardContext.Provider value={{
        favorites: [
          {
            id: 1
          }
        ],
        toggleFavorite: toggleFavorite as (char: Character) => void
      } as ICardContext}>
        <Like characterId={1} />
      </CardContext.Provider>
    );
    
    fireEvent.click(getByTestId(container, "like"));
    
    expect(toggleFavorite).toBeCalled();
  });
});