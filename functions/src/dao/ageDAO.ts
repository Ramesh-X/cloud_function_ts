import * as admin from "firebase-admin";
import {Age} from "../models/age";
import {DBUtil} from "../util/dBUtil";
import {AgeMapper} from "../mapper/ageMapper";
import {DocumentReference} from '@google-cloud/firestore'

export class AgeDAO {
  firestore = admin.firestore();
  mapper = new AgeMapper();

  async add(age: Age) {
    const collectionRef = this.firestore.collection(DBUtil.AGE);
    const docRef = (age.id === null || age.id === undefined) ? collectionRef.doc() : collectionRef.doc(age.id);
    age.ref = docRef;
    await docRef.set(this.mapper.toMap(age));
  }

  async update(age: Age) {
    if (age.ref === null || age.ref === undefined) {
      await this.add(age);
    } else {
      await age.ref.update(this.mapper.toMap(age));
    }
  }

  async delete(age: Age) {
    if (age.ref !== null && age.ref !== undefined) {
      await age.ref.delete();
    }
  }

  async getFromRef(ref: DocumentReference) : Promise<Age | undefined> {
    const snap = await ref.get();
    return this.mapper.fromSnapshot(snap);
  }
}
