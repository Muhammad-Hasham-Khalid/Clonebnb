export const Logger = new (class Logger {
  info(...data: unknown[]) {
    console.log(data);
  }

  error(...data: unknown[]) {
    console.error(data);
  }

  warn(...data: unknown[]) {
    console.warn(data);
  }
})();
