export function assert(condition: unknown, error: Error | string = new Error()): asserts condition {
  if (!condition) {
    if (typeof error === 'string') {
      throw new Error(error);
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      throw error;
    }
  }
}
