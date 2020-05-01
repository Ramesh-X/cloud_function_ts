import {AbstractHandler} from "../../interfaces/abstractHandler";
import {EventContext} from "firebase-functions";
import {ChildMapper} from "../../mapper/childMapper";
import {CreateAgeService} from "./createAgeService";

export class CreateAgeHandler extends AbstractHandler {
  async onCreate(snap: FirebaseFirestore.DocumentSnapshot, context: EventContext): Promise<any> {
    const childMapper = new ChildMapper();
    const child = childMapper.fromSnapshot(snap);
    if (child === null || child === undefined) {
      console.log("Console log");
      return;
    }
    await new CreateAgeService().processChild(child);
    console.log("All Done!");
  }
}
