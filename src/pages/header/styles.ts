import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #eaeaea;
  border: 1px solid #c9c9c9;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  max-width: 100%;
`;

export const BoxLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.div`
  display: flex;
  border: 2px;
  background-color: #ffffff;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  align-items: center;
`;

export const TextLogo = styled.h6`
  color: #b769a3;
  text-align: center;
  font-size: 16px;
  position: absolute;
  padding-left: 20px;
`;

export const BoxSearch = styled.div`
  max-width: 50%;
  width: 100%;
  height: 30px;
  border-radius: 20px;
`;

export const Search = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  font-size: 18px;
  padding-left: 15px;
  border: none;
`;

interface FavoriteProps {
  hasFavorite?: boolean;
}

export const BoxIconFavorites = styled(Link)<FavoriteProps>`
  text-decoration: none;
  color: ${({ hasFavorite }) => (hasFavorite ? 'red' : '#ffffff')};
  margin-right: 40px;
`;

export const ChipFavoriteLength = styled.div<FavoriteProps>`
  border: 1px solid transparent;
  background-color: #ffffff;
  width: 18px;
  height: 20px;
  border-radius: 30px;
  position: absolute;
  top: 10px;
  right: -4px;
  margin-right: 80px;
  display: ${({ hasFavorite }) => (hasFavorite ? '' : 'none')}; ;
`;
export const ProductInCartLength = styled.p<FavoriteProps>`
  color: ${({ hasFavorite }) => (hasFavorite ? '#ffffff' : '#b769a3')};
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: -13px;
  right: 5px;
`;
