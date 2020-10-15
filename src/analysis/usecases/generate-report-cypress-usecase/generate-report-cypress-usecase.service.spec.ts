import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportCypressUsecaseService } from './generate-report-cypress-usecase.service';

describe('GenerateReportCypressUsecaseService', () => {
  let service: GenerateReportCypressUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateReportCypressUsecaseService],
    }).compile();

    service = module.get<GenerateReportCypressUsecaseService>(GenerateReportCypressUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
