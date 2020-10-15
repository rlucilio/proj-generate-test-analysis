import { Test, TestingModule } from '@nestjs/testing';
import { SaveReportServiceUseCase } from './save-report-usecase.service';

describe('SaveReportService', () => {
  let service: SaveReportServiceUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveReportServiceUseCase],
    }).compile();

    service = module.get<SaveReportServiceUseCase>(SaveReportServiceUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
