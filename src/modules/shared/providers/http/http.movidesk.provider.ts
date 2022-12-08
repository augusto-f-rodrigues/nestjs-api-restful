import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpResponseException } from 'src/core/http/HttpException';
import { MovideskConstant } from '../../constants/movidesk.constant';
import { config } from 'dotenv';
config();

/**
 * Provedor de serviços da Growatt
 * @decorator `@Injectable()`
 */
@Injectable()
export class HttpMovideskProvider {
  /**
   * Instanciando um logger
   */
  protected logger = new Logger(HttpMovideskProvider.name);
  /**
   * URL utilizada para fazer requisições ao movidesk
   */
  protected readonly base_url = process.env.MOVIDESK_URL;
  /**
   * Token utilizado para liberar as ações ao movidesk
   */
  protected readonly token = process.env.MOVIDESK_TOKEN;

  /**
   * Construtor para pegar serviços do Axios
   * @param httpService Instanciando serviços http do Axios
   */
  constructor(private readonly httpService: HttpService) {}

  /**
   * Método para pegar informações de um ticket específico
   * @param id Identificador do ticket do movidesk
   * @returns Um json com os dados do ticket
   */
  async getTicket(id: string): Promise<Movidesk.TicketResponse> {
    try {
      const { data } = await lastValueFrom<{ data: Movidesk.TicketResponse }>(
        this.httpService.get(
          this.base_url +
            MovideskConstant.TICKETS +
            `?token=${this.token}` +
            `&id=${id}`,
        ),
      );
      this.logger.debug('data', data);
      return data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  /**
   * Função que atualiza/insere os dados no ticket do movidesk
   * @param customFieldValues Campos que serão inseridos no movidesk
   * @param id Identificador do ticket
   * @returns Resposta de sucesso caso consigo dar update no movidesk
   */
  async updateTicket(
    customFieldValues: Movidesk.CustomFieldValue[],
    id: string,
  ) {
    try {
      const response = await lastValueFrom(
        this.httpService.patch(
          this.base_url +
            MovideskConstant.TICKETS +
            `?token=${this.token}` +
            `&id=${id}`,
          { customFieldValues: customFieldValues },
        ),
      );
      this.logger.debug('Update Ticket Response:', response);
      return response;
    } catch (error) {
      this.logger.error(error)
      throw new HttpResponseException(error);
    }
  }
}
