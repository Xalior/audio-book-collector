import * as express from 'express';

import {initConnection, Book,User} from '../db';

export module Users {
  export async function info(req: express.Request, res: express.Response) {
    const me: User = (<any>req)['user'];

    if(me) {
      res.json({
        "username": me.username,
        "name": me.name,
        "email": me.email,
        "admin": me.admin
      });
    } else {
      res.json(false);
    }
  }

  export async function login(req: express.Request, res: express.Response) {
    console.log("Users.login");
    console.log(req);
    console.log(req.cookies);
    res.json(req.cookies);
  }
}
