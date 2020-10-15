import { ReportRegisterGatewayService } from '../../gateways/report-register-gateway/report-register-gateway.service';
import { TestUnitReport } from '../generate-report-usecase/models/test-unit-report';
import { Injectable } from '@nestjs/common';
import { SpockReport } from 'src/analysis/usecases/generate-report-spock-usecase/models/spock-report';
import { DbGatewayService } from 'src/analysis/gateways/db-gateway/db-gateway.service';

@Injectable()
export class GenerateReportSpockUseCaseService {
    constructor(
        private dbGatewayService: DbGatewayService,
        private reportRegisterGatewayService: ReportRegisterGatewayService
    ) {}

    async execute(service: string, squad: string, report: SpockReport) {
        const testsUnits: TestUnitReport[] = Object.entries(report)
        .map(fileReport => ({
            file: fileReport[0],
            report: fileReport[1]
        }))
        .map(fileReport => ({
            countTests: fileReport.report.stats.totalFeatures,
            unitName: fileReport.file,
            tests: fileReport.report.executedFeatures,
            success: (fileReport.report.stats.successRate === 1)
        }))

        const reportSaved = await this.reportRegisterGatewayService.save("spock", report)
        this.dbGatewayService.saveTestsUnitsAll(squad, 'backend', service, reportSaved._id, testsUnits)
    }
}
