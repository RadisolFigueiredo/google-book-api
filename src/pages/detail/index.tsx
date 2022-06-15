import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import * as S from './styles';

const Details = () => {
  const location = useLocation();

  const data = useMemo(() => (location?.state as any).data, [location?.state]);

  const image = data.volumeInfo.imageLinks?.thumbnail;

  return (
    <S.Container>
      <S.BoxTitle>
        <S.Title>{data.volumeInfo.title}</S.Title>
        <h3>
          {data.searchInfo?.textSnippet
            ? `"${data.searchInfo?.textSnippet}"`
            : 'Desculpe, não foi encontrado nenhum trecho...'}
        </h3>
        <S.Author>{data.volumeInfo.authors}</S.Author>
      </S.BoxTitle>
      <S.BoxRow>
        <S.BoxImage notImage={!image}>
          {!image && (
            <ImageNotSupportedIcon
              fontSize='large'
              style={{ color: '#333333' }}
            />
          )}
          <S.Image notImage={!image} src={image} alt={data.volumeInfo.title} />
        </S.BoxImage>

        <S.BoxInfoDescription>
          <S.BoxInfo>
            <S.Description>Descrição</S.Description>
            <S.Texts>
              {data.volumeInfo.description
                ? data.volumeInfo.description
                : 'Nenhuma descrição disponível no momento :('}
            </S.Texts>
          </S.BoxInfo>

          <S.BoxInfo>
            <S.Texts>
              Para mais informações <a href={data.volumeInfo.infoLink}>aqui</a>.
            </S.Texts>
          </S.BoxInfo>
        </S.BoxInfoDescription>
      </S.BoxRow>
    </S.Container>
  );
};

export default Details;
