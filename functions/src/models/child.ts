import {DocumentReference} from '@google-cloud/firestore'
import {DBModel} from "../interfaces/dBModel";

export class Child extends DBModel {
  static readonly NAME_FIELD = 'name';
  static readonly DOB_FIELD = 'dob';

  name: string | undefined;
  dob: Date | undefined;

  constructor(ref?: DocumentReference, name?: string, dob?: Date) {
    super(ref);
    this.name = name;
    this.dob = dob;
  }
}
