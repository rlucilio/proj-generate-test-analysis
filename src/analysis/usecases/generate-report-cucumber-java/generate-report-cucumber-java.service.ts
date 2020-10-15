import { ReportRegisterGatewayService } from './../../gateways/report-register-gateway/report-register-gateway.service';
import { Injectable } from '@nestjs/common';
import { CucumberJavaReport } from 'src/analysis/usecases/generate-report-cucumber-java/models/cucumber-java-report';
import { DbGatewayService } from 'src/analysis/gateways/db-gateway/db-gateway.service';
import { TestComponentReport, TestComponentReportScenario } from '../generate-report-usecase/models/test-component-report';

@Injectable()
export class GenerateReportCucumberJavaUseCaseService {
    constructor(
        private dbGatewayService: DbGatewayService,
        private reportRegisterGatewayService: ReportRegisterGatewayService
    ) {}

    async execute(service: string, squad: string, report: CucumberJavaReport[]) {
        const testsComponents: TestComponentReport[] =  report.map(featureReport => {
            const scenarios: TestComponentReportScenario[] = featureReport.elements.map(scenario => (
                {
                    title: scenario.name,
                    steps: scenario.steps.map(step => ({
                        description: step.name,
                        type: step.keyword
                    }))
                }))

            const feature: TestComponentReport = {
                feature: featureReport.name,
                fileName: featureReport.uri,
                countScenarios: featureReport.elements.length,
                success: featureReport.elements.map(scenario => scenario.steps).reduce((stepsPrevious, stepsCurrent) => stepsCurrent.concat(stepsPrevious), []).every(step => step.result.status === 'passed'),
                scenarios
            }

            return feature;
        })
        const reportSaved = await this.reportRegisterGatewayService.save("cucumber-java", report)

        this.dbGatewayService.saveTestsComponentAll(squad, 'backend', service, reportSaved._id, testsComponents)
    }
}
