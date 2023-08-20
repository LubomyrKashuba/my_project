import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/Form/Form';

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
