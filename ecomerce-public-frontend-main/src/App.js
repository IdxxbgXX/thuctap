import { Switch, Route } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer/Footer';
import Login from './components/User/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/User/Register';
import Page from './pages/Page';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route path="/" component={Page} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/Register" component={Register} exact />
      </Switch>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
