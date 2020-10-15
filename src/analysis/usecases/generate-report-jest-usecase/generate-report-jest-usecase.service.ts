import { ReportRegisterGatewayService } from './../../gateways/report-register-gateway/report-register-gateway.service';
import { DbGatewayService } from 'src/analysis/gateways/db-gateway/db-gateway.service';
import { ReportTypes } from '../generate-report-usecase/models/report-types';
import { Injectable } from '@nestjs/common';
import { JestReport } from 'src/analysis/usecases/generate-report-jest-usecase/models/jest-report';
import { TestComponentReport, TestComponentReportScenario } from '../generate-report-usecase/models/test-component-report';
import { TestUnitReport } from '../generate-report-usecase/models/test-unit-report';

@Injectable()
export class GenerateReportJestUseCaseService {
    constructor(
        private dbGateway: DbGatewayService,
        private reportRegisterGatewayService: ReportRegisterGatewayService
    ) {}

    async execute(type: ReportTypes, service: string, squad: string, report: JestReport) {
        if (type === 'jest-unit-front' || type === 'jest-unit-back') {
            const testsReport = this.generateReportUnit(report)
            const reportSaved = await this.reportRegisterGatewayService.save(type, report)
            this.dbGateway.saveTestsUnitsAll(squad, type === 'jest-unit-front' ? 'frontend' : 'backend', service, reportSaved._id, testsReport)
        } else {
            const testsReport = this.generateReportComponent(report)
            const reportSaved = await this.reportRegisterGatewayService.save(type, report)
            this.dbGateway.saveTestsComponentAll(squad, 'backend', service, reportSaved._id, testsReport)
        }
    }

    generateReportUnit(report: JestReport): TestUnitReport[] {
        return report.testResults.map(reportTest => ({
            countTests: reportTest.numPassingTests,
            unitName: reportTest.testFilePath,
            success: !(reportTest.numFailingTests > 0),
            tests: reportTest.testResults.map(test => test.fullName)
        }))
    }

    generateReportComponent(report: JestReport): TestComponentReport[] {
        return report.testResults.map(reportTest => ({
            success: !(reportTest.numFailingTests > 0),
            countScenarios: reportTest.numPassingTests,
            feature: reportTest.testResults[0].ancestorTitles[0],
            fileName: reportTest.testFilePath,
            scenarios: reportTest.testResults.map(scenario => ({
                title: scenario.fullName,
                steps: []
            } as TestComponentReportScenario))
        }))
    }

}
