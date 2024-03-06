export const removeConsoleWhenProduction = () => {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
    console.dir = function no_console() {};
    console.group = function no_console() {};
    console.groupEnd = function no_console() {};
  }
};
