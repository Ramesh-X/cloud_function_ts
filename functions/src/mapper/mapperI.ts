import {DBModel} from "../models/dBModel";
import {DocumentData, DocumentSnapshot} from '@google-cloud/firestore'

export interface MapperI<T extends DBModel> {
  fromSnapshot(snapshot: DocumentSnapshot) : T | undefined;
  toMap(item: T): DocumentData;
}
