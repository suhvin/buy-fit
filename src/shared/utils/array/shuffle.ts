export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  let randomIndex;
  const newArray = Array.from(array);

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex]!, newArray[currentIndex]!];
  }

  return newArray;
}
