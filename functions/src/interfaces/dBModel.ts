import {DocumentReference} from '@google-cloud/firestore'

export abstract class DBModel {
  ref: DocumentReference | undefined;
  id: string | undefined;

  protected constructor(ref?: DocumentReference) {
    this.ref = ref;
    this.id = ref?.id;
  }
}
