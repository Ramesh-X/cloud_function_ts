import {DocumentReference} from '@google-cloud/firestore'

export abstract class DBModel {
  ref: DocumentReference;
  id: String;

  protected constructor(ref: DocumentReference) {
    this.ref = ref;
    this.id = ref?.id;
  }
}
