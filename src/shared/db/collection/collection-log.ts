import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

export class LogCollection {
  static async createLog(log: any) {
    try {
      const ref = collection(firestore, "log");
      const addDocument = await addDoc(ref, log);
      return addDocument.id;
    } catch (e) {
      console.error("create log error ");
    }
  }
}
