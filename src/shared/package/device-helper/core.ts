export class DeviceHelper {
  static isClient(): boolean {
    return typeof window !== "undefined";
  }
  static isServer(): boolean {
    return typeof window === "undefined";
  }
  static isIos(): boolean {
    const ios = /iPhone|IPad|IPod/i;
    const nav = navigator;
    return ios.test(nav?.userAgent);
  }
  static isAndroid(): boolean {
    const android = /Android/i;
    const nav = navigator;
    return android.test(nav?.userAgent);
  }
  static isWeb(): boolean {
    if (typeof window === "undefined") {
      return false;
    }
    const android = /Android/i;
    const ios = /iPhone|IPad|IPod/i;
    const nav = navigator;
    return !android.test(nav?.userAgent) && !ios.test(nav?.userAgent);
  }
  static getDevice(): "server" | "ios" | "android" | "web" | "unknown" {
    if (DeviceHelper.isServer()) {
      return "server";
    }
    if (DeviceHelper.isIos()) {
      return "ios";
    }
    if (DeviceHelper.isAndroid()) {
      return "android";
    }
    if (DeviceHelper.isWeb()) {
      return "web";
    }
    return "unknown";
  }
}
