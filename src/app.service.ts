import { Injectable } from '@nestjs/common';

/**
 * Provedor de serviços para o App
 */
@Injectable()
export class AppService {
  /**
   * Função genérica para retorno de uma mensagem para o frontend
   * @returns Uma string
   */
  getHello(): string {
    return 'AnyGrid - UpdateOSS';
  }
}
