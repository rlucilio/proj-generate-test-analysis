import { ReportTypes } from '../../../usecases/generate-report-usecase/models/report-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
    @Prop()
    id: Types.ObjectId;

    @Prop()
    type: ReportTypes;

    @Prop()
    insertDate: Date;

    @Prop()
    reportDetails: unknown;
}

export const ReportSchema = SchemaFactory.createForClass(Report);