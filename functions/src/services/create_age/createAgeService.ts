import {Child} from "../../models/child";
import {Age} from "../../models/age";
import moment = require("moment");

export class CreateAgeService {
  childToAge(child: Child): Age {
    const now = moment();
    const years = now.diff(child.dob, 'years');
    const months = now.diff(child.dob, 'months');
    const days = now.diff(child.dob, 'days');
    return new Age(undefined, child.ref, years, months, days);
  }
}
