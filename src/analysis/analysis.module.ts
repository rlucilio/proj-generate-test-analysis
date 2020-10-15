import { Report, ReportSchema } from './gateways/report-register-gateway/schemas/report-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GenerateReportJestUseCaseService } from './usecases/generate-report-jest-usecase/generate-report-jest-usecase.service';
import { Module } from '@nestjs/common';
import { AnalysisController } from './controllers/analysis/analysis.controller';
import { GenerateReportUsecaseService } from './usecases/generate-report-usecase/generate-report-usecase.service';
import { GenerateReportSpockUseCaseService } from './usecases/generate-report-spock-usecase/generate-report-spock-usecase.service';
import { GenerateReportCucumberJavaUseCaseService } from './usecases/generate-report-cucumber-java/generate-report-cucumber-java.service';
import { DbGatewayService } from './gateways/db-gateway/db-gateway.service';
import { FirebaseProvider } from 'src/shared/providers/firebase.provider';
import { GenerateReportCypressUsecaseService } from './usecases/generate-report-cypress-usecase/generate-report-cypress-usecase.service';
import { SaveReportServiceUseCase } from './usecases/save-report-usecase/save-report-usecase.service';
import { ReportRegisterGatewayService } from './gateways/report-register-gateway/report-register-gateway.service';

@Module({
  controllers: [AnalysisController],
  providers: [
    GenerateReportUsecaseService,
    GenerateReportSpockUseCaseService, 
    GenerateReportCucumberJavaUseCaseService, 
    DbGatewayService,
    FirebaseProvider,
    GenerateReportJestUseCaseService,
    GenerateReportCypressUsecaseService,
    SaveReportServiceUseCase,
    ReportRegisterGatewayService
  ],
  imports: [MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }])],
})
export class AnalysisModule {}