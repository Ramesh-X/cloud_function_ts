import {DBModel} from "./dBModel";
import {DocumentData, DocumentSnapshot} from '@google-cloud/firestore'

export interface IMapper<T extends DBModel> {
  fromSnapshot(snapshot: DocumentSnapshot) : T | undefined;
  toMap(item: T): DocumentData;
}
