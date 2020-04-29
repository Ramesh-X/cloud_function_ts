import {DocumentReference} from '@google-cloud/firestore'
import {DBModel} from "./dBModel";

export class Age extends DBModel {
  child: DocumentReference;
  years: number;
  months: number;
  days: number;

  constructor(ref: DocumentReference, child: DocumentReference, years: number, months: number, days: number) {
    super(ref);
    this.child = child;
    this.years = years;
    this.months = months;
    this.days = days;
  }
}
