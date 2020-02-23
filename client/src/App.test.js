import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders header text', () => {
  const { getByText } = render(<App />);
  getByText(/womens world cup/i);
});

test('renders light mode default', () => {
  const { getByRole, getByTestId } = render(<App />);
  const body = getByTestId(/body/i);
  expect(getByRole('button')).toBeInTheDocument();
  expect(getByTestId('body')).toHaveStyle('background-color: #e6e6e6');
});

test('toggles dark mode' , () => {
  const { getByRole, getByTestId } = render(<App />);
  const toggleButton = getByRole('button');
  const body = getByTestId(/body/i);
  fireEvent.click(toggleButton);
  expect(body).toHaveStyle('background-color: #1a1a1a');
  fireEvent.click(toggleButton);
  expect(getByTestId('body')).toHaveStyle('background-color: #e6e6e6');
});