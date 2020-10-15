import { ReportRegisterGatewayService } from './../../gateways/report-register-gateway/report-register-gateway.service';
import { CypressReport } from './models/cypress-report';
import { DbGatewayService } from 'src/analysis/gateways/db-gateway/db-gateway.service';
import { Injectable } from '@nestjs/common';
import { TestComponentReport, TestComponentReportScenario } from '../generate-report-usecase/models/test-component-report';

@Injectable()
export class GenerateReportCypressUsecaseService {

    constructor(
        private dbGateway: DbGatewayService,
        private reportRegisterGatewayService: ReportRegisterGatewayService
    ) {}

    async execute(service: string, squad: string, report: CypressReport[]) {
        const testsComponents: TestComponentReport[] = report.map(cypressReport => ({
            countScenarios: cypressReport.elements.length,
            feature: cypressReport.name,
            fileName: cypressReport.uri,
            success: cypressReport.elements.map(scenarios => scenarios.steps).reduce((previousSteps, currentSteps) => currentSteps.concat(previousSteps), []).every(step => step.result.status  === 'passed'),
            scenarios: cypressReport.elements.map(scenario => ({
                title: scenario.name,
                steps: scenario.steps.map(step => ({
                    description: step.name,
                    type: step.keyword
                }))
            } as TestComponentReportScenario))
        }))
        const reportSaved = await this.reportRegisterGatewayService.save("cypress", report)
        this.dbGateway.saveTestsComponentAll(squad, 'frontend', service, reportSaved._id, testsComponents)
    }
}
