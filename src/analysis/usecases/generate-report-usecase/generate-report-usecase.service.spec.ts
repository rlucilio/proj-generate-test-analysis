import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportUsecaseService } from './generate-report-usecase.service';

describe('GenerateReportUsecaseService', () => {
  let service: GenerateReportUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateReportUsecaseService],
    }).compile();

    service = module.get<GenerateReportUsecaseService>(GenerateReportUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
