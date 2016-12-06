
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
