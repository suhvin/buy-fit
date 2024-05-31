export const QUOKKA = 'quokka';
const createKey = <T extends string>(id: T): `${typeof QUOKKA}-${T}` => {
  return `${QUOKKA}-${id}`;
};

export const STORAGE_KEY = {
  USER: createKey('user'),
};
