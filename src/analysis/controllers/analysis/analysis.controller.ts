import { AnalysisGenerateQuery } from './vo/analysis-generate-query';
import { AnalysisGenerateParams } from './vo/analysis-generate-params';
import { ReportRegisterGatewayService } from './../../gateways/report-register-gateway/report-register-gateway.service';
import { GenerateReportUsecaseService } from '../../usecases/generate-report-usecase/generate-report-usecase.service';
import { ReportTypes } from '../../usecases/generate-report-usecase/models/report-types';
import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { IsDefined } from 'class-validator';

@Controller('analysis')
export class AnalysisController {

    constructor(
        private generateReportUsecaseService: GenerateReportUsecaseService,
    ){}

    @Post([':type'])
    async generateReport(
        @Param() params: AnalysisGenerateParams, 
        @Query() querys: AnalysisGenerateQuery, 
        @Body() report: unknown){
        await this.generateReportUsecaseService.execute(params.type, querys.squad, querys.proj, report)
    }
}
