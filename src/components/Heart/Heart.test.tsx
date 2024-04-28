import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import Heart from '@/components/Heart/Heart';

describe('<Heart/>', () => {
  it('should match snapshot', () => {
    const {container} = render(<Heart/>);
    
    expect(container).toMatchSnapshot();
  });
})