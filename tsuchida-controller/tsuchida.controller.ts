import { Controller, Get } from '@nestjs/common';

@Controller('tsuchida')
export class TsuchidaController {
 @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
