import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  margin: 20px 40px;
  background-color: #ffffff;
  width: 260px;
  height: 320px;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 6px 6px 2em #888;
  cursor: pointer;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
  height: 80px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #b769a3;
`;

export const BoxFavoriteIcon = styled.button`
  position: absolute;
  margin-left: -6px;
  border: none;
  background: none;
`;

interface ImageProps {
  src?: string;
  alt?: string;
  notImage?: boolean;
}

export const BoxImage = styled.div<ImageProps>`
  margin: 10px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ notImage }) => (notImage ? '#eaeaea' : '')};
  border-radius: 10px;
`;

interface ImageProps {
  src?: string;
  alt?: string;
  notImage?: boolean;
}
export const Image = styled.img.attrs<ImageProps>(({ src, alt }) => ({
  src: src,
  alt: alt,
  width: '100%',
  height: '100%',
}))<ImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  display: ${({ notImage }) => (notImage ? 'none' : '')};
`;
