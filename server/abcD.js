"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express = require('express');
const cookieParser = require('cookie-parser');
const db_1 = require('./db');
const api_1 = require('./api');
const typeorm_1 = require("typeorm");
class abcD {
    constructor() {
        this._App = express();
        db_1.initConnection().then((connection) => __awaiter(this, void 0, void 0, function* () { }));
        this.addMiddleware();
        this.setRoutes();
        this.startServer();
    }
    addMiddleware() {
        this._App.use(cookieParser());
        // DecorateUser (on req)
        this._App.use(function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                const cookie = req.cookies.abc_id;
                const [user, key] = cookie.split(":");
                // get our user...
                var connection = typeorm_1.getConnectionManager().get();
                let userRepo = connection.getRepository(db_1.User);
                let thisUser = yield userRepo.createQueryBuilder("users")
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
                req['user'] = thisUser[0];
                console.log(req.protocol + '://' + req.get('host') + '/');
                next();
            });
        });
    }
    setRoutes() {
        // functional
        this._App.get('/api/books', api_1.Books.all);
        // utility
        this._App.get('/api/install', api_1.Installer.install);
        this._App.get('/import', api_1.Installer.loadJson);
        // meta
        this._App.post('/api/login', api_1.Users.login);
        this._App.get('/api/user', api_1.Users.info);
        // wtf
        this._App.get('/', this._default);
    }
    startServer() {
        this._App.listen(5000, function () {
            console.log('abcD running: listening on port 5000');
        });
    }
    _default(req, res) {
        res.send('abd.d server is running, you should map this route to a client, maybe?');
    }
}
exports.abcD = abcD;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxNQUFNO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsd0VBQXdFLENBQUMsQ0FBQztJQUNyRixDQUFDO0FBQ0gsQ0FBQztBQXhFWSxZQUFJLE9Bd0VoQixDQUFBIiwiZmlsZSI6ImFiY0QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuXG5pbXBvcnQge2luaXRDb25uZWN0aW9uLCBCb29rLFVzZXJ9IGZyb20gJy4vZGInXG5pbXBvcnQge0luc3RhbGxlciwgQm9va3MsIFVzZXJzfSBmcm9tICcuL2FwaSdcbmltcG9ydCB7Z2V0Q29ubmVjdGlvbk1hbmFnZXJ9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge0xvZ2luUmVxdWlyZWR9IGZyb20gXCIuL2xpYi9hdXRoXCI7XG5cbmV4cG9ydCBjbGFzcyBhYmNEIHtcbiAgcHJpdmF0ZSBfQXBwOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fQXBwID0gZXhwcmVzcygpO1xuXG4gICAgaW5pdENvbm5lY3Rpb24oKS50aGVuKGFzeW5jIGNvbm5lY3Rpb24gPT4ge30pO1xuXG4gICAgdGhpcy5hZGRNaWRkbGV3YXJlKCk7XG4gICAgdGhpcy5zZXRSb3V0ZXMoKTtcbiAgICB0aGlzLnN0YXJ0U2VydmVyKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkTWlkZGxld2FyZSgpIHtcbiAgICB0aGlzLl9BcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcblxuICAgIC8vIERlY29yYXRlVXNlciAob24gcmVxKVxuICAgIHRoaXMuX0FwcC51c2UoYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICBjb25zdCBjb29raWUgPSByZXEuY29va2llcy5hYmNfaWQ7XG5cbiAgICAgIGNvbnN0IFt1c2VyLCBrZXldID0gY29va2llLnNwbGl0KFwiOlwiKTtcblxuICAgICAgLy8gZ2V0IG91ciB1c2VyLi4uXG4gICAgICB2YXIgY29ubmVjdGlvbiA9IGdldENvbm5lY3Rpb25NYW5hZ2VyKCkuZ2V0KCk7XG4gICAgICBsZXQgdXNlclJlcG8gPSBjb25uZWN0aW9uLmdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgICBsZXQgdGhpc1VzZXIgPSBhd2FpdCB1c2VyUmVwby5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJ1c2Vyc1wiKVxuICAgICAgICAud2hlcmUoXCJ1c2VybmFtZT06dXNlck5hbWVcIilcbiAgICAgICAgLmlubmVySm9pbkFuZFNlbGVjdCgnc2Vzc2lvbicsICdzZXNzaW9uJywgJ09OJywgJ3Nlc3Npb24ua2V5PTpzZXNzaW9uS2V5Jywge1xuICAgICAgICAgIHNlc3Npb25LZXk6IGtleVxuICAgICAgICB9KVxuICAgICAgICAuc2V0UGFyYW1ldGVycyh7XG4gICAgICAgICAgdXNlck5hbWU6IHVzZXIsXG4gICAgICAgICAgc2Vzc2lvbktleToga2V5XG4gICAgICAgIH0pXG4gICAgICAgIC5zZXRNYXhSZXN1bHRzKDEpXG4gICAgICAgIC5nZXRSZXN1bHRzKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdEZWNvcmF0ZVVzZXIgZm91bmQgJywgdGhpc1VzZXIpO1xuXG4gICAgICAoPGFueT5yZXEpWyd1c2VyJ10gPSB0aGlzVXNlclswXTtcblxuICAgICAgY29uc29sZS5sb2cocmVxLnByb3RvY29sICsgJzovLycgKyByZXEuZ2V0KCdob3N0JykgKyAnLycpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBwdWJsaWMgc2V0Um91dGVzKCkge1xuICAgIC8vIGZ1bmN0aW9uYWxcbiAgICB0aGlzLl9BcHAuZ2V0KCcvYXBpL2Jvb2tzJywgQm9va3MuYWxsKTtcblxuICAgIC8vIHV0aWxpdHlcbiAgICB0aGlzLl9BcHAuZ2V0KCcvYXBpL2luc3RhbGwnLCBJbnN0YWxsZXIuaW5zdGFsbCk7XG4gICAgdGhpcy5fQXBwLmdldCgnL2ltcG9ydCcsIEluc3RhbGxlci5sb2FkSnNvbik7XG5cbiAgICAvLyBtZXRhXG4gICAgdGhpcy5fQXBwLnBvc3QoJy9hcGkvbG9naW4nLCBVc2Vycy5sb2dpbik7XG4gICAgdGhpcy5fQXBwLmdldCgnL2FwaS91c2VyJywgVXNlcnMuaW5mbyk7XG5cbiAgICAvLyB3dGZcbiAgICB0aGlzLl9BcHAuZ2V0KCcvJywgdGhpcy5fZGVmYXVsdCk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRTZXJ2ZXIoKSB7XG4gICAgdGhpcy5fQXBwLmxpc3Rlbig1MDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnYWJjRCBydW5uaW5nOiBsaXN0ZW5pbmcgb24gcG9ydCA1MDAwJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZWZhdWx0KHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICByZXMuc2VuZCgnYWJkLmQgc2VydmVyIGlzIHJ1bm5pbmcsIHlvdSBzaG91bGQgbWFwIHRoaXMgcm91dGUgdG8gYSBjbGllbnQsIG1heWJlPycpO1xuICB9XG59XG4iXX0=
