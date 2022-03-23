//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Detail } from './components/Detail';

//Styles
import './css/App.css';
import './css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
