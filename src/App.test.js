import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  let button;
  let modal;

  test('should render only one modal', () => {
    given_a_button();
    when_button_is_clicked();
    then_one_modal_should_be_rendered();
  });

  function given_a_button() {
    render(<App/>);
    button = screen.getByText(/open modal/i);
  }

  function when_button_is_clicked() {
    fireEvent.click(button);
  }

  function then_one_modal_should_be_rendered() {
    modal = screen.getByText(/this is a modal/i);
    expect(modal).toBeInTheDocument();
  }
});
