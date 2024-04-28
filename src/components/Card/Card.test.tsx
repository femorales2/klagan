import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';
import Card from "./Card";
import { describe, expect, it } from '@jest/globals';

describe('<Card />', () => {
  it('should match a snapshot', () => {
    const {container: card} = render(<Card thumb={"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"} id={"123"} name="felix"/>);
    expect(card).toMatchSnapshot();
  });
  
  it('should have a name', () => {
    const {container: card} = render(<Card thumb={"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"} id={"123"} name="felix"/>);
    
    expect(getByText(card, "felix")).toBeTruthy();
  });
});