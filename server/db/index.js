"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const _1 = require('.');
function initConnection() {
    return typeorm_1.createConnection({
        driver: {
            type: "sqlite",
            storage: "abc_d.sqlite"
        },
        entities: [
            _1.Book,
            _1.User,
            _1.Session,
            _1.Chapter
        ],
        autoSchemaSync: true,
        logging: {
            logQueries: true,
            logFailedQueryError: true,
            logSchemaCreation: true,
        },
    });
}
exports.initConnection = initConnection;
// User Usuals...
__export(require('./User'));
__export(require('./Session'));
// Bookie Bits...
__export(require('./Book'));
__export(require('./Chapter'));
// Session Stuff...

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsMEJBQTJDLFNBQVMsQ0FBQyxDQUFBO0FBQ3JELG1CQUE2QyxHQUU3QyxDQUFDLENBRitDO0FBRWhEO0lBQ0UsTUFBTSxDQUFDLDBCQUFnQixDQUFDO1FBQ3RCLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFJO1lBQ0osT0FBSTtZQUNKLFVBQU87WUFDUCxVQUFPO1NBQ1I7UUFDRCxjQUFjLEVBQUUsSUFBSTtRQUNwQixPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUUsSUFBSTtZQUNoQixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLGlCQUFpQixFQUFFLElBQUk7U0FDeEI7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBbkJlLHNCQUFjLGlCQW1CN0IsQ0FBQTtBQUVELGlCQUFpQjtBQUNqQixpQkFBYyxRQUFRLENBQUMsRUFBQTtBQUN2QixpQkFBYyxXQUFXLENBQUMsRUFBQTtBQUUxQixpQkFBaUI7QUFDakIsaUJBQWMsUUFBUSxDQUFDLEVBQUE7QUFDdkIsaUJBQWMsV0FBVyxDQUFDLEVBQUE7QUFFMUIsbUJBQW1CIiwiZmlsZSI6ImRiL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHtjcmVhdGVDb25uZWN0aW9uLCBDb25uZWN0aW9ufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgQm9vaywgVXNlciwgU2Vzc2lvbiwgQ2hhcHRlciB9IGZyb20gJy4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29ubmVjdGlvbigpOiBQcm9taXNlPENvbm5lY3Rpb24+IHtcbiAgcmV0dXJuIGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGRyaXZlcjoge1xuICAgICAgdHlwZTogXCJzcWxpdGVcIixcbiAgICAgIHN0b3JhZ2U6IFwiYWJjX2Quc3FsaXRlXCJcbiAgICB9LFxuICAgIGVudGl0aWVzOiBbXG4gICAgICBCb29rLFxuICAgICAgVXNlcixcbiAgICAgIFNlc3Npb24sXG4gICAgICBDaGFwdGVyXG4gICAgXSxcbiAgICBhdXRvU2NoZW1hU3luYzogdHJ1ZSxcbiAgICBsb2dnaW5nOiB7XG4gICAgICBsb2dRdWVyaWVzOiB0cnVlLFxuICAgICAgbG9nRmFpbGVkUXVlcnlFcnJvcjogdHJ1ZSxcbiAgICAgIGxvZ1NjaGVtYUNyZWF0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBVc2VyIFVzdWFscy4uLlxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vU2Vzc2lvbic7XG5cbi8vIEJvb2tpZSBCaXRzLi4uXG5leHBvcnQgKiBmcm9tICcuL0Jvb2snO1xuZXhwb3J0ICogZnJvbSAnLi9DaGFwdGVyJztcblxuLy8gU2Vzc2lvbiBTdHVmZi4uLlxuIl19
