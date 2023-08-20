import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactReducer from '../redux/userReducer';
import Form from '../components/Form/Form';



const renderWithRedux = (
  component,
  { initialState, store = createStore(contactReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('<Form />', () => {
  test('renders the form and checks validation', () => {
    renderWithRedux(<Form />);

    // Test initial state
    expect(screen.getByLabelText(/first name/i)).toHaveValue('');
    expect(screen.getByLabelText(/last name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');

    // Submit the form
    fireEvent.click(screen.getByText(/Відправити/i));

    // Check validation messages
    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();

    // Update fields and check values
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'Tinky' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Winky' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'Lala@gmail.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Po' },
    });

    expect(screen.getByLabelText(/first name/i)).toHaveValue('Tinky');
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Winky');
    expect(screen.getByLabelText(/email/i)).toHaveValue('Lala@gmail.com');
    expect(screen.getByLabelText(/message/i)).toHaveValue('Po');
  });
});
