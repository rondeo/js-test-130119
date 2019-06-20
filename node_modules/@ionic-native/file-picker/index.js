var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IOSFilePickerOriginal = /** @class */ (function (_super) {
    __extends(IOSFilePickerOriginal, _super);
    function IOSFilePickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IOSFilePickerOriginal.prototype.pickFile = function (utis, position) { return cordova(this, "pickFile", { "callbackOrder": "reverse" }, arguments); };
    IOSFilePickerOriginal.pluginName = "iOS File Picker";
    IOSFilePickerOriginal.plugin = "cordova-plugin-filepicker";
    IOSFilePickerOriginal.pluginRef = "FilePicker";
    IOSFilePickerOriginal.repo = "https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin";
    IOSFilePickerOriginal.platforms = ["iOS"];
    return IOSFilePickerOriginal;
}(IonicNativePlugin));
var IOSFilePicker = new IOSFilePickerOriginal();
export { IOSFilePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDckMsaUNBQWlCOzs7O0lBVWxELGdDQUFRLGFBQ04sSUFBd0IsRUFDeEIsUUFBZ0M7Ozs7Ozt3QkFwRHBDO0VBd0NtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPU0ZpbGVQaWNrZXJQb3NpdGlvbiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBpT1MgRmlsZSBQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE9wZW5zIHRoZSBmaWxlIHBpY2tlciBvbiBpT1MgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGZpbGUsIHJldHVybnMgYSBmaWxlIFVSSS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IElPU0ZpbGVQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUtcGlja2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlUGlja2VyOiBJT1NGaWxlUGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGVQaWNrZXIucGlja0ZpbGUoKVxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBJT1NGaWxlUGlja2VyUG9zaXRpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdpT1MgRmlsZSBQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlcGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnRmlsZVBpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vamNlc2FybW9iaWxlL0ZpbGVQaWNrZXItUGhvbmVnYXAtaU9TLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJT1NGaWxlUGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBhIGZpbGVcbiAgICogQHBhcmFtcyB7c3RyaW5nIHwgc3RyaW5nW119IFt1dGlzXVxuICAgKiBAcGFyYW1zIHtJT1NGaWxlUGlja2VyUG9zaXRpb259IFtwb3NpdGlvbl0gU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIHdoZXJlIHRoZSBmaWxlIHBpY2tlciBzaG91bGQgc2hvdyB1cC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgcGlja0ZpbGUoXG4gICAgdXRpcz86IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHBvc2l0aW9uPzogSU9TRmlsZVBpY2tlclBvc2l0aW9uXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=