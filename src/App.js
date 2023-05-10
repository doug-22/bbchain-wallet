import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        theme="light"
        position="top-center"
        autoClose={5000}
        newestOnTop
        bodyStyle={{ fontSize: '14px' }}
      />
    </>
  );
}

export default App;
