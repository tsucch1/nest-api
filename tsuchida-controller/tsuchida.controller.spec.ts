import { Test, TestingModule } from '@nestjs/testing';
import { TsuchidaController } from './tsuchida.controller';

describe('TsuchidaController', () => {
  let controller: TsuchidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TsuchidaController],
    }).compile();

    controller = module.get<TsuchidaController>(TsuchidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
