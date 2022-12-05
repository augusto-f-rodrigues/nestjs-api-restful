import { Inject, Injectable } from '@nestjs/common';
import { IMovidesk } from 'src/modules/shared/providers/interfaces/imovideskt';

@Injectable()
export class UpdateV2Service {
  constructor(
    @Inject('Movidesk') private readonly movideskProvider: IMovidesk,
  ) {}

  async execute({ id }: any) {
    return await this.movideskProvider.getTicket(id)
  }
}
