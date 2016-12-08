import { Book, User } from ".";

export interface ABCStore {
  books: Book[];
  currentBook: Book;
  user: User;
};
