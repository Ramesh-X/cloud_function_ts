import {DocumentReference} from '@google-cloud/firestore'

export abstract class DBModel {
  ref: DocumentReference;
  id: string;

  protected constructor(ref: DocumentReference) {
    this.ref = ref;
    this.id = ref?.id;
  }
}
