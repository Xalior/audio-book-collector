
export class Book {
  id: string = '';
  title: string = '';
  author: string = '';
  chapters: Array<any> = new Array();
  duration: number = 0; // in minutes
  description: string ='';
  cover: string = 'https://cheshirelibraryblog.files.wordpress.com/2013/11/cd.jpg';
  isDone: boolean = false;

}

export const BookReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_BOOKS':
      return payload;
    case 'CREATE_BOOK':
      return [...state, payload];
    case 'UPDATE_BOOK':
      return state.map(book => {
        return book.id === payload.id ? Object.assign({}, book, payload) : book;
      });
    case 'DELETE_BOOK':
      return state.filter(book => {
        return book.id !== payload.id;
      });
    default:
      return state;
  }
};
