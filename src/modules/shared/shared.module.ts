import { HttpModule } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';
import { HttpGrowattProvider } from './providers/http/http.growatt.provider';
import { HttpMovideskProvider } from './providers/http/http.movidesk.provider';

@Global()
@Module({
  imports: [HttpModule.register({})],
  providers: [
    {
      provide: 'Growatt',
      useClass: HttpGrowattProvider,
    },
    {
      provide: 'Movidesk',
      useClass: HttpMovideskProvider
    }
  ],
  exports: [
    {
      provide: 'Growatt',
      useClass: HttpGrowattProvider,
    },
    {
      provide: 'Movidesk',
      useClass: HttpMovideskProvider
    }
  ],
})
export class SharedModule {}
