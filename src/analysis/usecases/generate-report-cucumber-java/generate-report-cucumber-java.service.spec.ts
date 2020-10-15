import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportCucumberJavaUseCaseService } from './generate-report-cucumber-java.service';

describe('GenerateReportCucumberJavaService', () => {
  let service: GenerateReportCucumberJavaUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateReportCucumberJavaUseCaseService],
    }).compile();

    service = module.get<GenerateReportCucumberJavaUseCaseService>(GenerateReportCucumberJavaUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
