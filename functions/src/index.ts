import functions = require("firebase-functions");
import admin = require("firebase-admin");
import {DBUtil} from "./util/dBUtil";
import {CreateAgeHandler} from "./services/create_age/createAgeHandler";

if (admin.apps.length === 0) admin.initializeApp();

export const createAge = functions.firestore.document(`${DBUtil.CHILD}/{childId}`)
  .onCreate(new CreateAgeHandler().onCreate);
