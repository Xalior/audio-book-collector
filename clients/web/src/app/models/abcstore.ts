import {Book} from "./book";

export interface ABCStore {
  books: Book[];
  currentBook: Book;
};
