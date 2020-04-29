import {AbstractHandler} from "../../interfaces/abstractHandler";
import {EventContext} from "firebase-functions";
import {ChildMapper} from "../../mapper/childMapper";
import {CreateAgeService} from "./createAgeService";
import {AgeDAO} from "../../dao/ageDAO";

export class CreateAgeHandler extends AbstractHandler {
  async onCreate(snap: FirebaseFirestore.DocumentSnapshot, context: EventContext): Promise<any> {
    const childMapper = new ChildMapper();
    const child = childMapper.fromSnapshot(snap);
    if (child === null || child === undefined) {
      console.log("Console log");
      return;
    }
    const age = new CreateAgeService().childToAge(child);
    await new AgeDAO().add(age);
    console.log("All Done!");
  }
}
