import { compareAsc, isAfter, parseISO } from "date-fns";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../my-base";

export class LogCollection {
  /** CREATE */
  /**
   * @description 특정 유저의 신고 등록
   * @param userId
   * @param data
   */
  static createClickLog = async (data: any) => {
    const clickCollectionRef = collection(firestore, "eventClick");
    const newClickDocRef = await addDoc(clickCollectionRef, {
      ...data,
      eventTime: new Date(),
      eventDate: new Date().toISOString(),
    });
    return newClickDocRef.id;
  };
  static createPageLog = async (data: any) => {
    // if (process.env.NODE_ENV === "development") return;
    const pageCollectionRef = collection(firestore, "eventPage");
    const newPageDocRef = await addDoc(pageCollectionRef, {
      ...data,
      eventTime: new Date(),
      eventDate: new Date().toISOString(),
    });
    return newPageDocRef.id;
  };
  static createViewLog = async (data: any) => {
    const viewCollectionRef = collection(firestore, "eventView");
    const newViewDocRef = await addDoc(viewCollectionRef, {
      ...data,
      eventTime: new Date(),
      eventDate: new Date().toISOString(),
    });
    return newViewDocRef.id;
  };
  static createTrackLog = async (data: any) => {
    const viewCollectionRef = collection(firestore, "eventTrack");
    const newViewDocRef = await addDoc(viewCollectionRef, {
      ...data,
      eventTime: new Date(),
      eventDate: new Date().toISOString(),
    });
    return newViewDocRef.id;
  };
  static wherePageLog = async (queries: Record<string, any>, date?: string) => {
    const entries = Object.entries(queries);
    const logQuery = query(
      collection(firestore, "eventPage"),
      ...entries.map(([key, value]) => {
        return where(key, "==", value);
      }),
    );
    const result = await getDocs(logQuery);
    return (result.docs.map((item) => item.data()) as any as any[])
      .filter((item) => isAfter(parseISO(item.eventDate), parseISO("2024-02-25")))
      .sort((a, b) => compareAsc(parseISO(a.eventDate), parseISO(b.eventDate)));
  };
}
