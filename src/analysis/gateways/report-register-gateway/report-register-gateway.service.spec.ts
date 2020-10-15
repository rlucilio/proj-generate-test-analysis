import { Test, TestingModule } from '@nestjs/testing';
import { ReportRegisterGatewayService } from './report-register-gateway.service';

describe('ReportRegisterGatewayService', () => {
  let service: ReportRegisterGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportRegisterGatewayService],
    }).compile();

    service = module.get<ReportRegisterGatewayService>(ReportRegisterGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
