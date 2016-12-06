"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function LoginRequired(target, key, descriptor) {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    //editing the descriptor/value parameter
    descriptor.value = function () {
        return __awaiter(this, arguments, void 0, function* () {
            // get args
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (args[0]['user']) {
                return originalMethod.apply(this, args);
            }
            else {
                args[1].send('auth failed');
            }
        });
    };
    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}
exports.LoginRequired = LoginRequired;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLHVCQUE4QixNQUFXLEVBQUUsR0FBUSxFQUFFLFVBQWU7SUFFbEUsdUZBQXVGO0lBQ3ZGLDJGQUEyRjtJQUMzRixFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QixVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUV0Qyx3Q0FBd0M7SUFDeEMsVUFBVSxDQUFDLEtBQUssR0FBRzs7WUFDakIsV0FBVztZQUNYLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztLQUFBLENBQUM7SUFFRixvRUFBb0U7SUFDcEUsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBM0JlLHFCQUFhLGdCQTJCNUIsQ0FBQSIsImZpbGUiOiJsaWIvYXV0aC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IHtnZXRDb25uZWN0aW9uTWFuYWdlcn0gZnJvbSBcInR5cGVvcm1cIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2RiL1VzZXInXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vLi4vZGIvU2Vzc2lvbidcblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUmVxdWlyZWQodGFyZ2V0OiBhbnksIGtleTogYW55LCBkZXNjcmlwdG9yOiBhbnkpIHtcblxuICAvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QgdGhpcyB3YXkgd2Uga2VlcCB0aGUgdmFsdWVzIGN1cnJlbnRseSBpbiB0aGVcbiAgLy8gZGVzY3JpcHRvciBhbmQgZG9uJ3Qgb3ZlcndyaXRlIHdoYXQgYW5vdGhlciBkZWNvcmF0b3IgbWlnaHQgaGF2ZSBkb25lIHRvIHRoZSBkZXNjcmlwdG9yLlxuICBpZihkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAvL2VkaXRpbmcgdGhlIGRlc2NyaXB0b3IvdmFsdWUgcGFyYW1ldGVyXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZ2V0IGFyZ3NcbiAgICB2YXIgYXJnczogYW55W10gPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cblxuICAgIGlmKGFyZ3NbMF1bJ3VzZXInXSkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzWzFdLnNlbmQoJ2F1dGggZmFpbGVkJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJldHVybiBlZGl0ZWQgZGVzY3JpcHRvciBhcyBvcHBvc2VkIHRvIG92ZXJ3cml0aW5nIHRoZSBkZXNjcmlwdG9yXG4gIHJldHVybiBkZXNjcmlwdG9yO1xufVxuIl19
