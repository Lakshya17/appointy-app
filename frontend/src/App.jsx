import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition: Bounce
                style={{ color: "#000" }}
            />
    </>
  )
}

export default App
