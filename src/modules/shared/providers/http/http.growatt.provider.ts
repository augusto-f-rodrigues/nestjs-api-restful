import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { IGrowatt } from "../interfaces/igrowatt";

@Injectable()
export class HttpGrowattProvider implements IGrowatt {
    constructor(
        private readonly httpService: HttpService
    ) {}

    async authenticate(): Promise<Growatt.AuthResponse> {
        try {
            const { data } = await lastValueFrom(this.httpService.post('http://183.62.216.35:8081/ShineOSS/api/v3/supplySystem/getOssToken'))
            return data
        } catch (error) {
            throw new Error("Method not implemented."); 
        }
    }

    async updateOSS(newSerialNumber: string, oldSerialNumber: string, time: string): Promise<Growatt.UpdateOSSResponse> {
        try {

        } catch (error) {
            throw new Error("Method not implemented."); 
        }
    }

}