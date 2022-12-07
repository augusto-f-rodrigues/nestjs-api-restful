import { Inject, Injectable, Logger } from '@nestjs/common';
import { IGrowatt } from 'src/modules/shared/providers/interfaces/igrowatt';
import { IMovidesk } from 'src/modules/shared/providers/interfaces/imovideskt';
import { ITicketUtil } from 'src/modules/shared/utils/interfaces/iticket.util';

@Injectable()
export class UpdateV2Service {
  protected logger = new Logger(UpdateV2Service.name);

  constructor(
    @Inject('Movidesk') private readonly movideskProvider: IMovidesk,
    @Inject('Growatt')
    private readonly growattProvider: IGrowatt,
    @Inject('Ticket') private readonly ticketUtil: ITicketUtil,
  ) {}

  async execute({ id }: any) {
    const { customFieldValues } = await this.movideskProvider.getTicket(id);

    const { snDamaged, snFixedAnygrid, dateIngressIntoStock } =
      this.ticketUtil.findFields(customFieldValues);

    return await this.growattProvider.updateOSS(
      snDamaged,
      snFixedAnygrid,
      dateIngressIntoStock,
    );
  }
}
