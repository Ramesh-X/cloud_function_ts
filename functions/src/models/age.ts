import {DocumentReference} from '@google-cloud/firestore'
import {DBModel} from "../interfaces/dBModel";

export class Age extends DBModel {
  static readonly CHILD_FIELD = 'child';
  static readonly YEARS_FIELD = 'years';
  static readonly MONTHS_FIELD = 'months';
  static readonly DAYS_FIELD = 'days';

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
