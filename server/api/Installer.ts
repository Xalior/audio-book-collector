import * as express from 'express'
import * as fs from 'fs';
import {getConnectionManager} from "typeorm";
import {User, Book, Session, Chapter} from '../db'

export namespace Installer {
  export async function install(req: express.Request, res: express.Response){
    var debug = true;

    if (debug) console.log(' ready to install');
    let connection = getConnectionManager().get();
    let userRepository = connection.getRepository(User);

    let users = await userRepository.find(User);
    if (debug) console.log(users);

    if (users.length) {
      console.log('users.length = ', users.length);
      res.send('Wimping out, you got Users already!');
      return;
    }
    if (debug) console.log('not found any users, making a new');

    let user = new User();
    user.username = "admin";
    user.hash = "password";
    user.name = "root";
    user.email = "abc.d@xalior.com";
    user.admin = true;

    await userRepository.persist(user);
    // hack admin session for desktop for now...

    if (debug) console.log('user done');

      // DELETE ME
    let session = new Session();
    session.user = user;
    session.key = "NONE_SHALL_PASS";
    session.use = "Default Installer Created Key...";

    let sessionRepository = connection.getRepository(Session);
    await sessionRepository.persist(session);

    if (debug) console.log('starting on the books);');

    let bookRepository = connection.getRepository(Book);
    let books = await bookRepository.find(Book);


    if (books.length) {
      res.send('Wimping out, you got books...');
    } else {
      let chapterRepository = connection.getRepository(Chapter);

      let book = new Book();
      book.title = "Aesop's Fables, Volume 1";
      book.author = "LibraVox";
      book.description = "Librivox recording of Aesop's Fables, Volume 1 (Fables 1-25).\n\nDating back to the 6th century BC, Aesop's Fables tell universal truths through the use of simple allegories that are\n\neasily understood. Though almost nothing is known of Aesop himself, and some scholars question whether he existed at\n\nall, these stories stand as timeless classics known in almost every culture in the world. This is volume 1 of 12.\n\n\n\nRead by:\n\n\n\nIntroduction: Chip\n\nFables 1-2: Joplin\n\nFables 3-4: Kristin Luoma\n\nFable 5: worraps\n\nFable 6: Annie Coleman\n\nFables 7-8: Beth Dudek\n\nFable 9: Kara Shallenberg\n\nFables 10-11: Kristin Luoma\n\nFables 12-13: Beth Dudek\n\nFables 14-15: Kristin Luoma\n\nFable 16: worraps\n\nFables 17-18: Annie Coleman\n\nFable 19: Robert Garrison\n\nFable 20: Kara Shallenberg\n\nFable 21: Annie Coleman\n\nFables 22-25: Alice Elizabeth Still\n\n\n\nFor more free audiobooks or to become a volunteer reader, please visit librivox.org. hosted on Archive.org";
      book.cover = "http://ia800500.us.archive.org/5/items/aesop_fables_volume_one_librivox/aesops_fables_one_1012.jpg";
      book.duration = 0;
      book.anonymous = true;

      await bookRepository.persist(book);

      console.log('ready to chapter);');
      let chapterNumber: number  = 0;
      for (let thisChapter of [
        {
          "title": "Introduction",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_00_aesop_64kb.mp3"
        },

        {
          "title": "Fable 1",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_01_aesop_64kb.mp3"
        },

        {
          "title": "Fables 2",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_02_aesop_64kb.mp3"
        },

        {
          "title": "Fable 3",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_03_aesop_64kb.mp3"
        },

        {
          "title": "Fable 5",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_04_aesop_64kb.mp3"
        },

        {
          "title": "Fables 5",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_05_aesop_64kb.mp3"
        },

        {
          "title": "Fable 6",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_06_aesop_64kb.mp3"
        },

        {
          "title": "Fables 7",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_07_aesop_64kb.mp3"
        },

        {
          "title": "Fables 8",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_08_aesop_64kb.mp3"
        },

        {
          "title": "Fables 9",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_09_aesop_64kb.mp3"
        },

        {
          "title": "Fable 10",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_10_aesop_64kb.mp3"
        },

        {
          "title": "Fables 11",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_11_aesop_64kb.mp3"
        },

        {
          "title": "Fable 12",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_12_aesop_64kb.mp3"
        },

        {
          "title": "Fable 13",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_13_aesop_64kb.mp3"
        },

        {
          "title": "Fable 14",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_14_aesop_64kb.mp3"
        },

        {
          "title": "Fable 15",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_15_aesop_64kb.mp3"
        },

        {
          "title": "Fable 16",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_16_aesop_64kb.mp3"
        },

        {
          "title": "Fable 17",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_17_aesop_64kb.mp3"
        },

        {
          "title": "Fable 18",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_18_aesop_64kb.mp3"
        },

        {
          "title": "Fable 19",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_19_aesop_64kb.mp3"
        },

        {
          "title": "Fable 20",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_20_aesop_64kb.mp3"
        },

        {
          "title": "Fable 21",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_21_aesop_64kb.mp3"
        },

        {
          "title": "Fable 22",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_22_aesop_64kb.mp3"
        },

        {
          "title": "Fable 23",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_23_aesop_64kb.mp3"
        },

        {
          "title": "Fable 24",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_24_aesop_64kb.mp3"
        },

        {
          "title": "Fable 25",
          "track": "http://www.archive.org/download/aesop_fables_volume_one_librivox/fables_01_25_aesop_64kb.mp3"
        }
      ]) {
        chapterNumber++;
        let chapter = new Chapter();
        chapter.book = book;
        chapter.title = thisChapter.title;
        chapter.track = thisChapter.track;
        chapter.index = chapterNumber;
        await chapterRepository.persist(chapter);
      }


      book = new Book();
      book.title = "Aesop's Fables, Volume 2";
      book.author = "LibraVox";
      book.description = "Librivox recording of Aesop's Fables, Volume 2 (Fables 26-50) Dating back to the 6th century BC, Aesop's Fables tell universal truths through the use of simple allegories that are easily understood. Though almost nothing is known of Aesop himself, and some scholars question whether he existed at all, these stories stand as timeless classics known in almost every culture in the world. This is volume 2 of 12.  (Summary by ChipDoc) For more free audiobooks or to become a volunteer reader, please visit librivox.org";
      book.cover = "http://ia800300.us.archive.org/19/items/aesop_fables_volume_two_librivox/aesops_fables_two_1012.jpg";
      book.duration = 0;
      book.anonymous = false;

      await bookRepository.persist(book);

      chapterNumber  = 0;
      for (let thisChapter of [
        {
          "title": "The Fox and The Stork",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_01_aesop_64kb.mp3"
        },

        {
          "title": "The Wolf in Sheep’s Clothing",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_02_aesop_64kb.mp3"
        },

        {
          "title": "The Stag in the Ox-Stall",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_03_aesop_64kb.mp3"
        },

        {
          "title": "The Milkmaid and Her Pail",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_04_aesop_64kb.mp3"
        },

        {
          "title": "The Dolphins, The Whales, and The Sprat",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_05_aesop_64kb.mp3"
        },

        {
          "title": "The Fox and The Monkey",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_06_aesop_64kb.mp3"
        },

        {
          "title": "The Ass and The Lap-Dog",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_07_aesop_64kb.mp3"
        },

        {
          "title": "The Fir-Tree and The Bramble",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_08_aesop_64kb.mp3"
        },

        {
          "title": "The Frogs’ Complaint Against The Sun",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_09_aesop_64kb.mp3"
        },

        {
          "title": "The Dog, The Cock, and The Fox",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_10_aesop_64kb.mp3"
        },

        {
          "title": "The Gnat and The Bull",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_11_aesop_64kb.mp3"
        },

        {
          "title": "The Bear and The Travellers",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_12_aesop_64kb.mp3"
        },

        {
          "title": "The Slave and The Lion",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_13_aesop_64kb.mp3"
        },

        {
          "title": "The Flea and The Man",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_14_aesop_64kb.mp3"
        },

        {
          "title": "The Bee and Jupiter",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_15_aesop_64kb.mp3"
        },

        {
          "title": "The Oak and The Reeds",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_16_aesop_64kb.mp3"
        },

        {
          "title": "The Blind Man and The Cub",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_17_aesop_64kb.mp3"
        },

        {
          "title": "The Boy and The Snails",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_18_aesop_64kb.mp3"
        },

        {
          "title": "The Apes and The Two Travellers",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_19_aesop_64kb.mp3"
        },

        {
          "title": "The Ass and His Burdens",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_20_aesop_64kb.mp3"
        },

        {
          "title": "The Sheperd’s Boy and the Wolf",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_21_aesop_64kb.mp3"
        },

        {
          "title": "The Fox and The Goat",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_22_aesop_64kb.mp3"
        },

        {
          "title": "The Fisherman and The Sprat",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_23_aesop_64kb.mp3"
        },

        {
          "title": "The Boasting Traveller",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_24_aesop_64kb.mp3"
        },

        {
          "title": "The Crab and His Mother",
          "track": "http://archive.org/download/aesop_fables_volume_two_librivox/fables_02_25_aesop_64kb.mp3"
        }
      ]) {
        let chapter = new Chapter();
        chapter.book = book;
        chapter.title = thisChapter.title;
        chapter.track = thisChapter.track;
        chapter.index = chapterNumber;
        await chapterRepository.persist(chapter);
        chapterNumber++;
      }
      res.send('created example public books...');
    }

  }

  export function loadJson(req: express.Request, res: express.Response){
    var connection = getConnectionManager().get();

    let bookRepository = connection.getRepository(Book);

    function readFiles(dirname: string, onFileContent: any, onError: any ) {
      fs.readdir(dirname, function (err, filenames) {
        if (err) {
          onError(err);
          return;
        }
        filenames.forEach(function (filename: string) {
          fs.readFile(dirname + filename, 'utf-8', function (err: any, content: any) {
            if (err) {
              onError(err);
              return;
            }
            onFileContent(filename, content);
          });
        });
      });
    }

    var data = {};
    readFiles(__dirname + '/../../import/', function (filename: string, content: string) {
      (<any>data)[filename] = content;
      console.log(content);
    }, function (err: any) {
      throw err;
    });


    res.send('did not that...');

  }
}
