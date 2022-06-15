import { Route, Routes } from 'react-router-dom';
import GlobalContext from './context';
import Details from './pages/detail';
import FavoriteBooks from './pages/favoriteBooks';
import Header from './pages/header';
import Home from './pages/home';

function App() {
  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/favorite' element={<FavoriteBooks />} />
      </Routes>
    </GlobalContext>
  );
}

export default App;
