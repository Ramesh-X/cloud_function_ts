import * as admin from "firebase-admin";
import {Age} from "../models/age";
import {DBUtil} from "../util/dBUtil";
import {AgeMapper} from "../mapper/ageMapper";

export class AgeDAO {
  firestore = admin.firestore();
  mapper = new AgeMapper();

  async add(age: Age) {
    const docRef = this.firestore.collection(DBUtil.AGE).doc(age?.id);
    await docRef.set(this.mapper.toMap(age));
  }
}
