import { useContext, useState } from 'react';
import BookContext from '../../context/books';
import { api } from '../../services/api';

import FavoriteIcon from '@mui/icons-material/Favorite';

import * as S from './styles';

const Header = () => {
  const [search, setSearch] = useState('');

  const { setBookList, favoriteBooks } = useContext(BookContext);

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const { data } = await api.get(
        `volumes?q=${search}&key=AIzaSyBvkUxtXqmY92mP5yJrg4DcLXqn7wC8myA&maxResults=40`
      );
      setBookList(data.items);
    } catch (err) {
      console.log(err);
      setBookList([]);
    }
  }

  

  const resetItems = () => {
    setSearch('');
  };

  return (
    <S.Container>
      <S.BoxLogo to={'/'} onClick={() => resetItems()}>
        <S.Logo></S.Logo>
        <S.TextLogo>GOOGLE BOOK</S.TextLogo>
      </S.BoxLogo>
      <S.BoxSearch>
        <S.Search onSubmit={handleSubmit}>
          <S.Input
            type='text'
            name='search'
            id='search'
            placeholder='Busque seu livro'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.Search>
      </S.BoxSearch>
      <S.BoxIconFavorites
        to={'/favorite'}
        hasFavorite={favoriteBooks.length > 0}
      >
        <FavoriteIcon fontSize='large' />
        <S.ChipFavoriteLength hasFavorite={favoriteBooks.length > 0}>
          <S.ProductInCartLength>{favoriteBooks.length}</S.ProductInCartLength>
        </S.ChipFavoriteLength>
      </S.BoxIconFavorites>
    </S.Container>
  );
};

export default Header;
