import { Inject, Injectable } from '@nestjs/common';
import { IGrowatt } from 'src/modules/shared/providers/interfaces/igrowatt';
import { UpdateOSSDTO } from '../dtos/update_oss.dto';

/**
 * Provedor de serviços do updateOSS V1
 * @decorator `@IInjectable()`
 */
@Injectable()
export class UpdateOSSService {
  /**
   * Construtor que busca os serviços providos da growatt
   * @param growattProvider - Serviços do provider da Growatt
   */
  constructor(
    /**
     * @decorator `@Inject('Growatt')`
     */
    @Inject('Growatt')
    private readonly growattProvider: IGrowatt,
  ) {}

  /**
   * Método assíncrono para update da OSS
   * @param newSerialNumber - Novo número de série
   * @param oldSerialNumber - Antigo número de série
   * @param time - Data no formato ISO
   * @returns Um objeto de resposta da API chinesa
   * @example
   * {
   * result:0,
   * msg:换机成功!
   * }
   * @remark Obtenha o código de falha de retorno na descrição da falha na página inicial
   */
  async execute({ newSerialNumber, oldSerialNumber, time }: UpdateOSSDTO) {
    return await this.growattProvider.updateOSS(
      newSerialNumber,
      oldSerialNumber,
      time,
    );
  }
}
