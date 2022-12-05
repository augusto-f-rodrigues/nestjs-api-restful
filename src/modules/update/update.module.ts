/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { UpdateController } from './controllers/update.controller';
import { UpdateOSSService } from './services/update_oss.service';
import { UpdateV2Service } from './services/update_v2.service';

@Module({
  imports: [SharedModule],
  controllers: [UpdateController],
  providers: [UpdateOSSService, UpdateV2Service],
})
export class UpdateModule {}
