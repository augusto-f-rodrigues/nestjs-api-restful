import { Controller, Post, Body, HttpCode, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateOSSDTO } from '../dtos/update_oss.dto';
import { UpdateOSSService } from '../services/update_oss.service';
import { UpdateV2Service } from '../services/update_v2.service';

@Controller('update')
export class UpdateController {
  constructor(
    private readonly updateOSSService: UpdateOSSService,
    private readonly updateV2Service: UpdateV2Service,
  ) {}

  /**
   * **Rota de Atualização do Update OSS**
   * @param data
   * @returns
   */

  @HttpCode(200)
  @ApiTags('Update')
  @Post()
  async updateOSS(@Body() data: UpdateOSSDTO) {
    return await this.updateOSSService.execute(data);
  }

  @HttpCode(200)
  @ApiTags('Update')
  @Post('v2')
  async updateOSSv2(@Body() id: string) {
    return await this.updateV2Service.execute(id);
  }
}
