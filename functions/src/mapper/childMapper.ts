import {IMapper} from "../interfaces/mapper";
import {Child} from "../models/child";
import {DocumentData, DocumentSnapshot, Timestamp} from '@google-cloud/firestore'

export class ChildMapper implements IMapper<Child> {
  fromSnapshot(snapshot: DocumentSnapshot): Child | undefined {
    if (snapshot === null || snapshot === undefined) return undefined;
    const data = snapshot.data();
    if (data === null || data === undefined) return undefined;

    return new Child(snapshot.ref, data[Child.NAME_FIELD], data[Child.DOB_FIELD]?.toDate());
  }

  toMap(item: Child): DocumentData {
    return {
      [Child.NAME_FIELD]: item.name,
      [Child.DOB_FIELD]: item.dob ? Timestamp.fromDate(item.dob) : null,
    };
  }

}
