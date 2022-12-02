import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateOSSDTO } from '../dtos/update_oss.dto';
import { UpdateOSSService } from '../services/update_oss.service';

@Controller('update')
export class UpdateController {
  constructor(private readonly updateOSSService: UpdateOSSService) {}

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
}
