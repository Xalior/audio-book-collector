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
let Chapter = class Chapter {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(), 
    __metadata('design:type', Number)
], Chapter.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => _1.Book, book => book.chapters), 
    __metadata('design:type', _1.Book)
], Chapter.prototype, "book", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Chapter.prototype, "track", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', String)
], Chapter.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(), 
    __metadata('design:type', Number)
], Chapter.prototype, "index", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }), 
    __metadata('design:type', String)
], Chapter.prototype, "created_at", void 0);
Chapter = __decorate([
    typeorm_1.Table(), 
    __metadata('design:paramtypes', [])
], Chapter);
exports.Chapter = Chapter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL0NoYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBCQUErRCxTQUFTLENBQUMsQ0FBQTtBQUN6RSxtQkFBbUIsR0FBRyxDQUFDLENBQUE7QUFHdkI7QUFxQkEsQ0FBQztBQXBCQztJQUFDLGdDQUFzQixFQUFFOzttQ0FBQTtBQUd6QjtJQUFDLG1CQUFTLENBQUMsSUFBSSxJQUFJLE9BQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQzs7cUNBQUE7QUFHL0M7SUFBQyxnQkFBTSxFQUFFOztzQ0FBQTtBQUdUO0lBQUMsZ0JBQU0sRUFBRTs7c0NBQUE7QUFHVDtJQUFDLGdCQUFNLEVBQUU7O3NDQUFBO0FBR1Q7SUFBQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzsyQ0FBQTtBQW5CSjtJQUFDLGVBQUssRUFBRTs7V0FBQTtBQUNLLGVBQU8sVUFxQm5CLENBQUEiLCJmaWxlIjoiZGIvQ2hhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFibGUsIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgTWFueVRvT25lfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHtCb29rfSBmcm9tIFwiLlwiO1xuXG5AVGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXB0ZXIge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQE1hbnlUb09uZSh0eXBlID0+IEJvb2ssIGJvb2sgPT4gYm9vay5jaGFwdGVycylcbiAgYm9vazogQm9vaztcblxuICBAQ29sdW1uKClcbiAgdHJhY2s6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgdGl0bGU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgaW5kZXg6IG51bWJlcjtcblxuICBAQ29sdW1uKHtcbiAgICBudWxsYWJsZTogdHJ1ZVxuICB9KVxuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG5cbn1cbiJdfQ==
