import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TargetController } from './targert/target.controller';
import { TargetService } from './targert/target.service';

@Module({
  imports: [],
  controllers: [AppController, TargetController],
  providers: [AppService, TargetService],
})
export class AppModule {}
