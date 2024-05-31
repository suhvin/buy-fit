export const uniqBy = <T>(items: T[], callback: (item: T) => string): T[] => {
  const seen = new Map<string, T>();
  // biome-ignore lint/complexity/noForEach: <explanation>
  items.forEach(item => {
    seen.set(callback(item), item);
  });
  return Array.from(seen.values());
};
