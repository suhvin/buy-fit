export class DeviceHelper {
  ios: RegExp;
  android: RegExp;
  constructor() {
    if (typeof window === "undefined") {
      throw new Error("웹 환경에서만 사용해주세요");
    }
    this.ios = /iPhone|IPad|IPod/i;
    this.android = /Android/i;
  }

  isClient(): boolean {
    return typeof window !== "undefined";
  }
  isIos(): boolean {
    return this.ios.test(navigator.userAgent);
  }
  isAndroid(): boolean {
    return this.android.test(navigator.userAgent);
  }
  isWeb(): boolean {
    return !this.android.test(navigator.userAgent) && !this.ios.test(navigator.userAgent);
  }
  getDevice() {
    if (this.isIos()) {
      return "ios";
    }
    if (this.isAndroid()) {
      return "android";
    }
    if (this.isWeb()) {
      return "web";
    }
    return "unknown";
  }
}
