import { HttpModule } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [HttpModule.register({})],
  providers: [],
  exports: [],
})
export class SharedModule {}
