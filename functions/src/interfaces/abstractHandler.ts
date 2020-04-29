import DocumentSnapshot = FirebaseFirestore.DocumentSnapshot;
import {Change, EventContext} from "firebase-functions";
import {CallableContext} from "firebase-functions/lib/providers/https";

export abstract class AbstractHandler {
  onCreate(snap: DocumentSnapshot, context: EventContext): Promise<any> {
    throw new Error("onCreate not implemented yet!!");
  }

  onDelete(snap: DocumentSnapshot, context: EventContext): Promise<any> {
    throw new Error("onDelete not implemented yet!!");
  }

  onUpdate(change: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
    throw new Error("onUpdate not implemented yet!!");
  }

  onWrite(change: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
    throw new Error("onWrite not implemented yet!!");
  }

  onCall(data: any, context: CallableContext): Promise<any> {
    throw new Error("onCall not implemented yet!!");
  }

  onRequest(req: Request, res: Response): Promise<any> {
    throw new Error("onRequest not implemented yet!!");
  }
}
