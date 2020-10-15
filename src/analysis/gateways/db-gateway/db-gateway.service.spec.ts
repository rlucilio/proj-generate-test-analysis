import { Test, TestingModule } from '@nestjs/testing';
import { DbGatewayService } from './db-gateway.service';

describe('FirebaseGatewayService', () => {
  let service: DbGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbGatewayService],
    }).compile();

    service = module.get<DbGatewayService>(DbGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
