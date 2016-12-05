import {Table, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {Chapter, User} from ".";

@Table()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  cover: string;

  @ManyToOne(type => User, user => user.sessions)
  user: User;

  @OneToMany(type => Chapter, chapter => chapter.book)
  chapters: Chapter[];

//  @Column()
//  chapters: Array<any>;

  @Column()
  duration: number;

  @Column()
  author: string;

  @Column()
  anonymous: boolean;
}
