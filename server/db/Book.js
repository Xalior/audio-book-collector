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
let Book = class Book {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(), 
    __metadata('design:type', Number)
], Book.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Book.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Book.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Book.prototype, "cover", void 0);
__decorate([
    typeorm_1.ManyToOne(type => _1.User, user => user.sessions), 
    __metadata('design:type', _1.User)
], Book.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.Chapter, chapter => chapter.book), 
    __metadata('design:type', Array)
], Book.prototype, "chapters", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', Number)
], Book.prototype, "duration", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Book.prototype, "author", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', Boolean)
], Book.prototype, "anonymous", void 0);
Book = __decorate([
    typeorm_1.Table(), 
    __metadata('design:paramtypes', [])
], Book);
exports.Book = Book;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL0Jvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBCQUEwRSxTQUFTLENBQUMsQ0FBQTtBQUNwRixtQkFBNEIsR0FBRyxDQUFDLENBQUE7QUFHaEM7QUErQkEsQ0FBQztBQTdCQztJQUFDLGdDQUFzQixFQUFFOztnQ0FBQTtBQUd6QjtJQUFDLGdCQUFNLEVBQUU7O21DQUFBO0FBR1Q7SUFBQyxnQkFBTSxFQUFFOzt5Q0FBQTtBQUdUO0lBQUMsZ0JBQU0sRUFBRTs7bUNBQUE7QUFHVDtJQUFDLG1CQUFTLENBQUMsSUFBSSxJQUFJLE9BQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzs7a0NBQUE7QUFHL0M7SUFBQyxtQkFBUyxDQUFDLElBQUksSUFBSSxVQUFPLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUM7O3NDQUFBO0FBTXBEO0lBQUMsZ0JBQU0sRUFBRTs7c0NBQUE7QUFHVDtJQUFDLGdCQUFNLEVBQUU7O29DQUFBO0FBR1Q7SUFBQyxnQkFBTSxFQUFFOzt1Q0FBQTtBQTlCWDtJQUFDLGVBQUssRUFBRTs7UUFBQTtBQUNLLFlBQUksT0ErQmhCLENBQUEiLCJmaWxlIjoiZGIvQm9vay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFibGUsIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgTWFueVRvT25lLCBPbmVUb01hbnl9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge0NoYXB0ZXIsIFVzZXJ9IGZyb20gXCIuXCI7XG5cbkBUYWJsZSgpXG5leHBvcnQgY2xhc3MgQm9vayB7XG5cbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBjb3Zlcjogc3RyaW5nO1xuXG4gIEBNYW55VG9PbmUodHlwZSA9PiBVc2VyLCB1c2VyID0+IHVzZXIuc2Vzc2lvbnMpXG4gIHVzZXI6IFVzZXI7XG5cbiAgQE9uZVRvTWFueSh0eXBlID0+IENoYXB0ZXIsIGNoYXB0ZXIgPT4gY2hhcHRlci5ib29rKVxuICBjaGFwdGVyczogQ2hhcHRlcltdO1xuXG4vLyAgQENvbHVtbigpXG4vLyAgY2hhcHRlcnM6IEFycmF5PGFueT47XG5cbiAgQENvbHVtbigpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG5cbiAgQENvbHVtbigpXG4gIGF1dGhvcjogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBhbm9ueW1vdXM6IGJvb2xlYW47XG59XG4iXX0=
