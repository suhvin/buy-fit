import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

export class LogCollection {
  static async createLog(log: any) {
    try {
      const ref = collection(firestore, "log");
      const addDocument = await addDoc(ref, log);
      return {
        status: "success",
        id: addDocument.id,
      } as const;
    } catch (e) {
      console.error("create log error ");
      return {
        status: "error",
      } as const;
    }
  }
}
