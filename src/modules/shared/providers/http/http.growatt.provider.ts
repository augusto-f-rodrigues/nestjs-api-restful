import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { IGrowatt } from '../interfaces/igrowatt';
import { GrowattConstant } from '../../constants/growatt.constant';
import * as moment from 'moment';
import { config } from 'dotenv';
import { HttpResponseException } from 'src/core/http/HttpException';
config();

@Injectable()
export class HttpGrowattProvider implements IGrowatt {
  protected readonly base_url = process.env.GROWATT_URL;

  constructor(private readonly httpService: HttpService) {}

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

  async updateOSS(
    newSerialNumber: string,
    oldSerialNumber: string,
    time: string,
  ): Promise<Growatt.UpdateOSSResponse> {
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
