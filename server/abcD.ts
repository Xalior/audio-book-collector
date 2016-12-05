import * as express from 'express';
import * as cookieParser from 'cookie-parser';

import {initConnection, Book,User} from './db'
import {Installer, Books, Users} from './api'
import {getConnectionManager} from "typeorm";
import {LoginRequired} from "./lib/auth";

export class abcD {
  private _App: express.Express;

  constructor() {
    this._App = express();

    initConnection().then(async connection => {});

    this.addMiddleware();
    this.setRoutes();
    this.startServer();
  }

  public addMiddleware() {
    this._App.use(cookieParser());

    // DecorateUser (on req)
    this._App.use(async function (req, res, next) {
      const cookie = req.cookies.abc_id;

      const [user, key] = cookie.split(":");

      // get our user...
      var connection = getConnectionManager().get();
      let userRepo = connection.getRepository(User);
      let thisUser = await userRepo.createQueryBuilder("users")
        .where("username=:userName")
        .innerJoinAndSelect('session', 'session', 'ON', 'session.key=:sessionKey', {
          sessionKey: key
        })
        .setParameters({
          userName: user,
          sessionKey: key
        })
        .setMaxResults(1)
        .getResults();

      console.log('DecorateUser found ', thisUser);

      (<any>req)['user'] = thisUser[0];

      console.log(req.protocol + '://' + req.get('host') + '/');
      next();
    });

  }

  public setRoutes() {
    // functional
    this._App.get('/api/books', Books.all);

    // utility
    this._App.get('/api/install', Installer.install);
    this._App.get('/import', Installer.loadJson);

    // meta
    this._App.post('/api/login', Users.login);
    this._App.get('/api/user', Users.info);

    // wtf
    this._App.get('/', this._default);
  }

  public startServer() {
    this._App.listen(5000, function () {
      console.log('abcD running: listening on port 5000');
    });
  }

  private _default(req: express.Request, res: express.Response) {
    res.send('abd.d server is running, you should map this route to a client, maybe?');
  }
}
