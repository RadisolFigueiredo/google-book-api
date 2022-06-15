import { createContext, ReactNode, useState } from 'react';

export type BookType = {
  id: string;
  volumeInfo: {
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    title: string;
    subTitle: string;
    authors: string;
    priceDiscount: number;
  };
};

interface BookContextType {
  favoriteBooks: BookType[];
  addBook: (book: BookType) => void;
  removeBook: (bookId: string) => void;
  bookList: BookType[];
  setBookList: (books: BookType[]) => void;
}

interface PropsBookContext {
  children: ReactNode;
}

const initialState: BookType[] = [];

const BookContext = createContext<BookContextType>({
  favoriteBooks: initialState,
  addBook: (book: BookType) => {},
  removeBook: (bookId: string) => {},
  bookList: initialState,
  setBookList: (books: BookType[]) => {},
});

const BookContextProvider = ({ children }: PropsBookContext) => {
  const [favoriteBooks, setFavoriteBook] = useState<BookType[]>(initialState);
  const [bookList, setBookList] = useState<BookType[]>(initialState);

  const addBook = (book: BookType) => {
    setFavoriteBook([...favoriteBooks, book]);
  };

  const removeBook = (bookId: string) => {
    setFavoriteBook(favoriteBooks.filter((item) => bookId !== item.id));
  };

  return (
    <BookContext.Provider
      value={{
        favoriteBooks,
        addBook,
        removeBook,
        bookList,
        setBookList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookContextProvider };
export default BookContext;
