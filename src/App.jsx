import Header from './components/HeaderBlock/Header';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Single from './pages/SinglePage/Single';
import Series from './pages/SeriesPage/Series';
import Movies from './pages/MoviesPage/Movies';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isCount = useSelector((state) => state.seriesSlice.isCount);
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>} />
          <Route path='/series/:id' element={<Single></Single>} />
          <Route path='/series/page/:pageNum' element={<Series></Series>} />
          <Route path='/films' element={<Movies></Movies>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
