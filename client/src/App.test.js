import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders header text', () => {
  const { getByText } = render(<App />);
  getByText(/womens world cup/i);
});

test('button for light mode renders', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('button')).toBeInTheDocument();
});

// test('dark mode back ground is dark', () => {
//   const { getByTestId } = render(<App />);
//   expect(getByTestId('body')).toHaveStyle('background-color: #1a1a1a');
// })

// test('toggles dark mode' , () => {
//   const { getByRole, getByTestId } = render(<App />);
//   const toggleButton = getByRole('button');
//   const body = getByTestId(/body/i);
//   fireEvent.click(toggleButton);
//   expect(body).toHaveStyle('background-color: #1a1a1a');
//   fireEvent.click(toggleButton);
//   expect(getByTestId('body')).toHaveStyle('background-color: #e6e6e6');
// });



