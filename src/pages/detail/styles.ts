import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 20%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
`;

export const BoxTitle = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #b769a3;
`;

export const Author = styled.h4`
  text-align: right;
  color: #b769a3;

`;

export const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const BoxInfoDescription = styled.div`
  width: 60%;
`;

export const BoxInfo = styled.div`
  margin: 0 20px;
`;

export const Description = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #b769a3;

`;

export const Texts = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

interface ImageProps {
  src?: string;
  alt?: string;
  notImage?: boolean;
}

export const BoxImage = styled.div<ImageProps>`
  margin: 10px;
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ notImage }) => (notImage ? '#eaeaea' : '')};
  border-radius: 10px;
`;

export const Image = styled.img.attrs<ImageProps>(({ src, alt }) => ({
  src: src,
  alt: alt,
  height: '300px',
}))<ImageProps>`
  display: ${({ notImage }) => (notImage ? 'none' : '')};
`;
