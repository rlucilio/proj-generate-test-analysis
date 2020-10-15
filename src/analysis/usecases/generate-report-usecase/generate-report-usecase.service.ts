import { CypressReport } from '../generate-report-cypress-usecase/models/cypress-report';
import { GenerateReportCypressUsecaseService } from './../generate-report-cypress-usecase/generate-report-cypress-usecase.service';
import { JestReport } from '../generate-report-jest-usecase/models/jest-report';
import { GenerateReportJestUseCaseService } from './../generate-report-jest-usecase/generate-report-jest-usecase.service';
import { CucumberJavaReport } from '../generate-report-cucumber-java/models/cucumber-java-report';
import { GenerateReportCucumberJavaUseCaseService } from '../generate-report-cucumber-java/generate-report-cucumber-java.service';
import { SpockReport } from 'src/analysis/usecases/generate-report-spock-usecase/models/spock-report';
import { GenerateReportSpockUseCaseService } from '../generate-report-spock-usecase/generate-report-spock-usecase.service';
import { ReportTypes } from './models/report-types';
import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';



@Injectable({ scope: Scope.REQUEST })
export class GenerateReportUsecaseService {

    constructor(
        private generateReportSpockUseCaseService: GenerateReportSpockUseCaseService,
        private generateReportCucumberJavaService: GenerateReportCucumberJavaUseCaseService,
        private generateReportJestUseCaseService: GenerateReportJestUseCaseService,
        private generateReportCypressUsecaseService: GenerateReportCypressUsecaseService
    ) { }

    async execute(type: ReportTypes, squad: string, service: string, report: unknown) {
        if (!type || !squad || !service || !report) {
            throw new HttpException({
                typeValid: !!type,
                squadValid: !!squad,
                serviceValid: !!service,
                report: !!report
            }, HttpStatus.BAD_REQUEST);
        }

        try {
            switch (type) {
                case "spock":
                    await this.generateReportSpockUseCaseService.execute(service, squad, report as SpockReport);
                    break;
                case "cucumber-java":
                    await this.generateReportCucumberJavaService.execute(service, squad, report as CucumberJavaReport[]);
                    break;
                case "jest-unit-back":
                case "jest-component":
                case "jest-unit-front":
                    await this.generateReportJestUseCaseService.execute(type, service, squad, report as JestReport)
                    break;
                case "cypress":
                    await this.generateReportCypressUsecaseService.execute(service, squad, report as CypressReport[])
                    break;
                default:
                    throw new HttpException('Type test invalid', HttpStatus.BAD_REQUEST);
            }
        } catch(error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
