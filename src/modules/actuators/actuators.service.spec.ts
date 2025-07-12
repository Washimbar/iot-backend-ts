import { Test, TestingModule } from '@nestjs/testing';
import { ActuatorsService } from './actuators.service';

describe('ActuatorsService', () => {
  let service: ActuatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActuatorsService],
    }).compile();

    service = module.get<ActuatorsService>(ActuatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
