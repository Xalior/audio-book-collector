import {Table, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Session} from '.';

@Table()

export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  hash: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    nullable: true
  })
  lastSeen: number;

  @OneToMany(type => Session, session => session.user)
  sessions: Session[];

  @Column()
  admin: boolean;
}
