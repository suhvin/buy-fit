import { GLUE } from "./log.model";

function generateUniqueId() {
  // 알파벳으로 시작하는 문자열을 생성합니다. 예를 들어, 'a'에서 'z'까지 랜덤하게 선택합니다.
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  // 그 뒤에 랜덤 알파벳과 숫자 조합을 추가합니다.
  const randomNumberString = Math.random().toString(36).substring(2, 10);
  return randomLetter + randomNumberString;
}

function formatDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}${hour}${minute}${second}`;
}

export function createCustomId() {
  const dateStr = formatDate();
  const uniqueId = generateUniqueId();
  return `${dateStr}-${uniqueId}`;
}

export const tupleToString = <T extends string = string>(array: string[], glue: GLUE): T => {
  return array.join(glue) as T;
};
