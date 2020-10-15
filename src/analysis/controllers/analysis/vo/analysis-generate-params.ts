import { ReportTypes } from './../../../usecases/generate-report-usecase/models/report-types';
import { IsIn } from "class-validator";

export class AnalysisGenerateParams {
  @IsIn(['spock', 'cucumber-java', 'jest-unit-front', 'jest-unit-back', 'jest-component', 'cypress'])
  type: ReportTypes;
}
