import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { IGrowatt } from '../interfaces/igrowatt';
import { GrowattConstant } from '../../constants/growatt.constant';
import * as moment from 'moment';
import { config } from 'dotenv';
import { HttpResponseException } from 'src/core/http/HttpException';
config();

/**
 * Provedor de serviços da Growatt
 * @decorator `@Injectable()`
 */
@Injectable()
export class HttpGrowattProvider implements IGrowatt {
  /**
   * Instanciando um logger
   */
  protected logger = new Logger(HttpGrowattProvider.name);
  /**
   * URL utilizada para fazer requisições à growatt
   */
  protected readonly base_url = process.env.GROWATT_URL;

  /**
   * Construtor para pegar serviços do Axios
   * @param httpService Instanciando serviços http do Axios
   */
  constructor(private readonly httpService: HttpService) {}

  /**
   * Função de autenticação
   * @returns Retorna um objeto onde nele há o token de autenticação
   * @example
   * {
   * result: number;
   * msg: string;
   * obj: string;
   * }
   */
  async authenticate(): Promise<Growatt.AuthResponse> {
    try {
      const { data } = await lastValueFrom<{ data: Growatt.AuthResponse }>(
        this.httpService.post(this.base_url + GrowattConstant.GET_OSS_TOKEN),
      );
      return data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  /**
   * Função para fazer update dos dados no banco de dados dos chineses
   * @param newSerialNumber Novo número de série
   * @param oldSerialNumber Antigo número de série
   * @param time Data no padrão ISO
   * @returns Um objeto de resposta da API chinesa
   * @example
   * {
   * result:0,
   * msg:换机成功!
   * }
   * @remark Obtenha o código de falha de retorno na descrição da falha na página inicial
   */
  async updateOSS(
    newSerialNumber: string,
    oldSerialNumber: string,
    time: string,
  ): Promise<Growatt.UpdateOSSResponse> {
    this.logger.debug('Resquest', { newSerialNumber, oldSerialNumber, time });
    try {
      const { obj } = await this.authenticate();
      const { data } = await lastValueFrom<{ data: Growatt.UpdateOSSResponse }>(
        this.httpService.post(
          this.base_url + GrowattConstant.BX_CHANGE_APP + `?token=${obj}`,
          {
            newSerialNumber,
            oldSerialNumber,
            time: moment(time).format('%y-%m-%d'),
          },
        ),
      );
      return data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }
}
