/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { UpdateController } from './controllers/update.controller';
import { UpdateOSSService } from './services/update_oss.service';

@Module({
  imports: [SharedModule],
  controllers: [UpdateController],
  providers: [UpdateOSSService],
})
export class UpdateModule {}
