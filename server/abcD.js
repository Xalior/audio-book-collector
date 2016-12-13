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
                if (cookie) {
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
                }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sUUFBUSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7QUFDSCxDQUFDO0FBekVZLFlBQUksT0F5RWhCLENBQUEiLCJmaWxlIjoiYWJjRC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5cbmltcG9ydCB7aW5pdENvbm5lY3Rpb24sIEJvb2ssVXNlcn0gZnJvbSAnLi9kYidcbmltcG9ydCB7SW5zdGFsbGVyLCBCb29rcywgVXNlcnN9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IHtnZXRDb25uZWN0aW9uTWFuYWdlcn0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7TG9naW5SZXF1aXJlZH0gZnJvbSBcIi4vbGliL2F1dGhcIjtcblxuZXhwb3J0IGNsYXNzIGFiY0Qge1xuICBwcml2YXRlIF9BcHA6IGV4cHJlc3MuRXhwcmVzcztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9BcHAgPSBleHByZXNzKCk7XG5cbiAgICBpbml0Q29ubmVjdGlvbigpLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7fSk7XG5cbiAgICB0aGlzLmFkZE1pZGRsZXdhcmUoKTtcbiAgICB0aGlzLnNldFJvdXRlcygpO1xuICAgIHRoaXMuc3RhcnRTZXJ2ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRNaWRkbGV3YXJlKCkge1xuICAgIHRoaXMuX0FwcC51c2UoY29va2llUGFyc2VyKCkpO1xuXG4gICAgLy8gRGVjb3JhdGVVc2VyIChvbiByZXEpXG4gICAgdGhpcy5fQXBwLnVzZShhc3luYyBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcblxuICAgICAgY29uc3QgY29va2llID0gcmVxLmNvb2tpZXMuYWJjX2lkO1xuXG4gICAgICBpZihjb29raWUpIHtcbiAgICAgICAgY29uc3QgW3VzZXIsIGtleV0gPSBjb29raWUuc3BsaXQoXCI6XCIpO1xuICAgICAgICAvLyBnZXQgb3VyIHVzZXIuLi5cbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBnZXRDb25uZWN0aW9uTWFuYWdlcigpLmdldCgpO1xuICAgICAgICBsZXQgdXNlclJlcG8gPSBjb25uZWN0aW9uLmdldFJlcG9zaXRvcnkoVXNlcik7XG4gICAgICAgIGxldCB0aGlzVXNlciA9IGF3YWl0IHVzZXJSZXBvLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcInVzZXJzXCIpXG4gICAgICAgICAgICAud2hlcmUoXCJ1c2VybmFtZT06dXNlck5hbWVcIilcbiAgICAgICAgICAgIC5pbm5lckpvaW5BbmRTZWxlY3QoJ3Nlc3Npb24nLCAnc2Vzc2lvbicsICdPTicsICdzZXNzaW9uLmtleT06c2Vzc2lvbktleScsIHtcbiAgICAgICAgICAgICAgc2Vzc2lvbktleToga2V5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNldFBhcmFtZXRlcnMoe1xuICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlcixcbiAgICAgICAgICAgICAgc2Vzc2lvbktleToga2V5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNldE1heFJlc3VsdHMoMSlcbiAgICAgICAgICAgIC5nZXRSZXN1bHRzKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0RlY29yYXRlVXNlciBmb3VuZCAnLCB0aGlzVXNlcik7XG5cbiAgICAgICAgKDxhbnk+cmVxKVsndXNlciddID0gdGhpc1VzZXJbMF07XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgcHVibGljIHNldFJvdXRlcygpIHtcbiAgICAvLyBmdW5jdGlvbmFsXG4gICAgdGhpcy5fQXBwLmdldCgnL2FwaS9ib29rcycsIEJvb2tzLmFsbCk7XG5cbiAgICAvLyB1dGlsaXR5XG4gICAgdGhpcy5fQXBwLmdldCgnL2FwaS9pbnN0YWxsJywgSW5zdGFsbGVyLmluc3RhbGwpO1xuICAgIHRoaXMuX0FwcC5nZXQoJy9pbXBvcnQnLCBJbnN0YWxsZXIubG9hZEpzb24pO1xuXG4gICAgLy8gbWV0YVxuICAgIHRoaXMuX0FwcC5wb3N0KCcvYXBpL2xvZ2luJywgVXNlcnMubG9naW4pO1xuICAgIHRoaXMuX0FwcC5nZXQoJy9hcGkvdXNlcicsIFVzZXJzLmluZm8pO1xuXG4gICAgLy8gd3RmXG4gICAgdGhpcy5fQXBwLmdldCgnLycsIHRoaXMuX2RlZmF1bHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0U2VydmVyKCkge1xuICAgIHRoaXMuX0FwcC5saXN0ZW4oNTAwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ2FiY0QgcnVubmluZzogbGlzdGVuaW5nIG9uIHBvcnQgNTAwMCcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgcmVzLnNlbmQoJ2FiZC5kIHNlcnZlciBpcyBydW5uaW5nLCB5b3Ugc2hvdWxkIG1hcCB0aGlzIHJvdXRlIHRvIGEgY2xpZW50LCBtYXliZT8nKTtcbiAgfVxufVxuIl19
