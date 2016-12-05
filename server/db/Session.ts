import {Table, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {User, Book} from ".";

@Table()
export class Session {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.sessions)
  user: User;

  @Column()
  key: string;

  @Column({
    nullable: true
  })
  use: string;

  @Column({
    nullable: true
  })
  created_at: string;

}
