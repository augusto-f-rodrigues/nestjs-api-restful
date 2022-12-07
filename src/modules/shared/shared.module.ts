import { HttpModule } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';
import { HttpGrowattProvider } from './providers/http/http.growatt.provider';
import { HttpMovideskProvider } from './providers/http/http.movidesk.provider';
import { TicketUtil } from './utils/implementations/ticket.util';

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
      useClass: HttpMovideskProvider,
    },
    {
      provide: 'Ticket',
      useClass: TicketUtil,
    },
  ],
  exports: [
    {
      provide: 'Growatt',
      useClass: HttpGrowattProvider,
    },
    {
      provide: 'Movidesk',
      useClass: HttpMovideskProvider,
    },
    {
      provide: 'Ticket',
      useClass: TicketUtil,
    },
  ],
})
export class SharedModule {}
