import { Test, TestingModule } from '@nestjs/testing';
import { ActuatorsController } from './actuators.controller';

describe('ActuatorsController', () => {
  let controller: ActuatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActuatorsController],
    }).compile();

    controller = module.get<ActuatorsController>(ActuatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
