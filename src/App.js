import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  return (
    <Provider store={store}>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
