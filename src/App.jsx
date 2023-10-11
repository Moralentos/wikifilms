import Header from './components/HeaderBlock/Header';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Single from './pages/SinglePage/Single';
import Series from './pages/SeriesPage/Series';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>} />
          <Route path='/film' element={<Single></Single>} />
          <Route path='/series' element={<Series></Series>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
