import { AES, enc } from "crypto-js";

export const encrypt = (data: Record<string, any>) => {
  const secretKey = process.env.secretKey ?? "";
  const encrypted = AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encrypted;
};

export const decrypt = <T extends Record<string, any>>(encrypt: string): T => {
  const secretKey = process.env.secretKey ?? "";
  const decryptedBytes = AES.decrypt(encrypt, secretKey);
  const decryptedData = JSON.parse(decryptedBytes.toString(enc.Utf8));
  return decryptedData as T;
};
