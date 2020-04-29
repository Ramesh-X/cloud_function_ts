import {MapperI} from "./mapperI";
import {Child} from "../models/child";

export class ChildMapper implements MapperI<Child> {
  fromSnapshot(snapshot: FirebaseFirestore.DocumentSnapshot): Child | undefined {
    if (snapshot === null || snapshot === undefined) return undefined;
    const data = snapshot.data();
    if (data === null || data === undefined) return undefined;
    return new Child(snapshot.ref, data[Child.NAME_FIELD], data[Child.DOB_FIELD]);
  }

  toMap(item: Child): FirebaseFirestore.DocumentData {
    return {
      [Child.NAME_FIELD]: item.name,
      [Child.DOB_FIELD]: item.dob,
    };
  }

}
