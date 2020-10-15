import { ReportTypes } from '../../usecases/generate-report-usecase/models/report-types';
import { Report, ReportDocument } from './schemas/report-schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReportRegisterGatewayService {

    constructor(@InjectModel(Report.name) private reportModel: Model<ReportDocument>) {        
    }

    async save(type: ReportTypes, report: unknown){
        const createdReport = await this.reportModel.create({
            insertDate: new Date(),
            reportDetails: report,
            type
        });
        return createdReport.save();
    }

}
