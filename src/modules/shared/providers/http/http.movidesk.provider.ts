import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpResponseException } from 'src/core/http/HttpException';
import { MovideskConstant } from '../../constants/movidesk.constant';
import { config } from 'dotenv';
config();

@Injectable()
export class HttpMovideskProvider {
  protected readonly base_url = process.env.MOVIDESK_URL;
  protected readonly token = process.env.MOVIDESK_TOKEN;

  constructor(private readonly httpService: HttpService) {}

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
      return data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }
}
