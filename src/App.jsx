import Header from './components/HeaderBlock/Header';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Single from './pages/SinglePage/Single';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>} />
          <Route path='/film' element={<Single></Single>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
