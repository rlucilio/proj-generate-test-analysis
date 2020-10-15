import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportJestUseCaseService } from './generate-report-jest-usecase.service';

describe('GenerateReportJestUnitFrontUsecaseService', () => {
  let service: GenerateReportJestUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateReportJestUseCaseService],
    }).compile();

    service = module.get<GenerateReportJestUseCaseService>(GenerateReportJestUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
