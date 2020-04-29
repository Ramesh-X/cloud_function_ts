import {DocumentReference, Timestamp} from '@google-cloud/firestore'
import {DBModel} from "../interfaces/dBModel";

export class Child extends DBModel {
  static readonly NAME_FIELD = 'name';
  static readonly DOB_FIELD = 'dob';

  name: string | undefined;
  dob: Timestamp | undefined;

  constructor(ref?: DocumentReference, name?: string, dob?: Timestamp) {
    super(ref);
    this.name = name;
    this.dob = dob;
  }
}
