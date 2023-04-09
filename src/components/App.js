import '../styles/App.scss';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Landing></Landing>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/what-is"
          element={
            <>
              <Header></Header>

              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/how-to"
          element={
            <>
              <Header></Header>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header></Header>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header></Header>
              <Footer></Footer>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
