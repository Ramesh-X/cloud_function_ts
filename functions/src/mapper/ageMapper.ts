import {IMapper} from "../interfaces/mapper";
import {Age} from "../models/age";

export class AgeMapper implements IMapper<Age> {
  fromSnapshot(snapshot: FirebaseFirestore.DocumentSnapshot): Age | undefined {
    if (snapshot === null || snapshot === undefined) return undefined;
    const data = snapshot.data();
    if (data === null || data === undefined) return undefined;

    return new Age(snapshot.ref, data[Age.CHILD_FIELD],
      data[Age.YEARS_FIELD], data[Age.MONTHS_FIELD], data[Age.DAYS_FIELD]);
  }

  toMap(item: Age): FirebaseFirestore.DocumentData {
    return {
      [Age.CHILD_FIELD]: item.child,
      [Age.YEARS_FIELD]: item.years,
      [Age.MONTHS_FIELD]: item.months,
      [Age.DAYS_FIELD]: item.days,
    };
  }

}
