import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportSpockUseCaseService } from './generate-report-spock-usecase.service';

describe('GenerateReportSpockUsecaseService', () => {
  let service: GenerateReportSpockUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateReportSpockUseCaseService],
    }).compile();

    service = module.get<GenerateReportSpockUseCaseService>(GenerateReportSpockUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
