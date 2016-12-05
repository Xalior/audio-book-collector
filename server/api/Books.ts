import * as express from 'express';

import {getConnectionManager} from "typeorm";
import {Book,User} from '../db'


export namespace Books {
  export async function all(req: express.Request, res: express.Response) {
    var me: User = (<any>req)['user'];
    console.log('_getbooks for user: ',me);

    var books : Book[];

    const connection = getConnectionManager().get();
    let bookRepo = connection.getRepository(Book);
    if(me) {
      books = await bookRepo.createQueryBuilder("book")
        .innerJoinAndSelect("book.chapters", "chapters")
        .getResults();
    } else {
      books = await bookRepo.createQueryBuilder("book")
        .where("anonymous=:anonymous")
        .setParameters({
          anonymous: true
        })
        .innerJoinAndSelect("book.chapters", "chapters")
        .getResults();
    }

    res.json(books);
  }
}
