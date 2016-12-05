import {Table, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Book} from ".";

@Table()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Book, book => book.chapters)
  book: Book;

  @Column()
  track: string;

  @Column()
  title: string;

  @Column()
  index: number;

  @Column({
    nullable: true
  })
  created_at: string;

}
