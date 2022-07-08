import { render, screen } from '@testing-library/react';
import Image from './Map';

it('renders images', () => {
  render(
    <Image src={'mapview.png'} height={0} width={0}></Image>,
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'mapview.png');
  expect(image).toHaveAttribute('alt', 'loading...');
});
