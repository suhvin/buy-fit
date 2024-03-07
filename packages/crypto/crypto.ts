import { AES, enc } from "crypto-js";

export const encrypt = (data: Record<string, any>, secretKey: string) => {
  const encrypted = AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encrypted;
};

export const decrypt = <T extends Record<string, any>>(encrypt: string, secretKey: string): T => {
  const decryptedBytes = AES.decrypt(encrypt, secretKey);
  const decryptedData = JSON.parse(decryptedBytes.toString(enc.Utf8));
  return decryptedData as T;
};
