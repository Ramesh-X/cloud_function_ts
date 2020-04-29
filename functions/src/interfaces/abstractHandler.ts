import DocumentSnapshot = FirebaseFirestore.DocumentSnapshot;
import {Change, EventContext} from "firebase-functions";
import {CallableContext} from "firebase-functions/lib/providers/https";

export interface AbstractHandler {
  onCreate(snap: DocumentSnapshot, context: EventContext): Promise<any>;

  onDelete(snap: DocumentSnapshot, context: EventContext): Promise<any>;

  onUpdate(change: Change<DocumentSnapshot>, context: EventContext): Promise<any>;

  onWrite(change: Change<DocumentSnapshot>, context: EventContext): Promise<any>;

  onCall(data: any, context: CallableContext): Promise<any>;

  onRequest(req: Request, res: Response): Promise<any>;
}
