import "reflect-metadata";
import {createConnection, Connection} from "typeorm";
import { Book, User, Session, Chapter } from '.'

export function initConnection(): Promise<Connection> {
  return createConnection({
    driver: {
      type: "sqlite",
      storage: "abc_d.sqlite"
    },
    entities: [
      Book,
      User,
      Session,
      Chapter
    ],
    autoSchemaSync: true,
    logging: {
      logQueries: true,
      logFailedQueryError: true,
      logSchemaCreation: true,
    },
  });
}

// User Usuals...
export * from './User';
export * from './Session';

// Bookie Bits...
export * from './Book';
export * from './Chapter';

// Session Stuff...
