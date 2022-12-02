import { HttpModule } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';
import { HttpGrowattProvider } from './providers/http/http.growatt.provider';

@Global()
@Module({
  imports: [HttpModule.register({})],
  providers: [
    {
      provide: 'Growatt',
      useClass: HttpGrowattProvider,
    },
  ],
  exports: [
    {
      provide: 'Growatt',
      useClass: HttpGrowattProvider,
    },
  ],
})
export class SharedModule {}
