import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalysisModule } from './analysis/analysis.module';

@Module({
  imports: [
    AnalysisModule,
    MongooseModule.forRoot('mongodb+srv://rlucilio:xJqXCsigFrTbrgh4@cluster0.jsu5r.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
