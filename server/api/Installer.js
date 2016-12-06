"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const fs = require('fs');
const typeorm_1 = require("typeorm");
const db_1 = require('../db');
var Installer;
(function (Installer) {
    function install(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var debug = true;
            if (debug)
                console.log(' ready to install');
            let connection = typeorm_1.getConnectionManager().get();
            let userRepository = connection.getRepository(db_1.User);
            let users = yield userRepository.find(db_1.User);
            if (debug)
                console.log(users);
            if (users.length) {
                console.log('users.length = ', users.length);
                res.send('Wimping out, you got Users already!');
                return;
            }
            if (debug)
                console.log('not found any users, making a new');
            let user = new db_1.User();
            user.username = "admin";
            user.hash = "password";
            user.name = "root";
            user.email = "abc.d@xalior.com";
            user.admin = true;
            yield userRepository.persist(user);
            // hack admin session for desktop for now...
            if (debug)
                console.log('user done');
            // DELETE ME
            let session = new db_1.Session();
            session.user = user;
            session.key = "NONE_SHALL_PASS";
            session.use = "Default Installer Created Key...";
            let sessionRepository = connection.getRepository(db_1.Session);
            yield sessionRepository.persist(session);
            if (debug)
                console.log('starting on the books);');
            let bookRepository = connection.getRepository(db_1.Book);
            let books = yield bookRepository.find(db_1.Book);
            if (books.length) {
                res.send('Wimping out, you got books...');
            }
            else {
                let chapterRepository = connection.getRepository(db_1.Chapter);
                let book = new db_1.Book();
                book.title = "Aesop's Fables, Volume 1";
                book.author = "LibraVox";
                book.description = "Librivox recording of Aesop's Fables, Volume 1 (Fables 1-25).\n\nDating back to the 6th century BC, Aesop's Fables tell universal truths through the use of simple allegories that are\n\neasily understood. Though almost nothing is known of Aesop himself, and some scholars question whether he existed at\n\nall, these stories stand as timeless classics known in almost every culture in the world. This is volume 1 of 12.\n\n\n\nRead by:\n\n\n\nIntroduction: Chip\n\nFables 1-2: Joplin\n\nFables 3-4: Kristin Luoma\n\nFable 5: worraps\n\nFable 6: Annie Coleman\n\nFables 7-8: Beth Dudek\n\nFable 9: Kara Shallenberg\n\nFables 10-11: Kristin Luoma\n\nFables 12-13: Beth Dudek\n\nFables 14-15: Kristin Luoma\n\nFable 16: worraps\n\nFables 17-18: Annie Coleman\n\nFable 19: Robert Garrison\n\nFable 20: Kara Shallenberg\n\nFable 21: Annie Coleman\n\nFables 22-25: Alice Elizabeth Still\n\n\n\nFor more free audiobooks or to become a volunteer reader, please visit librivox.org. hosted on Archive.org";
                book.cover = "http://ia800500.us.archive.org/5/items/aesop_fables_volume_one_librivox/aesops_fables_one_1012.jpg";
                book.duration = 0;
                book.anonymous = true;
                yield bookRepository.persist(book);
                console.log('ready to chapter);');
                let chapterNumber = 0;
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
                    let chapter = new db_1.Chapter();
                    chapter.book = book;
                    chapter.title = thisChapter.title;
                    chapter.track = thisChapter.track;
                    chapter.index = chapterNumber;
                    yield chapterRepository.persist(chapter);
                }
                book = new db_1.Book();
                book.title = "Aesop's Fables, Volume 2";
                book.author = "LibraVox";
                book.description = "Librivox recording of Aesop's Fables, Volume 2 (Fables 26-50) Dating back to the 6th century BC, Aesop's Fables tell universal truths through the use of simple allegories that are easily understood. Though almost nothing is known of Aesop himself, and some scholars question whether he existed at all, these stories stand as timeless classics known in almost every culture in the world. This is volume 2 of 12.  (Summary by ChipDoc) For more free audiobooks or to become a volunteer reader, please visit librivox.org";
                book.cover = "http://ia800300.us.archive.org/19/items/aesop_fables_volume_two_librivox/aesops_fables_two_1012.jpg";
                book.duration = 0;
                book.anonymous = false;
                yield bookRepository.persist(book);
                chapterNumber = 0;
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
                    let chapter = new db_1.Chapter();
                    chapter.book = book;
                    chapter.title = thisChapter.title;
                    chapter.track = thisChapter.track;
                    chapter.index = chapterNumber;
                    yield chapterRepository.persist(chapter);
                    chapterNumber++;
                }
                res.send('created example public books...');
            }
        });
    }
    Installer.install = install;
    function loadJson(req, res) {
        var connection = typeorm_1.getConnectionManager().get();
        let bookRepository = connection.getRepository(db_1.Book);
        function readFiles(dirname, onFileContent, onError) {
            fs.readdir(dirname, function (err, filenames) {
                if (err) {
                    onError(err);
                    return;
                }
                filenames.forEach(function (filename) {
                    fs.readFile(dirname + filename, 'utf-8', function (err, content) {
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
        readFiles(__dirname + '/../../import/', function (filename, content) {
            data[filename] = content;
            console.log(content);
        }, function (err) {
            throw err;
        });
        res.send('did not that...');
    }
    Installer.loadJson = loadJson;
})(Installer = exports.Installer || (exports.Installer = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsVUFBVSxHQUFRO1lBQ25CLE1BQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFHSCxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFOUIsQ0FBQztJQWxDZSxrQkFBUSxXQWtDdkIsQ0FBQTtBQUNILENBQUMsRUFwWWdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBb1l6QiIsImZpbGUiOiJhcGkvSW5zdGFsbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtnZXRDb25uZWN0aW9uTWFuYWdlcn0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7VXNlciwgQm9vaywgU2Vzc2lvbiwgQ2hhcHRlcn0gZnJvbSAnLi4vZGInXG5cbmV4cG9ydCBuYW1lc3BhY2UgSW5zdGFsbGVyIHtcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbGwocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSl7XG4gICAgdmFyIGRlYnVnID0gdHJ1ZTtcblxuICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coJyByZWFkeSB0byBpbnN0YWxsJyk7XG4gICAgbGV0IGNvbm5lY3Rpb24gPSBnZXRDb25uZWN0aW9uTWFuYWdlcigpLmdldCgpO1xuICAgIGxldCB1c2VyUmVwb3NpdG9yeSA9IGNvbm5lY3Rpb24uZ2V0UmVwb3NpdG9yeShVc2VyKTtcblxuICAgIGxldCB1c2VycyA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LmZpbmQoVXNlcik7XG4gICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyh1c2Vycyk7XG5cbiAgICBpZiAodXNlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygndXNlcnMubGVuZ3RoID0gJywgdXNlcnMubGVuZ3RoKTtcbiAgICAgIHJlcy5zZW5kKCdXaW1waW5nIG91dCwgeW91IGdvdCBVc2VycyBhbHJlYWR5IScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKCdub3QgZm91bmQgYW55IHVzZXJzLCBtYWtpbmcgYSBuZXcnKTtcblxuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICB1c2VyLnVzZXJuYW1lID0gXCJhZG1pblwiO1xuICAgIHVzZXIuaGFzaCA9IFwicGFzc3dvcmRcIjtcbiAgICB1c2VyLm5hbWUgPSBcInJvb3RcIjtcbiAgICB1c2VyLmVtYWlsID0gXCJhYmMuZEB4YWxpb3IuY29tXCI7XG4gICAgdXNlci5hZG1pbiA9IHRydWU7XG5cbiAgICBhd2FpdCB1c2VyUmVwb3NpdG9yeS5wZXJzaXN0KHVzZXIpO1xuICAgIC8vIGhhY2sgYWRtaW4gc2Vzc2lvbiBmb3IgZGVza3RvcCBmb3Igbm93Li4uXG5cbiAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKCd1c2VyIGRvbmUnKTtcblxuICAgICAgLy8gREVMRVRFIE1FXG4gICAgbGV0IHNlc3Npb24gPSBuZXcgU2Vzc2lvbigpO1xuICAgIHNlc3Npb24udXNlciA9IHVzZXI7XG4gICAgc2Vzc2lvbi5rZXkgPSBcIk5PTkVfU0hBTExfUEFTU1wiO1xuICAgIHNlc3Npb24udXNlID0gXCJEZWZhdWx0IEluc3RhbGxlciBDcmVhdGVkIEtleS4uLlwiO1xuXG4gICAgbGV0IHNlc3Npb25SZXBvc2l0b3J5ID0gY29ubmVjdGlvbi5nZXRSZXBvc2l0b3J5KFNlc3Npb24pO1xuICAgIGF3YWl0IHNlc3Npb25SZXBvc2l0b3J5LnBlcnNpc3Qoc2Vzc2lvbik7XG5cbiAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKCdzdGFydGluZyBvbiB0aGUgYm9va3MpOycpO1xuXG4gICAgbGV0IGJvb2tSZXBvc2l0b3J5ID0gY29ubmVjdGlvbi5nZXRSZXBvc2l0b3J5KEJvb2spO1xuICAgIGxldCBib29rcyA9IGF3YWl0IGJvb2tSZXBvc2l0b3J5LmZpbmQoQm9vayk7XG5cblxuICAgIGlmIChib29rcy5sZW5ndGgpIHtcbiAgICAgIHJlcy5zZW5kKCdXaW1waW5nIG91dCwgeW91IGdvdCBib29rcy4uLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2hhcHRlclJlcG9zaXRvcnkgPSBjb25uZWN0aW9uLmdldFJlcG9zaXRvcnkoQ2hhcHRlcik7XG5cbiAgICAgIGxldCBib29rID0gbmV3IEJvb2soKTtcbiAgICAgIGJvb2sudGl0bGUgPSBcIkFlc29wJ3MgRmFibGVzLCBWb2x1bWUgMVwiO1xuICAgICAgYm9vay5hdXRob3IgPSBcIkxpYnJhVm94XCI7XG4gICAgICBib29rLmRlc2NyaXB0aW9uID0gXCJMaWJyaXZveCByZWNvcmRpbmcgb2YgQWVzb3AncyBGYWJsZXMsIFZvbHVtZSAxIChGYWJsZXMgMS0yNSkuXFxuXFxuRGF0aW5nIGJhY2sgdG8gdGhlIDZ0aCBjZW50dXJ5IEJDLCBBZXNvcCdzIEZhYmxlcyB0ZWxsIHVuaXZlcnNhbCB0cnV0aHMgdGhyb3VnaCB0aGUgdXNlIG9mIHNpbXBsZSBhbGxlZ29yaWVzIHRoYXQgYXJlXFxuXFxuZWFzaWx5IHVuZGVyc3Rvb2QuIFRob3VnaCBhbG1vc3Qgbm90aGluZyBpcyBrbm93biBvZiBBZXNvcCBoaW1zZWxmLCBhbmQgc29tZSBzY2hvbGFycyBxdWVzdGlvbiB3aGV0aGVyIGhlIGV4aXN0ZWQgYXRcXG5cXG5hbGwsIHRoZXNlIHN0b3JpZXMgc3RhbmQgYXMgdGltZWxlc3MgY2xhc3NpY3Mga25vd24gaW4gYWxtb3N0IGV2ZXJ5IGN1bHR1cmUgaW4gdGhlIHdvcmxkLiBUaGlzIGlzIHZvbHVtZSAxIG9mIDEyLlxcblxcblxcblxcblJlYWQgYnk6XFxuXFxuXFxuXFxuSW50cm9kdWN0aW9uOiBDaGlwXFxuXFxuRmFibGVzIDEtMjogSm9wbGluXFxuXFxuRmFibGVzIDMtNDogS3Jpc3RpbiBMdW9tYVxcblxcbkZhYmxlIDU6IHdvcnJhcHNcXG5cXG5GYWJsZSA2OiBBbm5pZSBDb2xlbWFuXFxuXFxuRmFibGVzIDctODogQmV0aCBEdWRla1xcblxcbkZhYmxlIDk6IEthcmEgU2hhbGxlbmJlcmdcXG5cXG5GYWJsZXMgMTAtMTE6IEtyaXN0aW4gTHVvbWFcXG5cXG5GYWJsZXMgMTItMTM6IEJldGggRHVkZWtcXG5cXG5GYWJsZXMgMTQtMTU6IEtyaXN0aW4gTHVvbWFcXG5cXG5GYWJsZSAxNjogd29ycmFwc1xcblxcbkZhYmxlcyAxNy0xODogQW5uaWUgQ29sZW1hblxcblxcbkZhYmxlIDE5OiBSb2JlcnQgR2Fycmlzb25cXG5cXG5GYWJsZSAyMDogS2FyYSBTaGFsbGVuYmVyZ1xcblxcbkZhYmxlIDIxOiBBbm5pZSBDb2xlbWFuXFxuXFxuRmFibGVzIDIyLTI1OiBBbGljZSBFbGl6YWJldGggU3RpbGxcXG5cXG5cXG5cXG5Gb3IgbW9yZSBmcmVlIGF1ZGlvYm9va3Mgb3IgdG8gYmVjb21lIGEgdm9sdW50ZWVyIHJlYWRlciwgcGxlYXNlIHZpc2l0IGxpYnJpdm94Lm9yZy4gaG9zdGVkIG9uIEFyY2hpdmUub3JnXCI7XG4gICAgICBib29rLmNvdmVyID0gXCJodHRwOi8vaWE4MDA1MDAudXMuYXJjaGl2ZS5vcmcvNS9pdGVtcy9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9hZXNvcHNfZmFibGVzX29uZV8xMDEyLmpwZ1wiO1xuICAgICAgYm9vay5kdXJhdGlvbiA9IDA7XG4gICAgICBib29rLmFub255bW91cyA9IHRydWU7XG5cbiAgICAgIGF3YWl0IGJvb2tSZXBvc2l0b3J5LnBlcnNpc3QoYm9vayk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdyZWFkeSB0byBjaGFwdGVyKTsnKTtcbiAgICAgIGxldCBjaGFwdGVyTnVtYmVyOiBudW1iZXIgID0gMDtcbiAgICAgIGZvciAobGV0IHRoaXNDaGFwdGVyIG9mIFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJJbnRyb2R1Y3Rpb25cIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMDBfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMVwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8wMV9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZXMgMlwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8wMl9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZSAzXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly93d3cuYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV9vbmVfbGlicml2b3gvZmFibGVzXzAxXzAzX2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkZhYmxlIDVcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMDRfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGVzIDVcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMDVfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgNlwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8wNl9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZXMgN1wiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8wN19hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZXMgOFwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8wOF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZXMgOVwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8wOV9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZSAxMFwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vd3d3LmFyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfb25lX2xpYnJpdm94L2ZhYmxlc18wMV8xMF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJGYWJsZXMgMTFcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTFfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTJcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTJfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTNcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTNfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTRcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTRfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTVcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTVfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTZcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTZfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTdcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTdfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMThcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMThfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMTlcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMTlfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMjBcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMjBfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMjFcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMjFfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMjJcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMjJfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMjNcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMjNfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMjRcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMjRfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRmFibGUgMjVcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL3d3dy5hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX29uZV9saWJyaXZveC9mYWJsZXNfMDFfMjVfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9XG4gICAgICBdKSB7XG4gICAgICAgIGNoYXB0ZXJOdW1iZXIrKztcbiAgICAgICAgbGV0IGNoYXB0ZXIgPSBuZXcgQ2hhcHRlcigpO1xuICAgICAgICBjaGFwdGVyLmJvb2sgPSBib29rO1xuICAgICAgICBjaGFwdGVyLnRpdGxlID0gdGhpc0NoYXB0ZXIudGl0bGU7XG4gICAgICAgIGNoYXB0ZXIudHJhY2sgPSB0aGlzQ2hhcHRlci50cmFjaztcbiAgICAgICAgY2hhcHRlci5pbmRleCA9IGNoYXB0ZXJOdW1iZXI7XG4gICAgICAgIGF3YWl0IGNoYXB0ZXJSZXBvc2l0b3J5LnBlcnNpc3QoY2hhcHRlcik7XG4gICAgICB9XG5cblxuICAgICAgYm9vayA9IG5ldyBCb29rKCk7XG4gICAgICBib29rLnRpdGxlID0gXCJBZXNvcCdzIEZhYmxlcywgVm9sdW1lIDJcIjtcbiAgICAgIGJvb2suYXV0aG9yID0gXCJMaWJyYVZveFwiO1xuICAgICAgYm9vay5kZXNjcmlwdGlvbiA9IFwiTGlicml2b3ggcmVjb3JkaW5nIG9mIEFlc29wJ3MgRmFibGVzLCBWb2x1bWUgMiAoRmFibGVzIDI2LTUwKSBEYXRpbmcgYmFjayB0byB0aGUgNnRoIGNlbnR1cnkgQkMsIEFlc29wJ3MgRmFibGVzIHRlbGwgdW5pdmVyc2FsIHRydXRocyB0aHJvdWdoIHRoZSB1c2Ugb2Ygc2ltcGxlIGFsbGVnb3JpZXMgdGhhdCBhcmUgZWFzaWx5IHVuZGVyc3Rvb2QuIFRob3VnaCBhbG1vc3Qgbm90aGluZyBpcyBrbm93biBvZiBBZXNvcCBoaW1zZWxmLCBhbmQgc29tZSBzY2hvbGFycyBxdWVzdGlvbiB3aGV0aGVyIGhlIGV4aXN0ZWQgYXQgYWxsLCB0aGVzZSBzdG9yaWVzIHN0YW5kIGFzIHRpbWVsZXNzIGNsYXNzaWNzIGtub3duIGluIGFsbW9zdCBldmVyeSBjdWx0dXJlIGluIHRoZSB3b3JsZC4gVGhpcyBpcyB2b2x1bWUgMiBvZiAxMi4gIChTdW1tYXJ5IGJ5IENoaXBEb2MpIEZvciBtb3JlIGZyZWUgYXVkaW9ib29rcyBvciB0byBiZWNvbWUgYSB2b2x1bnRlZXIgcmVhZGVyLCBwbGVhc2UgdmlzaXQgbGlicml2b3gub3JnXCI7XG4gICAgICBib29rLmNvdmVyID0gXCJodHRwOi8vaWE4MDAzMDAudXMuYXJjaGl2ZS5vcmcvMTkvaXRlbXMvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvYWVzb3BzX2ZhYmxlc190d29fMTAxMi5qcGdcIjtcbiAgICAgIGJvb2suZHVyYXRpb24gPSAwO1xuICAgICAgYm9vay5hbm9ueW1vdXMgPSBmYWxzZTtcblxuICAgICAgYXdhaXQgYm9va1JlcG9zaXRvcnkucGVyc2lzdChib29rKTtcblxuICAgICAgY2hhcHRlck51bWJlciAgPSAwO1xuICAgICAgZm9yIChsZXQgdGhpc0NoYXB0ZXIgb2YgW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGb3ggYW5kIFRoZSBTdG9ya1wiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvZmFibGVzXzAyXzAxX2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBXb2xmIGluIFNoZWVw4oCZcyBDbG90aGluZ1wiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvZmFibGVzXzAyXzAyX2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTdGFnIGluIHRoZSBPeC1TdGFsbFwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvZmFibGVzXzAyXzAzX2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNaWxrbWFpZCBhbmQgSGVyIFBhaWxcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8wNF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgRG9scGhpbnMsIFRoZSBXaGFsZXMsIGFuZCBUaGUgU3ByYXRcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8wNV9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgRm94IGFuZCBUaGUgTW9ua2V5XCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMDZfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEFzcyBhbmQgVGhlIExhcC1Eb2dcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8wN19hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmlyLVRyZWUgYW5kIFRoZSBCcmFtYmxlXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMDhfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZyb2dz4oCZIENvbXBsYWludCBBZ2FpbnN0IFRoZSBTdW5cIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8wOV9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgRG9nLCBUaGUgQ29jaywgYW5kIFRoZSBGb3hcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8xMF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgR25hdCBhbmQgVGhlIEJ1bGxcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8xMV9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgQmVhciBhbmQgVGhlIFRyYXZlbGxlcnNcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8xMl9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2xhdmUgYW5kIFRoZSBMaW9uXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMTNfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZsZWEgYW5kIFRoZSBNYW5cIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8xNF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgQmVlIGFuZCBKdXBpdGVyXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMTVfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE9hayBhbmQgVGhlIFJlZWRzXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMTZfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEJsaW5kIE1hbiBhbmQgVGhlIEN1YlwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvZmFibGVzXzAyXzE3X2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBCb3kgYW5kIFRoZSBTbmFpbHNcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8xOF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgQXBlcyBhbmQgVGhlIFR3byBUcmF2ZWxsZXJzXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMTlfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEFzcyBhbmQgSGlzIEJ1cmRlbnNcIixcbiAgICAgICAgICBcInRyYWNrXCI6IFwiaHR0cDovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2Flc29wX2ZhYmxlc192b2x1bWVfdHdvX2xpYnJpdm94L2ZhYmxlc18wMl8yMF9hZXNvcF82NGtiLm1wM1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJUaGUgU2hlcGVyZOKAmXMgQm95IGFuZCB0aGUgV29sZlwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvZmFibGVzXzAyXzIxX2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGb3ggYW5kIFRoZSBHb2F0XCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMjJfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZpc2hlcm1hbiBhbmQgVGhlIFNwcmF0XCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMjNfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEJvYXN0aW5nIFRyYXZlbGxlclwiLFxuICAgICAgICAgIFwidHJhY2tcIjogXCJodHRwOi8vYXJjaGl2ZS5vcmcvZG93bmxvYWQvYWVzb3BfZmFibGVzX3ZvbHVtZV90d29fbGlicml2b3gvZmFibGVzXzAyXzI0X2Flc29wXzY0a2IubXAzXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDcmFiIGFuZCBIaXMgTW90aGVyXCIsXG4gICAgICAgICAgXCJ0cmFja1wiOiBcImh0dHA6Ly9hcmNoaXZlLm9yZy9kb3dubG9hZC9hZXNvcF9mYWJsZXNfdm9sdW1lX3R3b19saWJyaXZveC9mYWJsZXNfMDJfMjVfYWVzb3BfNjRrYi5tcDNcIlxuICAgICAgICB9XG4gICAgICBdKSB7XG4gICAgICAgIGxldCBjaGFwdGVyID0gbmV3IENoYXB0ZXIoKTtcbiAgICAgICAgY2hhcHRlci5ib29rID0gYm9vaztcbiAgICAgICAgY2hhcHRlci50aXRsZSA9IHRoaXNDaGFwdGVyLnRpdGxlO1xuICAgICAgICBjaGFwdGVyLnRyYWNrID0gdGhpc0NoYXB0ZXIudHJhY2s7XG4gICAgICAgIGNoYXB0ZXIuaW5kZXggPSBjaGFwdGVyTnVtYmVyO1xuICAgICAgICBhd2FpdCBjaGFwdGVyUmVwb3NpdG9yeS5wZXJzaXN0KGNoYXB0ZXIpO1xuICAgICAgICBjaGFwdGVyTnVtYmVyKys7XG4gICAgICB9XG4gICAgICByZXMuc2VuZCgnY3JlYXRlZCBleGFtcGxlIHB1YmxpYyBib29rcy4uLicpO1xuICAgIH1cblxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGxvYWRKc29uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2Upe1xuICAgIHZhciBjb25uZWN0aW9uID0gZ2V0Q29ubmVjdGlvbk1hbmFnZXIoKS5nZXQoKTtcblxuICAgIGxldCBib29rUmVwb3NpdG9yeSA9IGNvbm5lY3Rpb24uZ2V0UmVwb3NpdG9yeShCb29rKTtcblxuICAgIGZ1bmN0aW9uIHJlYWRGaWxlcyhkaXJuYW1lOiBzdHJpbmcsIG9uRmlsZUNvbnRlbnQ6IGFueSwgb25FcnJvcjogYW55ICkge1xuICAgICAgZnMucmVhZGRpcihkaXJuYW1lLCBmdW5jdGlvbiAoZXJyLCBmaWxlbmFtZXMpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmlsZW5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgICBmcy5yZWFkRmlsZShkaXJuYW1lICsgZmlsZW5hbWUsICd1dGYtOCcsIGZ1bmN0aW9uIChlcnI6IGFueSwgY29udGVudDogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25GaWxlQ29udGVudChmaWxlbmFtZSwgY29udGVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICByZWFkRmlsZXMoX19kaXJuYW1lICsgJy8uLi8uLi9pbXBvcnQvJywgZnVuY3Rpb24gKGZpbGVuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgKDxhbnk+ZGF0YSlbZmlsZW5hbWVdID0gY29udGVudDtcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuXG5cbiAgICByZXMuc2VuZCgnZGlkIG5vdCB0aGF0Li4uJyk7XG5cbiAgfVxufVxuIl19
