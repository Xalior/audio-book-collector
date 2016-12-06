"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const typeorm_1 = require("typeorm");
const db_1 = require('../db');
var Books;
(function (Books) {
    function all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var me = req['user'];
            console.log('_getbooks for user: ', me);
            var books;
            const connection = typeorm_1.getConnectionManager().get();
            let bookRepo = connection.getRepository(db_1.Book);
            if (me) {
                books = yield bookRepo.createQueryBuilder("book")
                    .innerJoinAndSelect("book.chapters", "chapters")
                    .getResults();
            }
            else {
                books = yield bookRepo.createQueryBuilder("book")
                    .where("anonymous=:anonymous")
                    .setParameters({
                    anonymous: true
                })
                    .innerJoinAndSelect("book.chapters", "chapters")
                    .getResults();
            }
            res.json(books);
        });
    }
    Books.all = all;
})(Books = exports.Books || (exports.Books = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9Cb29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSwwQkFBbUMsU0FBUyxDQUFDLENBQUE7QUFDN0MscUJBQXdCLE9BR3hCLENBQUMsQ0FIOEI7QUFHL0IsSUFBaUIsS0FBSyxDQXlCckI7QUF6QkQsV0FBaUIsS0FBSyxFQUFDLENBQUM7SUFDdEIsYUFBMEIsR0FBb0IsRUFBRSxHQUFxQjs7WUFDbkUsSUFBSSxFQUFFLEdBQWUsR0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsRUFBRSxDQUFDLENBQUM7WUFFdkMsSUFBSSxLQUFjLENBQUM7WUFFbkIsTUFBTSxVQUFVLEdBQUcsOEJBQW9CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQUksQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztxQkFDOUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQztxQkFDL0MsVUFBVSxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUssR0FBRyxNQUFNLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7cUJBQzlDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztxQkFDN0IsYUFBYSxDQUFDO29CQUNiLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDO3FCQUNELGtCQUFrQixDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUM7cUJBQy9DLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUM7O0lBdkJxQixTQUFHLE1BdUJ4QixDQUFBO0FBQ0gsQ0FBQyxFQXpCZ0IsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBeUJyQiIsImZpbGUiOiJhcGkvQm9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQge2dldENvbm5lY3Rpb25NYW5hZ2VyfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHtCb29rLFVzZXJ9IGZyb20gJy4uL2RiJ1xuXG5cbmV4cG9ydCBuYW1lc3BhY2UgQm9va3Mge1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gYWxsKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICB2YXIgbWU6IFVzZXIgPSAoPGFueT5yZXEpWyd1c2VyJ107XG4gICAgY29uc29sZS5sb2coJ19nZXRib29rcyBmb3IgdXNlcjogJyxtZSk7XG5cbiAgICB2YXIgYm9va3MgOiBCb29rW107XG5cbiAgICBjb25zdCBjb25uZWN0aW9uID0gZ2V0Q29ubmVjdGlvbk1hbmFnZXIoKS5nZXQoKTtcbiAgICBsZXQgYm9va1JlcG8gPSBjb25uZWN0aW9uLmdldFJlcG9zaXRvcnkoQm9vayk7XG4gICAgaWYobWUpIHtcbiAgICAgIGJvb2tzID0gYXdhaXQgYm9va1JlcG8uY3JlYXRlUXVlcnlCdWlsZGVyKFwiYm9va1wiKVxuICAgICAgICAuaW5uZXJKb2luQW5kU2VsZWN0KFwiYm9vay5jaGFwdGVyc1wiLCBcImNoYXB0ZXJzXCIpXG4gICAgICAgIC5nZXRSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvb2tzID0gYXdhaXQgYm9va1JlcG8uY3JlYXRlUXVlcnlCdWlsZGVyKFwiYm9va1wiKVxuICAgICAgICAud2hlcmUoXCJhbm9ueW1vdXM9OmFub255bW91c1wiKVxuICAgICAgICAuc2V0UGFyYW1ldGVycyh7XG4gICAgICAgICAgYW5vbnltb3VzOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC5pbm5lckpvaW5BbmRTZWxlY3QoXCJib29rLmNoYXB0ZXJzXCIsIFwiY2hhcHRlcnNcIilcbiAgICAgICAgLmdldFJlc3VsdHMoKTtcbiAgICB9XG5cbiAgICByZXMuanNvbihib29rcyk7XG4gIH1cbn1cbiJdfQ==
