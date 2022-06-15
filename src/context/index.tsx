import { BookContextProvider } from './books';

const GlobalContext = ({ children }: any) => {
  return <BookContextProvider>{children}</BookContextProvider>;
};

export default GlobalContext;
