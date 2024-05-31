import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './my-base';

export class Storage {
  static readFile(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target) {
          const result = event.target.result;
          if (result instanceof ArrayBuffer) {
            resolve(result);
          } else {
            reject(new Error('Failed to read file.'));
          }
        } else {
          reject(new Error('Failed to read file.'));
        }
      };
      reader.onerror = error => {
        reject(error);
      };
      reader.readAsArrayBuffer(file);
    });
  }
}
