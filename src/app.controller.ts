import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

/**
 * Controller do App
 */
@Controller()
export class AppController {
  /**
   * @param appService - Importando serviços do App
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Rota get main para exibir uma mensagem na tela
   * @decorator `@ApiTags('Main')`
   * @decorator `@Get()`
   * @returns Uma string
   */
  @ApiTags('Main')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
