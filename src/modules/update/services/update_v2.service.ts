import { Inject, Injectable, Logger } from '@nestjs/common';
import { IGrowatt } from 'src/modules/shared/providers/interfaces/igrowatt';
import { IMovidesk } from 'src/modules/shared/providers/interfaces/imovideskt';
import { ITicketUtil } from 'src/modules/shared/utils/interfaces/iticket.util';

/**
 * Provedor de serviços do updateOSS V2
 * @decorator `@IInjectable()`
 */
@Injectable()
export class UpdateV2Service {
  /**
   * Instanciando a classe Logger
   */
  protected logger = new Logger(UpdateV2Service.name);

  /**
   * Construtor que busca os serviços que serão necessários
   *
   * @param movideskProvider - Serviços do provider do Movidesk
   * @param growattProvider - Serviços do provider da Growatt
   * @param ticketUtil - Função do ticket vinda do Utils
   */
  constructor(
    /**
     * @decorator `@Inject('Movidesk')`
     */
    @Inject('Movidesk') private readonly movideskProvider: IMovidesk,
    /**
     * @decorator `@Inject('Growatt')`
     */
    @Inject('Growatt')
    private readonly growattProvider: IGrowatt,
    /**
     * @decorator `@Inject('Ticket')`
     */
    @Inject('Ticket') private readonly ticketUtil: ITicketUtil,
  ) {}

  /**
   * Método assíncrono para update da OSS
   * @param id - Identificador do ticket
   * @returns Um objeto de resposta da API chinesa
   * @example
   * {
   * result:0,
   * msg:换机成功!
   * }
   * @remark Obtenha o código de falha de retorno na descrição da falha na página inicial
   */
  async execute({ id }: any) {
    const { customFieldValues } = await this.movideskProvider.getTicket(id);

    const { snDamaged, snFixedAnygrid, dateIngressIntoStock } =
      this.ticketUtil.findFields(customFieldValues);

    this.logger.debug('Request', {
      snDamaged,
      snFixedAnygrid,
      dateIngressIntoStock,
    });

    const { result, msg } = await this.growattProvider.updateOSS(
      snDamaged,
      snFixedAnygrid,
      dateIngressIntoStock,
    );

    const message: Movidesk.CustomFieldValue = {
      customFieldId: 127041,
      customFieldRuleId: 63615,
      line: 1,
      value: msg,
      items: [],
    };

    customFieldValues.push(message);

    return await this.movideskProvider.updateTicket(customFieldValues, id);
  }
}
