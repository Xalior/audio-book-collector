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
            res.json({
                "username": me.username,
                "name": me.name,
                "email": me.email,
                "admin": me.admin
            });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9Vc2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxJQUFjLEtBQUssQ0FrQmxCO0FBbEJELFdBQWMsS0FBSyxFQUFDLENBQUM7SUFDbkIsY0FBMkIsR0FBb0IsRUFBRSxHQUFxQjs7WUFDcEUsTUFBTSxFQUFFLEdBQWUsR0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsVUFBVSxFQUFDLEVBQUUsQ0FBQyxRQUFRO2dCQUN0QixNQUFNLEVBQUMsRUFBRSxDQUFDLElBQUk7Z0JBQ2QsT0FBTyxFQUFDLEVBQUUsQ0FBQyxLQUFLO2dCQUNoQixPQUFPLEVBQUMsRUFBRSxDQUFDLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7SUFUcUIsVUFBSSxPQVN6QixDQUFBO0lBRUQsZUFBNEIsR0FBb0IsRUFBRSxHQUFxQjs7WUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLENBQUM7O0lBTHFCLFdBQUssUUFLMUIsQ0FBQTtBQUNILENBQUMsRUFsQmEsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBa0JsQiIsImZpbGUiOiJhcGkvVXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQge2luaXRDb25uZWN0aW9uLCBCb29rLFVzZXJ9IGZyb20gJy4uL2RiJztcblxuZXhwb3J0IG1vZHVsZSBVc2VycyB7XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmZvKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICBjb25zdCBtZTogVXNlciA9ICg8YW55PnJlcSlbJ3VzZXInXTtcblxuICAgIHJlcy5qc29uKHtcbiAgICAgIFwidXNlcm5hbWVcIjptZS51c2VybmFtZSxcbiAgICAgIFwibmFtZVwiOm1lLm5hbWUsXG4gICAgICBcImVtYWlsXCI6bWUuZW1haWwsXG4gICAgICBcImFkbWluXCI6bWUuYWRtaW5cbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coXCJVc2Vycy5sb2dpblwiKTtcbiAgICBjb25zb2xlLmxvZyhyZXEpO1xuICAgIGNvbnNvbGUubG9nKHJlcS5jb29raWVzKTtcbiAgICByZXMuanNvbihyZXEuY29va2llcyk7XG4gIH1cbn1cbiJdfQ==
