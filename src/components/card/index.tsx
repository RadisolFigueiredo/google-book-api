import BookContext from '../../context/books';
import { useContext } from 'react';
import { BookType } from '../../context/books';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

import * as S from './styles';

interface Props {
  to: string;
  state: any;
  item: BookType;
  notImage: boolean;
  iconFavorite: boolean;
  title: string;
  hasImage: boolean;
  src: string | undefined;
  alt: string;
  id: string;
}

const Card = ({
  to,
  state,
  notImage,
  iconFavorite,
  title,
  hasImage,
  src,
  alt,
  item,
  id,
}: Props) => {
  const { addBook, removeBook } = useContext(BookContext);

  return (
    <S.Card to={to} state={state}>
      <S.BoxFavoriteIcon onClick={(e) => e.preventDefault()}>
        {iconFavorite ? (
          <FavoriteIcon
            onClick={() => removeBook(id)}
            style={{ color: 'red' }}
          />
        ) : (
          <FavoriteBorderIcon onClick={() => addBook(item)} />
        )}
      </S.BoxFavoriteIcon>
      <S.BoxTitle>
        <S.Title>{title}</S.Title>
      </S.BoxTitle>
      <S.BoxImage notImage={notImage}>
        {hasImage && (
          <ImageNotSupportedIcon
            fontSize='large'
            style={{ color: '#333333' }}
          />
        )}
        <S.Image notImage={notImage} src={src} alt={alt} />
      </S.BoxImage>
    </S.Card>
  );
};

export default Card;
