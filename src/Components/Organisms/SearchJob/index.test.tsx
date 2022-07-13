import { render, screen } from '@testing-library/react';
import {SearchJob} from '.';

describe('Search Bar', () => {
  test('render whole organism', () => {
    render(<SearchJob skills={[]} locations={[]} />);
    expect(screen.getByTestId('searchJob')).toBeInTheDocument();
  });

  test('render skill search field', () => {
    render(<SearchJob  skills={[]} locations={[]}/>);
    expect(screen.getByTestId('skill')).toBeInTheDocument();
  });

  test('render location search field ', () => {
    render(<SearchJob  skills={[]} locations={[]}/>);
    expect(screen.getByTestId('location')).toBeInTheDocument();
  });


});