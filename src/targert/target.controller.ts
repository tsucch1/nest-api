import { Controller, Get } from '@nestjs/common';
import { TargetService } from './target.service';

@Controller()
export class TargetController {
  constructor(private readonly targetService: TargetService) {}

  @Get('20240722')
  gethobbyData() {
    return this.targetService.gethobbyData();
  }
}