import {Child} from "../../models/child";
import {Age} from "../../models/age";
import moment = require("moment");

export class CreateAgeService {
  childToAge(child: Child): Age {
    const now = moment();
    const duration = moment.duration(now.diff(child.dob?.toDate()));
    return new Age(undefined, child.ref, duration.years(), duration.months(), duration.days());
  }
}
