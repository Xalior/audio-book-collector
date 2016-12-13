"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var Users;
(function (Users) {
    function info(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const me = req['user'];
            if (me) {
                res.json({
                    "username": me.username,
                    "name": me.name,
                    "email": me.email,
                    "admin": me.admin
                });
            }
            else {
                res.json(false);
            }
        });
    }
    Users.info = info;
    function login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Users.login");
            console.log(req);
            console.log(req.cookies);
            res.json(req.cookies);
        });
    }
    Users.login = login;
})(Users = exports.Users || (exports.Users = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9Vc2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxJQUFjLEtBQUssQ0FzQmxCO0FBdEJELFdBQWMsS0FBSyxFQUFDLENBQUM7SUFDbkIsY0FBMkIsR0FBb0IsRUFBRSxHQUFxQjs7WUFDcEUsTUFBTSxFQUFFLEdBQWUsR0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDUCxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVE7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSztpQkFDbEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7O0lBYnFCLFVBQUksT0FhekIsQ0FBQTtJQUVELGVBQTRCLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixDQUFDOztJQUxxQixXQUFLLFFBSzFCLENBQUE7QUFDSCxDQUFDLEVBdEJhLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXNCbEIiLCJmaWxlIjoiYXBpL1VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHtpbml0Q29ubmVjdGlvbiwgQm9vayxVc2VyfSBmcm9tICcuLi9kYic7XG5cbmV4cG9ydCBtb2R1bGUgVXNlcnMge1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5mbyhyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgY29uc3QgbWU6IFVzZXIgPSAoPGFueT5yZXEpWyd1c2VyJ107XG5cbiAgICBpZihtZSkge1xuICAgICAgcmVzLmpzb24oe1xuICAgICAgICBcInVzZXJuYW1lXCI6IG1lLnVzZXJuYW1lLFxuICAgICAgICBcIm5hbWVcIjogbWUubmFtZSxcbiAgICAgICAgXCJlbWFpbFwiOiBtZS5lbWFpbCxcbiAgICAgICAgXCJhZG1pblwiOiBtZS5hZG1pblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5qc29uKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKFwiVXNlcnMubG9naW5cIik7XG4gICAgY29uc29sZS5sb2cocmVxKTtcbiAgICBjb25zb2xlLmxvZyhyZXEuY29va2llcyk7XG4gICAgcmVzLmpzb24ocmVxLmNvb2tpZXMpO1xuICB9XG59XG4iXX0=
