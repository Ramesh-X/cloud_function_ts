import {Child} from "../../models/child";
import {Age} from "../../models/age";
import {AgeDAO} from "../../dao/ageDAO";
import moment = require("moment");

export class CreateAgeService {
  private ageDAO = new AgeDAO();

  childToAge(child: Child): Age {
    const now = moment();
    const duration = moment.duration(now.diff(child.dob));
    return new Age(undefined, child.ref, duration.years(), duration.months(), duration.days());
  }

  async processChild(child: Child): Promise<any> {
    const age = this.childToAge(child);
    await this.ageDAO.add(age);
  }
}
