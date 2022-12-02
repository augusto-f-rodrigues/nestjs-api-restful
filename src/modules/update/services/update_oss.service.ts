import { Inject, Injectable } from '@nestjs/common';
import { IGrowatt } from 'src/modules/shared/providers/interfaces/igrowatt';
import { UpdateOSSDTO } from '../dtos/update_oss.dto';

@Injectable()
export class UpdateOSSService {
  constructor(
    @Inject('Growatt')
    private readonly growattProvider: IGrowatt,
  ) {}

  async execute({ newSerialNumber, oldSerialNumber, time }: UpdateOSSDTO) {
    return await this.growattProvider.updateOSS(
      newSerialNumber,
      oldSerialNumber,
      time,
    );
  }
}
