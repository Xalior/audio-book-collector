"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const typeorm_1 = require("typeorm");
const _1 = require(".");
let Session = class Session {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(), 
    __metadata('design:type', Number)
], Session.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => _1.User, user => user.sessions), 
    __metadata('design:type', _1.User)
], Session.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Session.prototype, "key", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }), 
    __metadata('design:type', String)
], Session.prototype, "use", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }), 
    __metadata('design:type', String)
], Session.prototype, "created_at", void 0);
Session = __decorate([
    typeorm_1.Table(), 
    __metadata('design:paramtypes', [])
], Session);
exports.Session = Session;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL1Nlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBCQUEyRSxTQUFTLENBQUMsQ0FBQTtBQUNyRixtQkFBeUIsR0FBRyxDQUFDLENBQUE7QUFHN0I7QUFxQkEsQ0FBQztBQW5CQztJQUFDLGdDQUFzQixFQUFFOzttQ0FBQTtBQUd6QjtJQUFDLG1CQUFTLENBQUMsSUFBSSxJQUFJLE9BQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzs7cUNBQUE7QUFHL0M7SUFBQyxnQkFBTSxFQUFFOztvQ0FBQTtBQUdUO0lBQUMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7b0NBQUE7QUFHRjtJQUFDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7OzJDQUFBO0FBbkJKO0lBQUMsZUFBSyxFQUFFOztXQUFBO0FBQ0ssZUFBTyxVQXFCbkIsQ0FBQSIsImZpbGUiOiJkYi9TZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWJsZSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBNYW55VG9PbmUsIEpvaW5Db2x1bW59IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge1VzZXIsIEJvb2t9IGZyb20gXCIuXCI7XG5cbkBUYWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XG5cbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBNYW55VG9PbmUodHlwZSA9PiBVc2VyLCB1c2VyID0+IHVzZXIuc2Vzc2lvbnMpXG4gIHVzZXI6IFVzZXI7XG5cbiAgQENvbHVtbigpXG4gIGtleTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIG51bGxhYmxlOiB0cnVlXG4gIH0pXG4gIHVzZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oe1xuICAgIG51bGxhYmxlOiB0cnVlXG4gIH0pXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcblxufVxuIl19
