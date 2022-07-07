import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import HomePageStepper from '.';
import { fireEvent } from '@storybook/testing-library';

describe('<Stepper tests>', () => {
  test('checks whether HomePageStepper component renders or not', () => {
    render(<HomePageStepper />);

    expect(screen.getByTestId('stepper')).toBeInTheDocument();
  });

  test('checking fire next event', () => {
    render(<HomePageStepper />);
    const nextStepperBtn = screen.getByTestId('btnNext');
    fireEvent.click(nextStepperBtn);
    const textElement = screen.getByTestId('box2');
    expect(textElement).toBeInTheDocument();
  });

  test('checking fire back event', () => {
    render(<HomePageStepper />);
    const nextStepperBtn = screen.getByTestId('btnNext');
    fireEvent.click(nextStepperBtn);
    const backStepperBtn = screen.getByTestId('btnBack');
    fireEvent.click(backStepperBtn);
    const textElement = screen.getByTestId('box1');

    expect(textElement).toBeInTheDocument();
  });
});