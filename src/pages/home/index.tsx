import { useContext } from 'react';
import BookContext from '../../context/books';

import Card from '../../components/card';
import { notFound } from '../../utils/bookNotFound';

import * as S from './styles';

const Home = () => {
  const { bookList, favoriteBooks } =
    useContext(BookContext);

  const bookNotFound = notFound(!bookList, 'Ops, livro não encontrado');

  return (
    <S.Container>
      <>
        {bookNotFound}
        {!bookNotFound && (
          <>
            {bookList.map((item) => {
              const image = item.volumeInfo.imageLinks?.thumbnail;
              return (
                <Card
                  to={`/detail/${item.id}`}
                  state={{ data: item }}
                  key={item.id}
                  iconFavorite={favoriteBooks.some(
                    (favorite) => favorite.id === item.id
                  )}
                  item={item}
                  id={item.id}
                  title={item.volumeInfo.title}
                  notImage={!image}
                  src={image}
                  alt={item.volumeInfo.title}
                  hasImage={!image}
                />
              );
            })}
          </>
        )}
      </>
    </S.Container>
  );
};

export default Home;
