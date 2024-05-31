export const QUOKKA = 'quokka';

type StorageKeyType<T extends string = string> = `${typeof QUOKKA}-${T}`;

const createKey = <T extends string>(id: T): StorageKeyType<T> => {
  return `${QUOKKA}-${id}`;
};

export const STORAGE_KEY = {
  USER: createKey('user'),
};
