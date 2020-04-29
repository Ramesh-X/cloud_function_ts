import {DocumentReference, Timestamp} from '@google-cloud/firestore'
import {DBModel} from "./dBModel";

export class Child extends DBModel {
  static readonly NAME_FIELD = 'name';
  static readonly DOB_FIELD = 'dob';

  name: String;
  dob: Timestamp;

  constructor(ref: DocumentReference, name: String, dob: Timestamp) {
    super(ref);
    this.name = name;
    this.dob = dob;
  }
}
