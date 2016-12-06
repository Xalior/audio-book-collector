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
const _1 = require('.');
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(), 
    __metadata('design:type', Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], User.prototype, "hash", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }), 
    __metadata('design:type', Number)
], User.prototype, "lastSeen", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.Session, session => session.user), 
    __metadata('design:type', Array)
], User.prototype, "sessions", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', Boolean)
], User.prototype, "admin", void 0);
User = __decorate([
    typeorm_1.Table(), 
    __metadata('design:paramtypes', [])
], User);
exports.User = User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBCQUErRCxTQUFTLENBQUMsQ0FBQTtBQUN6RSxtQkFBc0IsR0FBRyxDQUFDLENBQUE7QUFJMUI7QUEyQkEsQ0FBQztBQXpCQztJQUFDLGdDQUFzQixFQUFFOztnQ0FBQTtBQUd6QjtJQUFDLGdCQUFNLEVBQUU7O3NDQUFBO0FBR1Q7SUFBQyxnQkFBTSxFQUFFOztrQ0FBQTtBQUdUO0lBQUMsZ0JBQU0sRUFBRTs7a0NBQUE7QUFHVDtJQUFDLGdCQUFNLEVBQUU7O21DQUFBO0FBR1Q7SUFBQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOztzQ0FBQTtBQUdGO0lBQUMsbUJBQVMsQ0FBQyxJQUFJLElBQUksVUFBTyxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDOztzQ0FBQTtBQUdwRDtJQUFDLGdCQUFNLEVBQUU7O21DQUFBO0FBM0JYO0lBQUMsZUFBSyxFQUFFOztRQUFBO0FBRUssWUFBSSxPQTJCaEIsQ0FBQSIsImZpbGUiOiJkYi9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWJsZSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBPbmVUb01hbnl9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge1Nlc3Npb259IGZyb20gJy4nO1xuXG5AVGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVXNlciB7XG5cbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICB1c2VybmFtZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBoYXNoOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgZW1haWw6IHN0cmluZztcblxuICBAQ29sdW1uKHtcbiAgICBudWxsYWJsZTogdHJ1ZVxuICB9KVxuICBsYXN0U2VlbjogbnVtYmVyO1xuXG4gIEBPbmVUb01hbnkodHlwZSA9PiBTZXNzaW9uLCBzZXNzaW9uID0+IHNlc3Npb24udXNlcilcbiAgc2Vzc2lvbnM6IFNlc3Npb25bXTtcblxuICBAQ29sdW1uKClcbiAgYWRtaW46IGJvb2xlYW47XG59XG4iXX0=
